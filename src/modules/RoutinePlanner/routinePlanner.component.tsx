"use client";
import { Box, Typography } from "@mui/material";
import LerningObjectives from "./LerningObjectives";
import AddLerningObjectives from "./AddLerningObjectives";

const RoutinePlanner = () => {
  return (
    <Box>
      <Box sx={{ mt: 3 }}>
        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <LerningObjectives />
          <AddLerningObjectives />
        </Box>
      </Box>
    </Box>
  );
};

export default RoutinePlanner;
