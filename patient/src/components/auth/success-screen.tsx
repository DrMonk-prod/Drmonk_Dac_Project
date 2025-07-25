import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface SuccessScreenProps {
  title: string;
  message: string;
  buttonText?: string;
  buttonHref?: string;
}

export function SuccessScreen({
  title,
  message,
  buttonText = "Continue",
  buttonHref = "/auth",
}: SuccessScreenProps) {
  return (
    <div className="text-center space-y-4">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-2">{message}</p>
      </div>
      <Link href={buttonHref}>
        <Button className="w-full">{buttonText}</Button>
      </Link>
    </div>
  );
}
