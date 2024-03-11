"use client";

import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  useAddPartTimeJobInfo,
  useGetPartTimeJobInfo,
} from "./routinePlanner.hook";
import { useEffect } from "react";

const PartTimeJobInfo = () => {
  const { mutate: addPartTimeJobInfo, isPending } = useAddPartTimeJobInfo();
  const { data: partTimeJobInfo, isLoading } = useGetPartTimeJobInfo();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    watch,
    control,
  } = useForm<IPartTimeJob>({
    defaultValues: {
      hasPartTimeJob: partTimeJobInfo?.data?.hasPartTimeJob,
      startTime: partTimeJobInfo?.data?.startTime,
      endTime: partTimeJobInfo?.data?.endTime,
    },
  });

  useEffect(() => {
    reset({
      hasPartTimeJob: partTimeJobInfo?.data?.hasPartTimeJob,
      startTime: partTimeJobInfo?.data?.startTime,
      endTime: partTimeJobInfo?.data?.endTime,
    });
  }, [partTimeJobInfo]);

  const hasPartTimeJob = watch("hasPartTimeJob");

  const onSubmit = (data: IPartTimeJob) => {
    addPartTimeJobInfo(data);
    reset();
  };

  return (
    <Box
      sx={{
        mt: 3,
        width: "100%",
        background: "white",
        p: 2,
        borderRadius: "8px",
      }}
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Controller
            name="hasPartTimeJob"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
          <InputLabel id="demo-simple-select-label">
            Has Part Time Job
          </InputLabel>
        </Box>

        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <TextField
            id="outlined-basic"
            label="Start Time"
            type="time"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            {...register("startTime")}
            disabled={!!!hasPartTimeJob}
            sx={{
              cursor: !!!hasPartTimeJob ? "not-allowed" : "auto",
            }}
          />
          <TextField
            id="outlined-basic"
            label="End Time"
            type="time"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            {...register("endTime")}
            disabled={!!!hasPartTimeJob}
            sx={{
              cursor: !!!hasPartTimeJob ? "not-allowed" : "auto",
            }}
          />
        </Box>
        <Button
          type="submit"
          startIcon={isPending && <CircularProgress size={15} />}
          disabled={isPending || !isDirty}
          variant="contained"
          sx={{ width: "100%", mt: 2 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default PartTimeJobInfo;
