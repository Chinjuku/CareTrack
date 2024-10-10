"use server"
import prisma from "@/utils/db"

export const getUser = async () => {
    const alluser = await prisma.user.findFirst()
    return alluser
}