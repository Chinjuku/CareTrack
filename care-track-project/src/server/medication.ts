"use server"
import prisma from '@/utils/db'

export const createMedication = async (
    patientId: number,
    heart_rate: number,
    hemoglobin: number,
    med_name: string,
    dosage: number,
    periodIds: number[]
) => {
    try {
            const med_allo = await prisma.medicationAllocation.create({
                data: {
                    patientId: patientId,
                    heart_rate: heart_rate,
                    hemoglobin: hemoglobin,
                    notified: false,
                    medicine: {
                        create: {
                            medicine_name: med_name,
                            dosage: dosage,
                            period: {
                                connect: periodIds.map((id) => ({ id: id })),
                            },
                        },
                    },
                },
                include: {
                    medicine: {
                        include: {
                            period: true,
                        },
                    },
                },
            });
        return { success: true, medicationAllocation: med_allo };
    } catch (error) {
        console.error('Error creating medication:', error);
        return { success: false, error: 'Failed to create medication' };
    }
};

export const createPeriod = async () => {
    const creates = await prisma.period.create({
        data: {
            period_name: "เช้า",
            time: new Date('1970-01-01T08:00:00.000Z')
        },
    });
    return creates
}