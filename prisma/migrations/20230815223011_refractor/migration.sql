/*
  Warnings:

  - You are about to drop the column `uniqueId` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Unique` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_userId_fkey";

-- DropForeignKey
ALTER TABLE "Target" DROP CONSTRAINT "Target_uniqueId_fkey";

-- DropForeignKey
ALTER TABLE "Unique" DROP CONSTRAINT "Unique_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Unique" DROP CONSTRAINT "Unique_userId_fkey";

-- DropIndex
DROP INDEX "Income_userId_key";

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "amount" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Target" DROP COLUMN "uniqueId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accountAdded" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Unique";

-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "note" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubExpense" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expenseId" TEXT NOT NULL,
    "assigned" INTEGER NOT NULL DEFAULT 0,
    "activity" INTEGER NOT NULL DEFAULT 0,
    "available" INTEGER NOT NULL DEFAULT 0,
    "note" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SubExpense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubIncome" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "incomeId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "note" TEXT,
    "expenseId" TEXT,

    CONSTRAINT "SubIncome_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Expense_userId_id_idx" ON "Expense"("userId", "id");

-- CreateIndex
CREATE INDEX "SubExpense_userId_idx" ON "SubExpense"("userId");

-- CreateIndex
CREATE INDEX "SubIncome_userId_idx" ON "SubIncome"("userId");

-- CreateIndex
CREATE INDEX "Income_userId_idx" ON "Income"("userId");

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubExpense" ADD CONSTRAINT "SubExpense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SubExpense" ADD CONSTRAINT "SubExpense_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubIncome" ADD CONSTRAINT "SubIncome_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubIncome" ADD CONSTRAINT "SubIncome_incomeId_fkey" FOREIGN KEY ("incomeId") REFERENCES "Income"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubIncome" ADD CONSTRAINT "SubIncome_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense"("id") ON DELETE SET NULL ON UPDATE CASCADE;
