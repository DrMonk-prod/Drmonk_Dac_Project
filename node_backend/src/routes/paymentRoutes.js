const express = require("express");
const crypto = require("crypto");
const axios = require("axios");
const razorpayClient = require("../config/razorpay");

const router = express.Router();

// --- Endpoint 1: Create a Payment Order ---
router.post("/create-order", async (req, res) => {
  try {
    const { amount, appointmentId } = req.body;

    if (!amount || !appointmentId) {
      return res
        .status(400)
        .json({ message: "Amount and Appointment ID are required" });
    }

    const options = {
      amount: amount * 100, // Amount in the smallest currency unit (paise)
      currency: "INR",
      receipt: String(appointmentId), // Use appointmentId as the receipt
    };

    const order = await razorpayClient.orders.create(options);

    console.log("Created Razorpay Order:", order);
    res.status(201).json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({
      message: "Could not create payment order",
      error: error.message,
    });
  }
});

// --- Endpoint 2: Verify the Payment ---
router.post("/verify-payment", async (req, res) => {
  try {
    // payment verification is done by middleware validate
    const { appointmentId } = req.body;

    // 2. If signature is verified, notify the Spring Boot backend
    console.log("Payment Verified Successfully. Notifying Spring Boot...");

    const confirmationUrl = `${process.env.SPRING_BOOT_URL}/appointments/${appointmentId}/confirm-payment`;

    // This is a server-to-server call. Add security like an API key in a real app.
    await axios.put(confirmationUrl);

    console.log(
      `Successfully confirmed appointment ${appointmentId} with Spring Boot.`
    );

    // 3. Send success response to the frontend
    res.status(200).json({
      status: "success",
      message: "Payment verified and appointment confirmed.",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({
      message: "Error during payment verification",
      error: error.message,
    });
  }
});

module.exports = router;
