import z from "zod";

export const createPostSchema = z.object({
title: z.string("Titulo obrigatório"),
authorId: z.uuid("Author inválido"),
content: z.string("Conteúdo inválido").optional()
})

export type CreatePostSchema = z.infer<typeof createPostSchema>