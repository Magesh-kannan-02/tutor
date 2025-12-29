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
  x: number
  y: number
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
    x: 10,
    y: 280,
    hidden: true,
  },
  {
    id: 1,
    x: 130,
    y: 250,
    percentage: "30%",
    topLabel: "Start",
    bottomLabel: "B1",
    levelText: "Intermediate",
    color: "#FF8A00",
    hidden: false,
  },
  {
    id: 2,
    x: 245,
    y: 175,
    percentage: "45%",
    topLabel: "Month 2",
    color: "#FFD600",
    hidden: false,
  },
  {
    id: 3,
    x: 340,
    y: 100,
    percentage: "60%",
    topLabel: "Month 3",
    bottomLabel: "B2",
    levelText: "Upper – Intermediate",
    color: "#B8FF5F",
    hidden: false,
  },
  {
    id: "end-node",
    x: 450,
    y: 20,
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

    meta.data.forEach((element: any, index: number) => {
      const milestone = milestones[index]
      if (!milestone || milestone.hidden) return

      const { x, y } = element.tooltipPosition()
      
      // Dashed vertical line (UP from point)
      ctx.save()
      ctx.beginPath()
      ctx.setLineDash(dashArray) 
      ctx.lineCap = "round"
      ctx.strokeStyle = dashColor
      ctx.lineWidth = dashWidth
      ctx.moveTo(x, y - 12) 
      ctx.lineTo(x, y - 65) 
      ctx.stroke()
      ctx.restore()

      // Top Label
      if (milestone.topLabel) {
        const s = styles.labels?.topLabel
        ctx.save()
        ctx.font = s?.font || `500 14px ${fontFamily}`
        ctx.fillStyle = s?.color || "rgba(255, 255, 255, 0.6)"
        ctx.textAlign = "center"
        ctx.fillText(milestone.topLabel, x, y - (105 + (s?.offset || 0))) 
        ctx.restore()
      }

      // Percentage Label
      if (milestone.percentage) {
        const s = styles.labels?.percentage
        ctx.save()
        ctx.font = s?.font || `600 30px ${fontFamily}`
        ctx.fillStyle = s?.color || milestone.color || "#fff"
        ctx.textAlign = "center"
        ctx.fillText(milestone.percentage, x, y - (75 + (s?.offset || 0)))
        ctx.restore()
      }

      // Bottom Label
      if (milestone.bottomLabel) {
        const s = styles.labels?.bottomLabel
        ctx.save()
        ctx.font = s?.font || `bold 14px ${fontFamily}`
        ctx.fillStyle = s?.color || "rgba(255, 255, 255, 0.5)"
        ctx.textAlign = "center"
        ctx.fillText(milestone.bottomLabel, x, y + (40 + (s?.offset || 0)))
        ctx.restore()
      }

      // Level Text
      if (milestone.levelText) {
        const s = styles.labels?.levelText
        ctx.save()
        ctx.font = s?.font || `600 14px ${fontFamily}`
        ctx.fillStyle = s?.color || "rgba(255, 255, 255, 0.5)"
        ctx.textAlign = "center"
         const baseOffset = 60 + (s?.offset || 0)
        
        if (milestone.levelText.includes("Upper")) {
           const parts = milestone.levelText.split("–")
           if(parts.length > 1) {
              ctx.fillText(parts[0] + "–", x, y + baseOffset + 5)
              ctx.fillText(parts[1], x, y + baseOffset + 25)
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
      labels: milestones.map((m) => m.x),
      datasets: [
        {
          label: "Progress",
          data: milestones.map((m) => ({ x: m.x, y: m.y })),
          borderColor: (context: ScriptableContext<"line">) => {
             const chart = context.chart;
             const {ctx, chartArea} = chart;
             if (!chartArea) return "#FFD600";
             
             const { left, right, top, bottom } = chartArea;
             if (!Number.isFinite(left) || !Number.isFinite(right) || !Number.isFinite(top) || !Number.isFinite(bottom)) {
                return "#FFD600";
             }

             // Gradient
             try {
               const g = ctx.createLinearGradient(left, bottom, right, top)
               g.addColorStop(0, "#FF8A00")
               g.addColorStop(0.5, "#FFD600")
               g.addColorStop(1, "#B8FF5F")
               return g;
             } catch {
               return "#FFD600";
             }
          },
          borderWidth: 6,
          tension: 0.4,
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
        },
      ],
    }
  }, [milestones, styles, dataProp])

  const options = useMemo<ChartOptions<"line">>(() => {
    const defaultOptions: ChartOptions<"line"> = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
         padding: {
            top: 50,
            bottom: 50,
            left: 20,
            right: 20
         }
      },
      scales: {
        x: {
          type: "linear",
          min: 0,
          max: 500,
          display: false, 
        },
        y: {
          type: "linear",
          min: 0,
          max: 400,
          reverse: true,
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
    <div style={{ width, height }} className={`relative p-4 select-none overflow-hidden ${className || ''}`}>
      {/* Side Labels - HTML overlay */}
      <div className="absolute left-6 top-[50%] -translate-y-1/2 flex flex-col gap-0.5 pointer-events-none z-10">
        <span className="text-secondary-150 text-sm font-medium leading-tight">English</span>
        <span className="text-secondary-150 text-sm font-medium leading-tight">Score, %</span>
      </div>

      <div className="absolute left-0 bottom-24 flex flex-col gap-0.5 pointer-events-none z-10">
        <span className="text-secondary-150 text-sm font-medium leading-tight">English</span>
        <span className="text-secondary-150 text-sm font-medium leading-tight">level</span>
      </div>

      {/* Chart */}
      <div className="w-full h-full">
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
