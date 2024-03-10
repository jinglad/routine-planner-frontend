"use client";
import { Box, Typography } from "@mui/material";
import LerningObjectives from "./LerningObjectives";
import AddLerningObjectives from "./AddLerningObjectives";
import AcademicTimings from "./AcademicTimings";
import AddAcademicTimings from "./AddAcademicTimings";

const RoutinePlanner = () => {
  return (
    <Box>
      <Box sx={{ mt: 3 }}>
        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <LerningObjectives />
          <AddLerningObjectives />
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <AcademicTimings />
          <AddAcademicTimings />
        </Box>
      </Box>
    </Box>
  );
};

export default RoutinePlanner;
