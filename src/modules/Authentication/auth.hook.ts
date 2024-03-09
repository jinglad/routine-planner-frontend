import { useMutation } from "@tanstack/react-query";
import { RegistrationModel } from "./login.interface";
import { AuthService } from "./auth.service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useRegistration = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: RegistrationModel) =>
      AuthService.registration(data),
    onSuccess: () => {
      toast.success("Registration successful");
      router.push("/login");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });
};
