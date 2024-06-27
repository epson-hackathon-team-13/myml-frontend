import { z } from "zod";

export const EmailFormSchema = z.object({
  username: z.string({ required_error: "Please enter an email." }).min(2, {
    message: "Please enter a email.",
  }),
});
