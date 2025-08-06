const crypto = require("crypto");

const validateRazorpayPayment = (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  // Check for missing fields
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({
      status: "failure",
      message: "Missing payment verification fields.",
    });
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({
      status: "failure",
      message: "Payment verification failed. Signature mismatch.",
    });
  }

  console.log("Payment signature verified successfully by middleware.");
  next();
};

module.exports = validateRazorpayPayment;
