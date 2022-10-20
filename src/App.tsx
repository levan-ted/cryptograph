import { useEffect, useState } from "react";
import { Diagram, DateRangeSelector } from "./components";
import { Container, Stack } from "@mui/system";

import { refineValues } from "./utils";

import { HistoricalValue } from "./models";

import "./App.css";
import { Typography } from "@mui/material";

function App() {
  const [data, setData] = useState<{
    farm: string;
    asset: string;
    values: HistoricalValue[];
  } | null>(null);

  const onDateRangeChange = (newValue: string) =>
    console.log("fetch data for this data range:", newValue);

  useEffect(() => {
    fetch(
      "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/ETH_Convex_steth"
    )
      .then((res) => res.json())
      .then((data) =>
        setData({
          farm: data.farm,
          asset: data.asset,
          values: refineValues(data.tvlStakedHistory),
        })
      );
  }, []);

  if (data === null) {
    return null;
  }

  return (
    <Container sx={{ width: "100%", height: "100vh" }}>
      <Stack
        justifyContent={"center"}
        sx={{
          width: "fit-content",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <Stack direction="row" mb={4}>
          <Typography
            component="h4"
            variant="h4"
            color="#38c1f0"
          >{`${data.farm}:`}</Typography>
          <Typography component="h4" variant="h4" color="#FFF" ml={1}>
            {data.asset}
          </Typography>
        </Stack>
        <Stack
          sx={{
            maxWidth: "800px",
            width: "80vw",
            height: "500px",
            background: "linear-gradient(135deg, #312a55, rgba(0, 0, 0, 0))",
            borderRadius: "15px",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography component="h6" variant="h6" color="#FFF" p={4}>
              Asset TVL
            </Typography>
            <DateRangeSelector onChange={onDateRangeChange} />
          </Stack>
          <Diagram values={data.values} />
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
