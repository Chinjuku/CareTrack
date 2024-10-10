"use server"
import { registerSchema } from "@/types/schema";
import prisma from "@/utils/db";
import { hash } from "bcrypt";

export async function createUser(formData: FormData) {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Validate the input data
    const result = registerSchema.safeParse({
        username,
        email,
        password,
    });

    if (!result.success) {
        throw new Error(result.error.format()._errors.join(", "));
    }

    // Hash the password
    const hashedPassword = await hash(password, 10); // Adjust the salt rounds as needed

    // Create the user with the hashed password
    await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword, // Use hashed password here
        },
    });
}
