/*
  Warnings:

  - You are about to drop the column `activity` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `assigned` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `available` on the `Category` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Income_userId_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "activity",
DROP COLUMN "assigned",
DROP COLUMN "available",
ADD COLUMN     "amount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "amount" SET DEFAULT 0;

-- CreateIndex
CREATE INDEX "Income_userId_idx" ON "Income"("userId");
