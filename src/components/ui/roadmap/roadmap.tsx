"use client"

import { useMemo } from "react"
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import type { ScriptableContext, ChartOptions, ChartData, Plugin } from "chart.js"
import { Line } from "react-chartjs-2"
import { Component } from "react"
import type { ErrorInfo, ReactNode } from "react"

class ChartErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Chart Error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full items-center justify-center rounded-[32px] bg-black text-white/50">
          <span className="text-sm">Cannot load chart</span>
        </div>
      )
    }

    return this.props.children
  }
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export interface Milestone {
  id: string | number

  percentage?: string
  topLabel?: string
  bottomLabel?: string
  levelText?: string
  color?: string
  hidden?: boolean
}

export interface RoadmapStyles {
  dashedLine?: {
    color?: string
    width?: number
    dash?: number[]
  }
  labels?: {
    fontFamily?: string
    topLabel?: { color?: string; font?: string; offset?: number }
    percentage?: { color?: string; font?: string; offset?: number }
    bottomLabel?: { color?: string; font?: string; offset?: number }
    levelText?: { color?: string; font?: string; offset?: number }
  }
  point?: {
    radius?: number
    hoverRadius?: number
    backgroundColor?: string
    borderColor?: string
    borderWidth?: number
  }
  container?: string
}

export interface RoadmapProps {
  milestones?: Milestone[]
  styles?: RoadmapStyles
  data?: ChartData<"line">
  options?: ChartOptions<"line">
  plugins?: Plugin<"line">[]
  className?: string
  width?: string | number
  height?: string | number
}

const EMPTY_STYLES: RoadmapStyles = {}
const EMPTY_PLUGINS: Plugin<"line">[] = []

const defaultMilestones: Milestone[] = [
  {
    id: "start-node",

    hidden: true,
  },
  {
    id: 1,

    percentage: "30%",
    topLabel: "Start",
    bottomLabel: "B1",
    levelText: "Intermediate",
    color: "#F2B61E",
    hidden: false,
  },
  {
    id: 2,

    percentage: "45%",
    topLabel: "Month 2",
    color: "#E4D351",
    hidden: false,
  },
  {
    id: 3,

    percentage: "60%",
    topLabel: "Month 3",
    bottomLabel: "B2",
    levelText: "Upper – Intermediate",
    color: "#A3FF6B", 
    hidden: false,
  },
  {
    id: "end-node",

    hidden: true,
  },
]

// Custom plugin for labels and effects
const roadmapLabelsPlugin = {
  id: "roadmapLabels",
  afterDatasetsDraw(chart: ChartJS) {
    const { ctx } = chart
    // @ts-expect-error - Custom plugin options
    const pluginOpts = chart.options.plugins?.roadmapLabels || {}
    const milestones = (pluginOpts.milestones || []) as Milestone[]
    const styles = (pluginOpts.styles || {}) as RoadmapStyles

    if (!milestones.length) return

    const meta = chart.getDatasetMeta(0)

    // Defaults
    const dashColor = styles.dashedLine?.color || "rgba(255, 255, 255)"
    const dashWidth = styles.dashedLine?.width || 1
    const dashArray = styles.dashedLine?.dash || [4, 6]
    
    const fontFamily = styles.labels?.fontFamily || "'DM Sans', sans-serif"
    const isDense = milestones.length > 8;

    // Font sizes based on density AND screen real estate
    // Making them quite small to fit 12 months in narrow width
    const topLabelFont = isDense ? `500 9px ${fontFamily}` : `500 14px ${fontFamily}`;
    const percentageFont = isDense ? `600 14px ${fontFamily}` : `600 25px ${fontFamily}`;
    const bottomLabelFont = isDense ? `bold 9px ${fontFamily}` : `bold 14px ${fontFamily}`;
    const levelTextFont = isDense ? `600 9px ${fontFamily}` : `600 14px ${fontFamily}`;

    meta.data.forEach((element: any, index: number) => {
      const milestone = milestones[index]
      if (!milestone || milestone.hidden) return

      const { x, y } = element.tooltipPosition()
      
      const isOdd = index % 2 !== 0;
      // Only stagger if dense. If sparse (few points), we have enough width, so align all same height.
      const staggerOffsetTop = isDense && isOdd ? 50 : 0;
      // Reduced stagger for bottom to keep them closer to points while still separating
      const staggerOffsetBottom = isOdd ? (isDense ? 20 : 25) : 0;

      // Dashed vertical line (UP from point)
      ctx.save()
      ctx.beginPath()
      ctx.setLineDash(dashArray) 
      ctx.lineCap = "round"
      ctx.strokeStyle = dashColor
      ctx.lineWidth = dashWidth
      // Extend dashed line if staggered up
      const dashTopY = y - 65 - staggerOffsetTop;
      ctx.moveTo(x, y - 12) 
      ctx.lineTo(x, dashTopY) 
      ctx.stroke()
      ctx.restore()

      // Top Label
      if (milestone.topLabel) {
        const s = styles.labels?.topLabel
        ctx.save()
        ctx.font = s?.font || topLabelFont
        ctx.fillStyle = s?.color || "rgba(255, 255, 255, 0.6)"
        ctx.textAlign = "center"
        // Dynamic gap: Larger gap (100) for sparse data, Smaller gap (85) for dense data
        const topLabelBaseOffset = isDense ? 90 : 100;
        ctx.fillText(milestone.topLabel, x, y - (topLabelBaseOffset + (s?.offset || 0) + staggerOffsetTop)) 
        ctx.restore()
      }

      // Percentage Label
      if (milestone.percentage) {
        const s = styles.labels?.percentage
        ctx.save()
        ctx.font = s?.font || percentageFont
        ctx.fillStyle = s?.color || milestone.color || "#fff"
        ctx.textAlign = "center"
        ctx.fillText(milestone.percentage, x, y - (75 + (s?.offset || 0) + staggerOffsetTop))
        ctx.restore()
      }

      // Bottom Label
      if (milestone.bottomLabel) {
        const s = styles.labels?.bottomLabel
        ctx.save()
        ctx.font = s?.font || bottomLabelFont
        ctx.fillStyle = s?.color || "rgba(255, 255, 255, 0.5)"
        ctx.textAlign = "center"
        // Reduced base offset from 40 to 25 to be "near"
        ctx.fillText(milestone.bottomLabel, x, y + (25 + (s?.offset || 0) + staggerOffsetBottom))
        ctx.restore()
      }

      // Level Text
      if (milestone.levelText) {
        const s = styles.labels?.levelText
        ctx.save()
        ctx.font = s?.font || levelTextFont
        ctx.fillStyle = s?.color || "rgba(255, 255, 255, 0.5)"
        ctx.textAlign = "center"
         // Reduced base offset from 60 to 40
         const baseOffset = 40 + (s?.offset || 0) + staggerOffsetBottom
        
        if (milestone.levelText.includes("Upper")) {
           const parts = milestone.levelText.split("–")
           if(parts.length > 1) {
              ctx.fillText(parts[0] + "–", x, y + baseOffset + 5)
              ctx.fillText(parts[1], x, y + baseOffset + 18) // tighter line height
           } else {
             ctx.fillText(milestone.levelText, x, y + baseOffset)
           }
        } else {
          ctx.fillText(milestone.levelText, x, y + baseOffset)
        }
        ctx.restore()
      }
    })
  },
}

export const Roadmap = ({ 
  milestones = defaultMilestones,
  styles = EMPTY_STYLES,
  data: dataProp,
  options: optionsProp,
  plugins: pluginsProp = EMPTY_PLUGINS,
  className,
  width = "100%",
  height = "500px"
}: RoadmapProps) => {

  const data = useMemo<ChartData<"line">>(() => {
    if (dataProp) return dataProp;

    return {
      labels: milestones.map((_, i) => i),
      datasets: [
        {
          label: "Progress",
          // Evenly distribute points across 0-1000 range
          data: milestones.map((m, index) => {
             const progress = milestones.length > 1 ? index / (milestones.length - 1) : 0.5
             
             let yVal = 0;
             if (m.percentage) {
                yVal = parseFloat(m.percentage);
             } else if (index === 0 && milestones.length > 1 && milestones[1].percentage) {
                // Start tail: slightly below first visible point
                yVal = Math.max(0, parseFloat(milestones[1].percentage!) - 10);
             } else if (index === milestones.length - 1 && milestones.length > 1 && milestones[index-1].percentage) {
                // End tail: slightly above last visible point
                yVal = Math.min(100, parseFloat(milestones[index-1].percentage!) + 5);
             }

             return {
               x: progress * 1000, 
               y: yVal
             }
          }),
          borderColor: (context: ScriptableContext<"line">) => {
             const chart = context.chart;
             const {ctx, chartArea} = chart;
             if (!chartArea) return "#C65200";
             
             const { left, right, top, bottom } = chartArea;
             if (!Number.isFinite(left) || !Number.isFinite(right) || !Number.isFinite(top) || !Number.isFinite(bottom)) {
                return "#C65200";
             }

             // Gradient
             try {
               const g = ctx.createLinearGradient(left, bottom, right, top)
               g.addColorStop(0, "#C65200")
               g.addColorStop(0.28, "#F2B61E")
               g.addColorStop(0.57, "#E4D351")
               g.addColorStop(0.81, "#A3FF6B")
               g.addColorStop(1, "#23B152")
               return g;
             } catch {
               return "#C65200";
             }
          },
          borderWidth: 6,
          tension: 0.5,
          pointRadius: (ctx: ScriptableContext<"line">) => {
            const index = ctx.dataIndex
            const m = milestones[index]
            if (m.hidden) return 0
            return styles.point?.radius ?? 7
          },
          pointBackgroundColor: (ctx: ScriptableContext<"line">) => {
             const index = ctx.dataIndex
             return styles.point?.backgroundColor || milestones[index].color || "#000"
          },
          pointBorderColor: styles.point?.borderColor || "rgba(0,0,0,0.2)",
          pointBorderWidth: styles.point?.borderWidth ?? 1,
          pointHoverRadius: styles.point?.hoverRadius ?? 6,
          borderCapStyle: "round" as const,
          borderJoinStyle: "round" as const,
          // Glow effect (custom properties handled by chart.js usually via simple spread, but explicitly listed here)
          shadowBlur: 10,
          shadowColor: "rgba(0,0,0,0.5)",
          clip: 20,
        },
      ],
    }
  }, [milestones, styles, dataProp])

  const options = useMemo<ChartOptions<"line">>(() => {
    // Calculate max percentage to adjust vertical scale dynamically
    const maxPercent = milestones.reduce((max, m) => Math.max(max, parseFloat(m.percentage || "0")), 0)
    // If fewer points, reduce the Y-scale max to make the graph visually steeper ("upwards more")
    // Use 70 as absolute min (to avoid super zoom on flat 0-10 data), otherwise maxPercent + padding
    const yScaleMax = milestones.length < 8 ? Math.max(maxPercent + 10, 70) : 110

    const defaultOptions: ChartOptions<"line"> = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
         padding: {
            top: 130, 
            bottom: 0, 
            left: 25,  
            right: 40  
         }
      },
      scales: {
        x: {
          type: "linear",
          min: 0,
          max: 1000, 
          display: false, 
        },
        y: {
          type: "linear",
          min: 0,
          max: yScaleMax, // Dynamic max
          // reverse: false (default, 0 at bottom)
          display: false, 
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false, 
        },
        // @ts-expect-error - Custom plugin options
        roadmapLabels: {
          milestones: milestones,
          styles: styles
        }, 
      },
    }

    return optionsProp ? { ...defaultOptions, ...optionsProp, plugins: { ...defaultOptions.plugins, ...optionsProp.plugins, roadmapLabels: { milestones, styles } } } : defaultOptions
  }, [milestones, styles, optionsProp])

  // Merge default plugins with user provided plugins
  const appliedPlugins = useMemo(() => [roadmapLabelsPlugin, ...pluginsProp], [pluginsProp])

  return (
    <div style={{ width, height }} className={`relative select-none ${className || ''}`}>
      {/* Side Labels - HTML overlay */}
      {/* Side Labels - HTML overlay */}
      <div className="absolute left-3 bottom-1/4 -translate-y-1/2 flex flex-col gap-0.5 pointer-events-none z-10 w-12">
        <span className="text-secondary-150 text-sm font-medium leading-tight">English</span>
        <span className="text-secondary-150 text-sm font-medium leading-tight">Score, %</span>
      </div>

      <div className="absolute left-4 bottom-2 flex flex-col gap-0.5 pointer-events-none z-10">
        <span className="text-secondary-150 text-sm font-medium leading-tight">English</span>
        <span className="text-secondary-150 text-sm font-medium leading-tight">level</span>
      </div>

      {/* Chart */}
      <div className="w-full h-[450px]">
         <ChartErrorBoundary>
           <Line 
             data={data} 
             options={options} 
             plugins={appliedPlugins}
             key={JSON.stringify(milestones.map(m => m.id))} // Stabilize by data content if needed, but usually not required. 
             // Actually, removing key or using stable one is better. Let's rely on memoized props.
           />
         </ChartErrorBoundary>
      </div>
    </div>
  )
}
