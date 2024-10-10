-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT,
    "lastname" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Patient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "doctor_type" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT,
    "specification" TEXT,
    "work" TEXT,
    CONSTRAINT "Staff_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MedicationAllocation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patientId" INTEGER NOT NULL,
    "time_stamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notified" BOOLEAN NOT NULL DEFAULT false,
    "heart_rate" INTEGER NOT NULL,
    "hemoglobin" INTEGER NOT NULL,
    CONSTRAINT "MedicationAllocation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Medicine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "medicine_name" TEXT NOT NULL,
    "dosage" INTEGER NOT NULL,
    "med_allocationId" INTEGER NOT NULL,
    CONSTRAINT "Medicine_med_allocationId_fkey" FOREIGN KEY ("med_allocationId") REFERENCES "MedicationAllocation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Period" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "period_name" TEXT NOT NULL,
    "time" DATETIME NOT NULL,
    "medicineId" INTEGER NOT NULL,
    CONSTRAINT "Period_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patientId" INTEGER NOT NULL,
    "staffId" INTEGER NOT NULL,
    "appointmentTime" DATETIME NOT NULL,
    CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointment_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_userId_key" ON "Patient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_userId_key" ON "Staff"("userId");
