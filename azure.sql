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

  monthlySaving NVARCHAR(255),
  monthlyProfit NVARCHAR(255),
  rent NVARCHAR(255),
  utilities NVARCHAR(255),
  food NVARCHAR(255),
  subscriptions NVARCHAR(255),
  transportation NVARCHAR(255),
  entertainment NVARCHAR(255),
  funExpenses NVARCHAR(255),
  investmentExpenses NVARCHAR(255),
  memberships NVARCHAR(255),
  miscellaneous NVARCHAR(255)
);
