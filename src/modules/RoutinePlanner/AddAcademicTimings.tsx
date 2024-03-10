import { Box, Button, TextField, Typography } from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

const AddAcademicTimings = () => {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState<string>();
  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("subject", subject);
    console.log("date", date);
    console.log("startTime", startTime);
    console.log("endTime", endTime);
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
            value={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDate(e.target.value)
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStartTime(e.target.value)
              }
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
          // startIcon={isPending && <CircularProgress size={15} />}
          // disabled={isPending}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddAcademicTimings;
