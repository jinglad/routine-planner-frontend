import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAddLearningObjective } from "./routinePlanner.hook";

const AddLerningObjectives = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILearningObjective>();

  const { mutate: addLearningObjective, isPending } = useAddLearningObjective();

  const onSubmit = (data: ILearningObjective) => {
    addLearningObjective(data);
    reset();
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
        Add Learning Objective
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <FormHelperText error>{errors.subject.message}</FormHelperText>
          )}
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor="priority">Priority</InputLabel>
            <Select
              label="Priority"
              {...register("priority", { required: "Priority is required" })}
              defaultValue={" "}
            >
              <MenuItem value={1}>High</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>Low</MenuItem>
            </Select>
          </FormControl>
          {errors.priority && (
            <FormHelperText error>{errors.priority.message}</FormHelperText>
          )}
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

export default AddLerningObjectives;
