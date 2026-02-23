"use server"

import prisma from "../../../lib/prisma"
import { createPostSchema, CreatePostSchema } from "./validators"
import { Post } from "../../generated/prisma/client"
import z from "zod"

export const getPosts = async() => {
    try {
       const posts = await prisma.post.findMany()

       return posts
    } catch (error) {
        console.error("Erro carregar posts", error)

        return []
    }
}

export const createPost = async(data: CreatePostSchema): Promise<Post | {success: boolean, message: string, error?: string[]}> => {
try {
    
    const validatedPost = createPostSchema.safeParse(data)

    if(!validatedPost.success) {
        return {
            success: false,
            message: "Falha criar post"
        }
    }

    const createdPost = await prisma.post.create(
        {
            data: data
        }
    )

    if(!createdPost.id) {
        return {
            success: false,
            message: "Post não criado"
        }
    }

    return createdPost

} catch (error) {
    console.error("Erro ao criar post", error)

    return {
        success: false,
        message: error as unknown as string
    }
}
}