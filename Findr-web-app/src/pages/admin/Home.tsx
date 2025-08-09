import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid } from "recharts"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type{ChartConfig} from "@/components/ui/chart"
import { Pie, PieChart } from "recharts"
import {
  
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
export const description = "Number of visitors"
const chartData = [
  { month: "January", doctor: 186, patient: 80 },
  { month: "February", doctor: 305, patient: 200 },
  { month: "March", doctor: 237, patient: 120 },
  { month: "April", doctor: 73, patient: 190 },
  { month: "May", doctor: 209, patient: 130 },
  { month: "June", doctor: 214, patient: 140 },
]
const chartConfig = {
  doctor: {
    label: "Doctor",
    color: "oklch(0.6 0.118 184.704)",
  },
  patient: {
    label: "Patient",
    color: "oklch(0.646 0.222 41.116)",
  },
} satisfies ChartConfig


const chartData2 = [
  { user: "patient", visitors: 75, fill: "var(--color-patient)" },
  { user: "doctor", visitors: 25, fill: "var(--color-doctor)" },
]
const chartConfig2 = {
  user: {
    label: "Total",
  },
  patient: {
    label: "patient",
    color: "var(--chart-1)",
  },
  doctor: {
    label: "doctor",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function Home (){
  return (
    <>
    <Card className="h-100">
      <CardHeader>
        <CardTitle>Number of visitors</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-60 w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="patient"
              type="natural"
              fill="var(--color-patient)"
              fillOpacity={0.4}
              stroke="var(--color-patient)"
              stackId="a"
            />
            <Area
              dataKey="doctor"
              type="natural"
              fill="var(--color-doctor)"
              fillOpacity={0.4}
              stroke="var(--color-doctor)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
     <Card className="h-110 w-full mt-10 flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig2}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData2} dataKey="visitors" nameKey="user" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total users
        </div>
      </CardFooter>
    </Card>
    <div className="flex items-center gap-2 leading-none">
    
    </div>
  
    </>
  )
}