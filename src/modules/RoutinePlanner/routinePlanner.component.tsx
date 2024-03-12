"use client";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import LerningObjectives from "./LerningObjectives";
import AddLerningObjectives from "./AddLerningObjectives";
import AcademicTimings from "./AcademicTimings";
import AddAcademicTimings from "./AddAcademicTimings";
import PartTimeJobInfo from "./PartTimeJobInfo";
import { useGenerateRoutine } from "./routinePlanner.hook";
import Routine from "./Routine";
import { useState } from "react";
import { ICommonResponse } from "@/src/shared/interface";

const RoutinePlanner = () => {
  const [openRoutine, setOpenRoutine] = useState(false);
  const [routine, setRoutine] = useState<
    ICommonResponse<IRoutine> | undefined
  >();

  const handleClose = () => {
    setOpenRoutine(false);
  };

  const { mutate: generateRoutine, isPending } = useGenerateRoutine({
    setOpenRoutine,
    setRoutine: setRoutine!,
  });

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
      <Box sx={{ mt: 3 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontSize: "1.5rem", fontWeight: "600" }}
        >
          Part Time Job Info
        </Typography>
        <PartTimeJobInfo />
      </Box>
      <Button
        onClick={() => generateRoutine()}
        variant="contained"
        disabled={isPending}
        startIcon={isPending && <CircularProgress size={15} />}
        sx={{
          mt: 3,
          width: "100%",
          py: 2,
          fontWeight: "600",
          fontSize: "1.5rem",
        }}
      >
        Generate Routine
      </Button>
      <Routine
        open={openRoutine}
        handleClose={handleClose}
        routine={routine!}
      />
    </Box>
  );
};

export default RoutinePlanner;
