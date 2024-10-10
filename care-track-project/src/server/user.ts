"use server"
import prisma from "@/utils/db"

export const getUser = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
        include: {
            patient: true, // Include patient model if exists
            staff: true,   // Include staff model if exists
        },
    });
    return user;
};

export const getAllDoctor = async () => {
    return await prisma.staff.findMany()
}