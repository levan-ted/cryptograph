import React, { useEffect, useState } from "react";
import { refineValues } from "./utils";

import { IValue } from "./models";

import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import "./App.css";

function App() {
  const [data, setData] = useState<IValue[] | null>(null);

  useEffect(() => {
    fetch(
      "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/ETH_Convex_steth"
    )
      .then((res) => res.json())
      .then((data) => setData(refineValues(data.tvlStakedHistory)));
  }, []);

  if (data === null) {
    return null;
  }
  console.log(data);
  return (
    <div className="container">
      <div className="App">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ stroke: "#38c4ff" }}
              tickMargin={10}
              reversed
            />
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
              stroke="#9807ab"
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
