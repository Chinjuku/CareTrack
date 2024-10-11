/*
  Warnings:

  - You are about to drop the column `medicineId` on the `Period` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Period" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "period_name" TEXT NOT NULL,
    "time" DATETIME NOT NULL
);
INSERT INTO "new_Period" ("id", "period_name", "time") SELECT "id", "period_name", "time" FROM "Period";
DROP TABLE "Period";
ALTER TABLE "new_Period" RENAME TO "Period";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
