import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string({ required_error: "Please enter an email." }).min(2, {
    message: "Please enter a email.",
  }),
  password: z.string({ required_error: "Please enter a password." }).min(1, {
    message: "Please enter a password.",
  }),
});

export const SignUpFormSchema = z.object({
  email: z.string({ required_error: "Please enter an email." }).min(2, {
    message: "Please enter a email.",
  }),
  password: z.string({ required_error: "Please enter a password." }).min(1, {
    message: "Please enter a password.",
  }),
  username: z.string({ required_error: "Please enter a password." }).min(1, {
    message: "Please enter a password.",
  }),
  nickname: z.string({ required_error: "Please enter a password." }).min(1, {
    message: "Please enter a password.",
  }),
  language: z.string(),
  // level: z.preprocess(
  //   (data) => Number(data),
  //   z.number({ required_error: "Please enter a password." }).min(1, {
  //     message: "Please enter a password.",
  //   }),
  // ),
  level: z.number(),
});
