// src/pages/doctor/Home.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DoctorHome() {
  return (
    <div className="p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, Doctor</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is your dashboard. You can manage appointments and view patient
            data here.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Today's Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No appointments scheduled for today.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <p>3 appointment requests pending.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
