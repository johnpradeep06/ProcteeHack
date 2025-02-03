const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

// Test route to check server and DB connection
app.get("/", async (req, res) => {
  try {
    await prisma.$connect(); // Connect to MongoDB
    res.send("✅ Server is running and connected to MongoDB! Muthu is rizzing!");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    res.status(500).send("❌ Database connection failed!");
  } finally {
    await prisma.$disconnect(); // Disconnect after response
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
