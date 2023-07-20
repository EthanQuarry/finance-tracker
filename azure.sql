CREATE TABLE [dbo].[User] (
    [id]        NVARCHAR(255) NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [createdAt] DATETIME2     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2     NOT NULL,
    [email]     NVARCHAR(255) NOT NULL UNIQUE,
    [firstName] NVARCHAR(255) NOT NULL,
    [lastName]  NVARCHAR(255) NOT NULL,
    [password]  NVARCHAR(255) NOT NULL,
    [isAdmin]   BIT           NOT NULL DEFAULT 0
);

CREATE TABLE [dbo].[Category] (
    [id]        NVARCHAR(255) NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [createdAt] DATETIME2     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2     NOT NULL,
    [name]      NVARCHAR(255) NOT NULL,
    [userId]    NVARCHAR(255) NOT NULL,
    [assigned]  INT           NOT NULL DEFAULT 0,
    [activity]  INT           NOT NULL DEFAULT 0,
    [available] INT           NOT NULL DEFAULT 0,
    [note]      NVARCHAR(MAX),
    [deleted]   BIT           NOT NULL DEFAULT 0,
    CONSTRAINT [FK_Category_User_userId] FOREIGN KEY ([userId]) REFERENCES [dbo].[User] ([id])
);

CREATE UNIQUE INDEX [IX_Category_userId_name] ON [dbo].[Category] ([userId], [name]);

CREATE INDEX [IX_Category_userId_id] ON [dbo].[Category] ([userId], [id]);

CREATE TABLE [dbo].[Unique] (
    [id]          NVARCHAR(255) NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [createdAt]   DATETIME2     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    [updatedAt]   DATETIME2     NOT NULL,
    [name]        NVARCHAR(255) NOT NULL,
    [userId]      NVARCHAR(255) NOT NULL,
    [categoryId]  NVARCHAR(255) NOT NULL,
    [assigned]    INT           NOT NULL DEFAULT 0,
    [activity]    INT           NOT NULL DEFAULT 0,
    [available]   INT           NOT NULL DEFAULT 0,
    [note]        NVARCHAR(MAX),
    [deleted]     BIT           NOT NULL DEFAULT 0,
    CONSTRAINT [FK_Unique_User_userId] FOREIGN KEY ([userId]) REFERENCES [dbo].[User] ([id]),
    CONSTRAINT [FK_Unique_Category_categoryId] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Category] ([id])
);

CREATE INDEX [IX_Unique_userId] ON [dbo].[Unique] ([userId]);

CREATE TABLE [dbo].[Target] (
    [id]              NVARCHAR(255) NOT NULL PRIMARY KEY DEFAULT NEWID(),
    [createdAt]       DATETIME2     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    [updatedAt]       DATETIME2     NOT NULL,
    [uniqueId]        NVARCHAR(255) NOT NULL,
    [spending]        BIT           NOT NULL DEFAULT 0,
    [saving]          BIT           NOT NULL DEFAULT 0,
    [debt]            BIT           NOT NULL DEFAULT 0,
    [requiredAmount]  INT           NOT NULL,
    [dateRequired]    NVARCHAR(255) NOT NULL,
    CONSTRAINT [FK_Target_Unique_uniqueId] FOREIGN KEY ([uniqueId]) REFERENCES [dbo].[Unique] ([id])
);

CREATE INDEX [IX_Target_uniqueId] ON [dbo].[Target] ([uniqueId]);
