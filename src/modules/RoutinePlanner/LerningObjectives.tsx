"use client";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useGetLearningObjectives } from "./routinePlanner.hook";
import Loader from "@/src/components/Loader";
import { getPriorityLabel } from "@/src/shared/enum";

const LerningObjectives = () => {
  const {
    data: learningObjectives,
    isLoading,
    isError,
    error,
  } = useGetLearningObjectives();

  console.log("learningObjectives", learningObjectives);

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
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          <TableContainer
            sx={{ border: "1px solid lightgray", borderRadius: "10px" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead
                sx={{
                  ".MuiTableCell-root": {
                    bgcolor: "#F5F5F5",
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: ".875rem",
                  },
                }}
              >
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "500",
                      fontSize: "1.2rem",
                      // textTransform: "uppercase",
                    }}
                  >
                    Subject
                  </TableCell>
                  <TableCell align="center">Priority</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {learningObjectives?.data?.map((objective) => (
                  <TableRow
                    key={objective._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {objective.subject}
                    </TableCell>
                    <TableCell align="center">
                      {getPriorityLabel(objective.priority)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};

export default LerningObjectives;
