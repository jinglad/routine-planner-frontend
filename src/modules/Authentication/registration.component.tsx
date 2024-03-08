"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginModel } from "./login.interface";
import { useRouter } from "next/navigation";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>();

  const onSubmit = (data: LoginModel) => {
    setLoading(true);
    console.log(data);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        px: 3,
      }}
    >
      <Card>
        <CardContent
          sx={{
            p: "3rem 2.25rem 1.75rem!important",
            width: {
              sm: "28rem",
            },
          }}
        >
          <Box
            mb={4}
            sx={{
              mb: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: 600,
                letterSpacing: ".15px",
                color: "primary",
              }}
            >
              Routine Maker
            </Typography>
          </Box>
          <Box
            sx={{
              mb: "1.5rem",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "text.primary",
                mb: ".375rem",
                fontWeight: 600,
              }}
            >
              Welcome to Routine Maker!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: ".875rem",
                color: "text.secondary",
              }}
            >
              Please register to our platform and start the adventure
            </Typography>
          </Box>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  mb: "1rem",
                }}
              >
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-email">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    size="medium"
                    id="outlined-adornment-email"
                    type="email"
                    label="Email"
                    {...register("email", { required: "Email is required" })}
                  />
                </FormControl>
                {errors?.email && (
                  <FormHelperText error>{errors.email?.message}</FormHelperText>
                )}
              </Box>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  size="medium"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </FormControl>
              {errors?.password && (
                <FormHelperText error>
                  {errors.password?.message}
                </FormHelperText>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={loading && <CircularProgress size={15} />}
                disabled={loading}
                sx={{
                  width: "100%",
                  fontWeight: 600,
                  mt: 2,
                }}
              >
                Register
              </Button>
            </form>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  textAlign: "center",
                }}
              >
                Already have an account?{" "}
                <Box
                  component={Link}
                  href="/login"
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Login
                </Box>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Registration;
