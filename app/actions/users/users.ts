"use server"

 import   prisma   from "../../../lib/prisma" 
 
import z from "zod"
import { createUserSchema, CreateUserSchema } from "./validators"
import { User } from "../../generated/prisma/client"

export const createUser = async(data: CreateUserSchema): Promise<User | {success: boolean, message: string, error?: string[]}> => {
try {
    
    const validatedUser = createUserSchema.safeParse(data)

    if(!validatedUser.success) {
        return {
            success: false,
            message: "Falha criar User"
        }
    }

    const createdUser = await prisma.user.create(
        {
            data: data
        }
    )

    if(!createdUser.id) {
        return {
            success: false,
            message: "User não criado"
        }
    }

    return createdUser

} catch (error) {
    console.error("Erro ao criar user", error)

    return {
        success: false,
        message: error as unknown as string
    }
}
}