import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

import { HistoricalValue } from "../../models";

type DiagramProps = {
  values: HistoricalValue[];
};
export const Diagram = ({ values }: DiagramProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        // width={500}
        // height={300}
        data={values}
        margin={{ top: 0, right: 30, left: 30, bottom: 30 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={{ stroke: "#38c4ff" }} tickMargin={10} />
        <YAxis
          tick={{ stroke: "#38c4ff" }}
          tickMargin={10}
          unit="B"
          type="number"
          domain={["dataMin - 0.01", "auto"]}
        />
        <Tooltip />
        {/* <Legend /> */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="#38c1f0"
          strokeWidth={2}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
