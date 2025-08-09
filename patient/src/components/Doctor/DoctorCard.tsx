import { Doctor } from "@/types/doctor-types";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Calendar, CalendarFold } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
      <CardContent className="p-2">
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-4 col-span-2">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={doctor.image || "/placeholder.svg"}
                alt={doctor.name}
              />
              <AvatarFallback>
                {doctor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex flex-col gap-y-1">
                <h3 className="font-semibold">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {doctor.specialization}
                </p>
                <div className="text-xs font-medium flex items-center shrink-0 gap-2">
                  <CalendarFold size={14} />
                  <span>{doctor.experience} years of experience</span>
                </div>

                <div className="flex items-center gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(doctor.rating)
                          ? "fill-blue-500 text-blue-500"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                  <span className="text-xs font-medium">{doctor.rating}</span>
                </div>
              </div>

              <div className="flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">
                    ₹{doctor.consultationFee}
                  </span>
                </div>

                <div className="flex flex-col flex-1 gap-y-1">
                  <Button
                    size="sm"
                    className="w-full bg-blue-600 rounded-sm hover:bg-blue-500 cursor-pointer"
                  >
                    <Calendar className="h-3 w-3 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;
