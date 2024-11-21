/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser } from "@/services/Auth";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["USER_SIGNIN"],
    mutationFn: async (userData: string) => await loginUser(userData),
  });
};
