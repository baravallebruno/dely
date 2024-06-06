import { z } from "zod";

type LoginFormType = z.infer<typeof loginSchema>;

const loginSchema = z.object({
  email: z.string().email({ message: "Ingresá un email válido" }),
  password: z.string(),
});

export { loginSchema };
export type { LoginFormType };
