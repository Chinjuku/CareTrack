-- CreateTable
CREATE TABLE "_MedicinePeriods" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MedicinePeriods_A_fkey" FOREIGN KEY ("A") REFERENCES "Medicine" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MedicinePeriods_B_fkey" FOREIGN KEY ("B") REFERENCES "Period" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Period" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "period_name" TEXT NOT NULL,
    "time" DATETIME NOT NULL,
    "medicineId" INTEGER NOT NULL
);
INSERT INTO "new_Period" ("id", "medicineId", "period_name", "time") SELECT "id", "medicineId", "period_name", "time" FROM "Period";
DROP TABLE "Period";
ALTER TABLE "new_Period" RENAME TO "Period";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_MedicinePeriods_AB_unique" ON "_MedicinePeriods"("A", "B");

-- CreateIndex
CREATE INDEX "_MedicinePeriods_B_index" ON "_MedicinePeriods"("B");
