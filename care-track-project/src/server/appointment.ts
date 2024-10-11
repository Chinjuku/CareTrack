"use server"
import prisma from "@/utils/db"

export const createAppointment = async (patientId: number, staffId: number, datetime: Date) => {
    const appoint = await prisma.appointment.create({
        data: {
            patientId: patientId,
            staffId: staffId,
            appointmentTime: datetime
        }
    })

    return { success: true, user: appoint };
}

export const viewAppointments = async (patientId: number) => {
    const appoints = await prisma.appointment.findMany({
        where: {
            patientId: patientId,
        }
    })
    return appoints
}

export const updateAppointment = async (
    appointmentTime : Date,
    id: number
) => {
    try {
        const updateAppointment = await prisma.appointment.update({
            where : {
                id : id
            },
            data: {
                appointmentTime: appointmentTime
            }
        }) 
        return { success: true, appointment: updateAppointment }
    } catch (error) {
        console.error('Error creating medication:', error);
        return { success: false, error: 'Failed to create medication' };
    }
}