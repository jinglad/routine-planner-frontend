import { getPriorityLabel } from "@/src/shared/enum";
import { ICommonResponse } from "@/src/shared/interface";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";

const Routine = ({
  open,
  handleClose,
  routine,
}: {
  open: boolean;
  handleClose: () => void;
  routine: ICommonResponse<IRoutine>;
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        ".MuiDialog-paper": {
          maxWidth: "800px",
          maxHeight: "85vh",
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{ px: 7, fontSize: "1.5rem", fontWeight: 700 }}
      >
        Your Routine
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 15,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ px: 7 }} dividers>
        <Box>
          {routine?.data?.map((day) => (
            <Box key={day.date} sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                {dayjs(day.date).format("dddd, MMMM D, YYYY")}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Learning Objectives
              </Typography>
              <TableContainer
                sx={{
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                  // maxHeight: "300px",
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
                      <TableCell align="center">Priority</TableCell>
                      <TableCell align="center">Session Duration</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {day?.learningObjectives?.map((objective) => (
                      <TableRow
                        key={objective?.item?._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          align="center"
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {objective?.item?.subject}
                        </TableCell>
                        <TableCell align="center">
                          {getPriorityLabel(objective?.item?.priority)}
                        </TableCell>
                        <TableCell align="center">
                          {objective?.sessionDuration || 0} hours
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.2rem",
                  }}
                >
                  Academic Timings
                </Typography>
                <TableContainer
                  sx={{
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    // maxHeight: "300px",
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
                        <TableCell align="center">Start Time</TableCell>
                        <TableCell align="center">End Time</TableCell>
                        <TableCell align="center">Session Duration</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {day?.academicTimings?.map((timing) => (
                        <TableRow
                          key={timing?.item?._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            align="center"
                            component="th"
                            scope="row"
                            sx={{ textTransform: "capitalize" }}
                          >
                            {timing?.item?.subject}
                          </TableCell>
                          <TableCell align="center">
                            {timing?.item?.startTime}
                          </TableCell>
                          <TableCell align="center">
                            {timing?.item?.endTime}
                          </TableCell>
                          <TableCell align="center">
                            {timing?.sessionDuration || 0} hours
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.2rem",
                  }}
                >
                  Part Time Job Info
                </Typography>
                <TableContainer
                  sx={{
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    // maxHeight: "300px",
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
                          Has Part Time Job
                        </TableCell>
                        <TableCell align="center">Start Time</TableCell>
                        <TableCell align="center">End Time</TableCell>
                        <TableCell align="center">Session Duration</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          {day?.partTimeJobInfo?.item?.hasPartTimeJob
                            ? "Yes"
                            : "No"}
                        </TableCell>
                        <TableCell align="center">
                          {day?.partTimeJobInfo?.item?.startTime}
                        </TableCell>
                        <TableCell align="center">
                          {day?.partTimeJobInfo?.item?.endTime}
                        </TableCell>
                        <TableCell align="center">
                          {day?.partTimeJobInfo?.sessionDuration || 0} hours
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Routine;
