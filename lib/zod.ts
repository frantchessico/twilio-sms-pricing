import { z, ZodError } from "zod";

export const ContactSchema = z.object({
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(3).max(50),
  email: z.string().email(),
  linkedin: z.string().url(),
  tech: z.string().min(3).max(50),
  message: z.string().min(100).max(500),
});