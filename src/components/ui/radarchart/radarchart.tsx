import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  type ChartOptions,
  type Plugin,
  type Chart,
  type Scale,
  type ScriptableContext,
} from "chart.js"
import { Radar } from "react-chartjs-2"
import { useMemo } from "react"

export interface RadarChartProps {
  data?: number[]
  labels?: string[]
  height?: string
  width?: string
  className?: string
  options?: ChartOptions<"radar">
  labelOffsets?: { x: number; y: number }[]
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
)

const roundedGridPlugin: Plugin<"radar"> = {
  id: "roundedGridPlugin",
  beforeDraw(chart: Chart<"radar">) {
    const { ctx, scales: { r } } = chart
    const scale = r as Scale & { getLabels: () => string[]; getDistanceFromCenterForValue: (v: number) => number; getPointPosition: (i: number, d: number) => { x: number; y: number } }

    if (!scale) return

    const numPoints = scale.getLabels().length
    const ticks = scale.ticks

    ctx.save()

    ticks.forEach((tick, index) => {
      // Skip 0 value if preferred, usually center point
      if (tick.value === 0 && Array.isArray(ticks) && ticks.length > 1) return

      //  getDistanceFromCenterForValue exists on RadialLinearScale
      const distanceFromCenter = scale.getDistanceFromCenterForValue(tick.value)

      ctx.beginPath()

      const isOuter = index === ticks.length - 1

      if (isOuter) {
        ctx.strokeStyle = "#686868"
        ctx.lineWidth = 0.5
      } else {
        ctx.strokeStyle = "#686868"
        ctx.lineWidth = 0.5 // Thicker inner grid lines
      }

      const positions = []
      for (let i = 0; i < numPoints; i++) {
        positions.push(scale.getPointPosition(i, distanceFromCenter))
      }

      if (positions.length < 3) return

      const cornerRadius = 26// Border radius for the grid lines

      const first = positions[0]
      const last = positions[positions.length - 1]

      const startX = (last.x + first.x) / 2
      const startY = (last.y + first.y) / 2

      ctx.moveTo(startX, startY)

      for (let i = 0; i < numPoints; i++) {
        const p = positions[i]
        const next = positions[(i + 1) % numPoints]

        ctx.arcTo(p.x, p.y, next.x, next.y, cornerRadius)
      }

      ctx.closePath()
      ctx.stroke()
    })

    ctx.restore()
  },
}

const gridBackgroundPlugin: Plugin<"radar"> = {
  id: "gridBackgroundPlugin",
  beforeDraw(chart: Chart<"radar">) {
    const { ctx, scales: { r } } = chart
    const scale = r as Scale & { getLabels: () => string[]; getDistanceFromCenterForValue: (v: number) => number; getPointPosition: (i: number, d: number) => { x: number; y: number } }

    if (!scale) return

    const numPoints = scale.getLabels().length
    const ticks = scale.ticks
    const cornerRadius = 26

    ctx.save()

    // Helper to trace a rounded path
    const traceRoundedPath = (positions: { x: number; y: number }[]) => {
      if (positions.length < 3) return
      const first = positions[0]
      const last = positions[positions.length - 1]
      const startX = (last.x + first.x) / 2
      const startY = (last.y + first.y) / 2

      ctx.moveTo(startX, startY)

      for (let i = 0; i < numPoints; i++) {
        const p = positions[i]
        const next = positions[(i + 1) % numPoints]
        ctx.arcTo(p.x, p.y, next.x, next.y, cornerRadius)
      }
    }

    // Iterate through ticks to create bands
    // key: 0->25 (Band 1), 25->50 (Band 2), 50->75 (Band 3), 75->100 (Band 4)
    // Ticks usually: [0, 25, 50, 75, 100]
    // We want to fill Band 1 (0-25) and Band 3 (50-75) with light color
    // This corresponds to index 1 (value 25) and index 3 (value 75) in the loop if we start from 1

    for (let i = 1; i < ticks.length; i++) {
      const outerTick = ticks[i]
      const innerTick = ticks[i - 1]

      const outerDistance = scale.getDistanceFromCenterForValue(outerTick.value)
      const innerDistance = scale.getDistanceFromCenterForValue(innerTick.value)

      const outerPositions = []
      const innerPositions = []

      for (let j = 0; j < numPoints; j++) {
        outerPositions.push(scale.getPointPosition(j, outerDistance))
        innerPositions.push(scale.getPointPosition(j, innerDistance))
      }

      ctx.beginPath()
      
      // Trace Outer (Clockwise)
      traceRoundedPath(outerPositions)
      
      // Trace Inner (Counter-Clockwise) if not center
      if (innerTick.value > 0) {
          // Reverse positions for CCW winding
          // Note: traceRoundedPath logic uses (i+1)%numPoints for 'next'. 
          // Reversing the array makes it trace in reverse order.
          traceRoundedPath([...innerPositions].reverse())
      }

      ctx.closePath()
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)" 
      ctx.fill()
    }

    ctx.restore()
  },
}

const customLabelsPlugin: Plugin<"radar"> = {
  id: "customLabelsPlugin",
  afterDraw(chart: Chart<"radar">) {
    const { ctx, scales: { r } } = chart
    if (!r) return;

    const simpleScale = r as Scale & { getDistanceFromCenterForValue: (v: number) => number; getPointPosition: (i: number, d: number) => { x: number; y: number } };
    const outerDistance = simpleScale.getDistanceFromCenterForValue(simpleScale.max);


    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const dataValues = chart.data.datasets[0].data as number[];
    const labels = chart.data.labels as string[];

    labels.forEach((label, index) => {
      // Base point on the outer edge
      const point = simpleScale.getPointPosition(index, outerDistance);
      
      // Manual X/Y nudges per index
      // @ts-expect-error - Custom plugin options are not typed in Chart.js types
      const offsets = chart.options.plugins?.customLabelsPlugin?.offsets || [];
      const offset = offsets[index] || { x: 0, y: 0 };
      
      const xOffset = offset.x;
      const yOffset = offset.y;

      const finalX = point.x + xOffset;
      const finalY = point.y + yOffset;

      const value = dataValues[index];

      const fontFamily = window.getComputedStyle(document.body).fontFamily || "'DM Sans', sans-serif";
      // Draw Value (Green, Bold)
      ctx.font = `700 20px ${fontFamily}`;
      ctx.fillStyle = "#B8FF5F";
      ctx.fillText(`${value}%`, finalX, finalY - 15);

      // Draw Label (Grey, Regular)
      ctx.font = `500 16px ${fontFamily}`;
      ctx.fillStyle = "#C0C0C0";
      ctx.fillText(label, finalX, finalY + 10);
    })

    ctx.restore();
  },
}

export const RadarChart = ({ 
  data: dataProp = [75, 50, 70, 45, 85], 
  labels: labelsProp = ["Speaking ", "Writing ", "Grammar/Vocab", "Listening ", "Reading "], 
  height = "100%", 
  width = "100%", 
  className,
  options: optionsProp,
  labelOffsets = [
    { x: 0, y: -20 },   // Top (Speaking)
    { x: 25, y: -30 },  // Top Right (Writing)
    { x: 45, y: 15 },   // Bottom Right (Grammar/Vocab)
    { x: -45, y: 15 },  // Bottom Left (Listening)
    { x: -25, y: -30 }  // Top Left (Reading)
  ],
  ...rest 
}: RadarChartProps) => {
  const data = useMemo(() => ({
    labels: labelsProp,
    datasets: [
      {
        data: dataProp,

        fill: true,

        backgroundColor: (context: ScriptableContext<"radar">) => {
          const chart = context.chart
          const ctx = chart.ctx
          const scale = chart.scales.r as Scale & { yCenter: number; drawingArea: number }

          if (!scale) return "rgba(184,255,95,0.25)"

          const top = scale.yCenter - scale.drawingArea
          const bottom = scale.yCenter + scale.drawingArea

          //  LINEAR gradient 
          const gradient = ctx.createLinearGradient(
            0,
            top,
            0,
            bottom
          )

          // EXACT image-like stops
          gradient.addColorStop(0.0, "rgba(184,255,95,0.95)") // bright top
          gradient.addColorStop(0.25, "rgba(165,230,110,0.65)")
          gradient.addColorStop(0.55, "rgba(140,190,120,0.30)")
          gradient.addColorStop(0.75, "rgba(140,190,120,0.12)")
          gradient.addColorStop(1.0, "rgba(244, 245, 243, 0.02)") // fade bottom

          return gradient
        },

        borderColor: "#B8FF5F",
        borderWidth: 2,

        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#FFFFFF",
        pointRadius: 5,
        pointHoverRadius: 6,
      },
    ]
  }), [dataProp, labelsProp])

  const options: ChartOptions<"radar"> = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 50 // Ensure labels aren't cut off
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
          stepSize: 25,
        },
        angleLines: {
          display: false,
        },
        grid: {
          display: false,

        },
        pointLabels: {
          display: false, // Hide default labels
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      // Pass offsets to the plugin via options
      customLabelsPlugin: {
        offsets: labelOffsets
      }
    },
    ...optionsProp,
  }), [optionsProp, labelOffsets])

  return (
    <div style={{ height, width }} className={className} {...rest}>
      <Radar
        data={data}
        options={options}
        plugins={[gridBackgroundPlugin, roundedGridPlugin, customLabelsPlugin]}
      />
    </div>
  )
}
