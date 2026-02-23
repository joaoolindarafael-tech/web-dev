import z from "zod";

export const createUserSchema = z.object({
name: z.string("Nome obrigatório"),
email: z.email("Email inválido"),
password: z.string("Password inválido")
})

export type CreateUserSchema = z.infer<typeof createUserSchema>