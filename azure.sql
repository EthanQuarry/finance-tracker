CREATE TABLE [User] (
  id        VARCHAR(36) PRIMARY KEY DEFAULT NEWID(),
  createdAt DATETIME2(7) DEFAULT GETDATE(),
  updatedAt DATETIME2(7) DEFAULT GETDATE(),
  email     NVARCHAR(255) UNIQUE,
  firstName NVARCHAR(255),
  lastName  NVARCHAR(255),
  [password] NVARCHAR(255),
  isAdmin   BIT DEFAULT 0
);

CREATE TABLE [Financials] (
  id VARCHAR(36) PRIMARY KEY,
  createdAt DATETIME2(7) DEFAULT GETDATE(),
  updatedAt DATETIME2(7) DEFAULT GETDATE(), 

  monthlySaving INT,
  monthlyProfit INT,
  rent INT,
  utilities INT,
  food INT,
  subscriptions INT,
  transportation INT,
  entertainment INT,
  funExpenses INT,
  investmentExpenses INT,
  memberships INT,
  miscellaneous INT
);
