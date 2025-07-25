import type {
  LoginCredentials,
  SignupCredentials,
  ForgotPasswordData,
  OTPVerificationData,
  ResetPasswordData,
  User,
} from "@/types/auth";

// Simulate API delays
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class AuthAPI {
  static async login(
    credentials: LoginCredentials
  ): Promise<{ user: User; token: string }> {
    await delay(1000);

    // Simulate validation
    if (
      credentials.email === "test@example.com" &&
      credentials.password === "password"
    ) {
      return {
        user: {
          id: "1",
          email: credentials.email,
          name: "Test User",
          emailVerified: true,
        },
        token: "mock-jwt-token",
      };
    }

    throw new Error("Invalid credentials");
  }

  static async signup(
    credentials: SignupCredentials
  ): Promise<{ message: string }> {
    await delay(1000);

    if (credentials.password !== credentials.confirmPassword) {
      throw new Error("Passwords do not match");
    }

    if (credentials.password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    return {
      message: "Account created successfully! Please verify your email.",
    };
  }

  static async sendPasswordResetOTP(
    data: ForgotPasswordData
  ): Promise<{ message: string }> {
    await delay(1000);

    // Simulate email validation
    if (!data.email.includes("@")) {
      throw new Error("Invalid email address");
    }

    return { message: `OTP sent to ${data.email}` };
  }

  static async verifyOTP(
    data: OTPVerificationData
  ): Promise<{ verified: boolean }> {
    await delay(1000);

    // Simulate OTP validation (accept 123456 as valid)
    if (data.otp === "123456") {
      return { verified: true };
    }

    throw new Error("Invalid OTP");
  }

  static async resetPassword(
    data: ResetPasswordData
  ): Promise<{ message: string }> {
    await delay(1000);

    if (data.password !== data.confirmPassword) {
      throw new Error("Passwords do not match");
    }

    if (data.password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    return { message: "Password reset successfully" };
  }
}
