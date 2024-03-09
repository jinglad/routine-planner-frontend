import { Box, Typography } from "@mui/material";
import { useGetLearningObjectives } from "./routinePlanner.hook";

const LerningObjectives = () => {
  const {
    data: learningObjectives,
    isLoading,
    isError,
    error,
  } = useGetLearningObjectives();

  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        p: 2,
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontSize: "1.5rem", fontWeight: "600" }}
      >
        Learning Objectives
      </Typography>
    </Box>
  );
};

export default LerningObjectives;
