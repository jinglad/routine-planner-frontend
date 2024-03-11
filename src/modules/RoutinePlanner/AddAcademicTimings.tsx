import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAddAcademicTimings } from "./routinePlanner.hook";
import { formatTime } from "@/src/shared/utils";

const AddAcademicTimings = () => {
  const [subject, setSubject] = useState("");
  const [day, setDay] = useState<string>();
  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();

  const { mutate: addAcademicTimings, isPending } = useAddAcademicTimings({
    reset: () => {
      setSubject("");
      setDay("");
      setStartTime("");
      setEndTime("");
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const startTimeFormatted = formatTime(startTime as string);
    // const endTimeFormatted = formatTime(endTime as string);
    addAcademicTimings({
      subject,
      day: day as string,
      startTime: startTime as string,
      endTime: endTime as string,
    });
  };

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
        Add Academic Subject & Timings
      </Typography>
      <Box component="form" onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            margin="normal"
            label="Subject"
            variant="outlined"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            my: 2,
            ".MuiTextField-root": {
              width: "100%",
            },
          }}
        >
          <TextField
            id="outlined-basic"
            label="Select Date"
            variant="outlined"
            fullWidth
            sx={{ my: 2, backgroundColor: "white" }}
            type="date"
            InputLabelProps={{ shrink: true }}
            value={day}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDay(e.target.value)
            }
            required
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            ".MuiTextField-root": {
              width: "100%",
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TextField
              id="start-time"
              label="Start Time"
              type="time"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ my: 2, backgroundColor: "white" }}
              value={startTime}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setStartTime(e.target.value);
                // set AM or PM
              }}
              required
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TextField
              id="end-time"
              label="End Time"
              type="time"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ my: 2, backgroundColor: "white" }}
              value={endTime}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEndTime(e.target.value)
              }
              required
            />
          </Box>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          startIcon={isPending && <CircularProgress size={15} />}
          disabled={isPending}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddAcademicTimings;
