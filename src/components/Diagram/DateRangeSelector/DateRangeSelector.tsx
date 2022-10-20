import { useState } from "react";
import {
  ToggleButton as MuiToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    background: "linear-gradient(125deg,#00a3f3,#006fae)",
  },
});

const dateRanges = ["7d", "14d", "30d", "90d", "180d", "1y", "max"];

type Props = {
  onChange: (newRange: string) => void;
};
export const DateRangeSelector = ({ onChange }: Props) => {
  const [range, setRange] = useState("7d");

  const handleRangeChange = (
    event: React.MouseEvent<HTMLElement>,
    newRange: string
  ) => {
    setRange(newRange);
    onChange(newRange);
  };
  const control = {
    value: range,
    onChange: handleRangeChange,
    exclusive: true,
  };

  return (
    <ToggleButtonGroup
      size="small"
      {...control}
      sx={{
        backgroundColor: "#3b3266",
        height: "40px;",
        marginRight: 4,
      }}
    >
      {dateRanges.map((range) => (
        <ToggleButton
          value={range}
          key={range}
          sx={{ borderRadius: "40%", color: "#FFF" }}
        >
          {range}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
