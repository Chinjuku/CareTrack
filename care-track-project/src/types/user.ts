export type LoginUser = {
    id        : string
    username  : string
    email     : string
    password  : string
    role      : string
}

export enum UserRoles {
    PATIENT = "PATIENT",
    STAFF = "STAFF",
}

export type RegisterUser = {
    username  : string
    email     : string
    password  : string
    role      : UserRoles
    firstname : string
    lastname  : string
}

export type User = {
    id: string;
    email: string;
    username: string;
    role: string
    patient?: Patient;
    staff?: Staff;
}

export type Patient = {
    id: number;
    firstname?: string | null;
    lastname?: string | null;
    medicationAllocations: MedicationAllocation[];
    appointments: Appointment[];
    userId: number;
    user: User;
  };
  
  export type Staff = {
    id: number;
    firstname: string;
    lastname: string;
    appointments: Appointment[];
    userId: number;
    user: User;
    doctor_type?: string | null;
    price?: number | null;
    description?: string | null;
    specification?: string | null;
    work?: string | null;
  };
  
  export type MedicationAllocation = {
    id: number;
    patientId: number;
    patient: Patient;
    time_stamp: Date;
    notified: boolean;
    medicine: Medicine[];
    heart_rate: number;
    hemoglobin: number;
  };
  
  export type Medicine = {
    id: number;
    medicine_name: string;
    dosage: number;
    period: Period[];
    med_allocationId: number;
    medication_allocation: MedicationAllocation;
  };
  
  export type Period = {
    id: number;
    period_name: string;
    time: Date;
    medicineId: number;
    medicine: Medicine;
  };
  
  export type Appointment = {
    id: number;
    patientId: number;
    patient: Patient;
    staffId: number;
    staff: Staff;
    appointmentTime: Date;
  };
  