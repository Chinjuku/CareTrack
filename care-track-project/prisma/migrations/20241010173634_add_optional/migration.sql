-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Staff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "doctor_type" TEXT,
    "price" REAL,
    "description" TEXT,
    "specification" TEXT,
    "work" TEXT,
    CONSTRAINT "Staff_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Staff" ("description", "doctor_type", "firstname", "id", "lastname", "price", "specification", "userId", "work") SELECT "description", "doctor_type", "firstname", "id", "lastname", "price", "specification", "userId", "work" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
CREATE UNIQUE INDEX "Staff_userId_key" ON "Staff"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
