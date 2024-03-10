import { Box, Typography } from "@mui/material";

const AcademicTimings = () => {
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
        Academic Subjects & Timings
      </Typography>
    </Box>
  );
};

export default AcademicTimings;
