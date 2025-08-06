const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const paymentRoutes = require("./src/routes/paymentRoutes");
const {
  validatePaymentVerification,
} = require("razorpay/dist/utils/razorpay-utils");

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- API Routes ---
app.use("/api/payment", validatePaymentVerification, paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});
