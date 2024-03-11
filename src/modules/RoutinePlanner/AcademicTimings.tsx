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
import { useGetAcademicTimings } from "./routinePlanner.hook";
import Loader from "@/src/components/Loader";

const AcademicTimings = () => {
  const { data: academicTimings, isLoading } = useGetAcademicTimings();

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
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          <TableContainer
            sx={{
              border: "1px solid lightgray",
              borderRadius: "10px",
              maxHeight: "300px",
            }}
          >
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              stickyHeader
            >
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
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Start Time</TableCell>
                  <TableCell align="center">End Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {academicTimings?.data?.map((item) => (
                  <TableRow
                    key={item._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {item.subject}
                    </TableCell>
                    <TableCell align="center">{item.day}</TableCell>
                    <TableCell align="center">{item.startTime}</TableCell>
                    <TableCell align="center">{item.endTime}</TableCell>
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

export default AcademicTimings;
