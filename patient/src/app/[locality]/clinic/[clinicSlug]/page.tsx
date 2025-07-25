"use client";

import { useState } from "react";
import {
  MapPin,
  Star,
  Clock,
  Phone,
  Building2,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2,
  Moon,
  Sun,
  Users,
  Calendar,
  Award,
  Stethoscope,
  Car,
  Wifi,
  Shield,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  reviews: number;
  consultationFee: number;
  availableToday: boolean;
  image: string;
}

interface Review {
  id: number;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

const hospital = {
  id: 1,
  name: "Maxcare Hospital",
  location: "Pimple Saudagar, Pune",
  address: "Plot No. 123, Pimple Saudagar, Pune - 411027",
  phone: "+91 20 2742 1234",
  email: "info@maxcarehospital.com",
  website: "www.maxcarehospital.com",
  rating: 4.6,
  reviews: 3250,
  established: 2010,
  beds: 150,
  image: "/placeholder.svg?height=400&width=600",
  verified: true,
  about:
    "Maxcare Hospital is a leading multi-specialty healthcare facility in Pune, providing comprehensive medical services with state-of-the-art infrastructure and experienced medical professionals. We are committed to delivering quality healthcare with compassion and excellence.",
  specialties: [
    "Cardiology",
    "Orthopedics",
    "Neurology",
    "Gastroenterology",
    "Oncology",
    "Pediatrics",
    "Gynecology",
    "Emergency Medicine",
  ],
  facilities: [
    { name: "24/7 Emergency", icon: Zap },
    { name: "ICU & CCU", icon: Shield },
    { name: "Parking Available", icon: Car },
    { name: "Free WiFi", icon: Wifi },
    { name: "Pharmacy", icon: Building2 },
    { name: "Laboratory", icon: Stethoscope },
  ],
  timings: "24/7 Emergency | OPD: 8:00 AM - 8:00 PM",
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    specialization: "Cardiologist",
    experience: 15,
    rating: 4.8,
    reviews: 890,
    consultationFee: 1000,
    availableToday: true,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    specialization: "Orthopedist",
    experience: 12,
    rating: 4.7,
    reviews: 650,
    consultationFee: 800,
    availableToday: true,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Dr. Amit Kumar",
    specialization: "Neurologist",
    experience: 18,
    rating: 4.9,
    reviews: 1200,
    consultationFee: 1200,
    availableToday: false,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Dr. Sunita Reddy",
    specialization: "Gynecologist",
    experience: 10,
    rating: 4.6,
    reviews: 720,
    consultationFee: 700,
    availableToday: true,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    specialization: "Pediatrician",
    experience: 14,
    rating: 4.8,
    reviews: 980,
    consultationFee: 600,
    availableToday: true,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "Dr. Meera Joshi",
    specialization: "Gastroenterologist",
    experience: 16,
    rating: 4.7,
    reviews: 540,
    consultationFee: 900,
    availableToday: false,
    image: "/placeholder.svg?height=80&width=80",
  },
];

const reviews: Review[] = [
  {
    id: 1,
    patientName: "Rohit M.",
    rating: 5,
    comment:
      "Excellent hospital with modern facilities. The staff is very professional and caring. Had a great experience during my treatment.",
    date: "3 days ago",
    verified: true,
  },
  {
    id: 2,
    patientName: "Anjali S.",
    rating: 4,
    comment:
      "Good hospital with experienced doctors. The facilities are clean and well-maintained. Only issue was the waiting time.",
    date: "1 week ago",
    verified: true,
  },
  {
    id: 3,
    patientName: "Kiran P.",
    rating: 5,
    comment:
      "Outstanding medical care! Dr. Sharma and the entire team were exceptional. Highly recommend this hospital.",
    date: "2 weeks ago",
    verified: true,
  },
];

export default function HospitalProfilePage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(
    null
  );

  const filteredDoctors = selectedSpecialty
    ? doctors.filter((doctor) => doctor.specialization === selectedSpecialty)
    : doctors;

  return (
    <div className="flex flex-col max-w-7xl items-center mx-auto min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="space-y-8">
          {/* Hospital Hero Section */}
          <Card>
            <CardContent className="p-0">
              <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                <img
                  src={hospital.image || "/placeholder.svg"}
                  alt={hospital.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h1 className="text-3xl font-bold">{hospital.name}</h1>
                  <p className="text-lg opacity-90">{hospital.location}</p>
                </div>
                {hospital.verified && (
                  <div className="absolute top-4 right-4 bg-primary rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(hospital.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{hospital.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({hospital.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span className="text-sm">Est. {hospital.established}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{hospital.beds} beds</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {hospital.about}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="flex shrink-0 items-center gap-x-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{hospital.address}</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-x-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{hospital.phone}</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-x-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{hospital.timings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs Section */}
          <Tabs defaultValue="doctors" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mt-4 h-12">
              <TabsTrigger value="doctors">Doctors</TabsTrigger>
              <TabsTrigger value="specialties">Specialties</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="doctors" className="mt-6">
              <div className="space-y-6">
                {/* Specialty Filter */}
                <Card>
                  <CardHeader>
                    <CardTitle>Filter by Specialty</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={
                          selectedSpecialty === null ? "default" : "ghost"
                        }
                        size="sm"
                        onClick={() => setSelectedSpecialty(null)}
                      >
                        All Doctors
                      </Button>
                      {Array.from(
                        new Set(doctors.map((d) => d.specialization))
                      ).map((specialty) => (
                        <Button
                          key={specialty}
                          variant={
                            selectedSpecialty === specialty
                              ? "default"
                              : "ghost"
                          }
                          size="sm"
                          onClick={() => setSelectedSpecialty(specialty)}
                        >
                          {specialty}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {filteredDoctors.map((doctor) => (
                    <Card
                      key={doctor.id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2">
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
                          <div className="flex flex-col flex-1 gap-y-1">
                            <h3 className="font-semibold">{doctor.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {doctor.specialization}
                            </p>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < Math.floor(doctor.rating)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-muted-foreground/30"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs font-medium">
                                {doctor.rating}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                ({doctor.reviews})
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold">
                                ₹{doctor.consultationFee}
                              </span>
                              {doctor.availableToday && (
                                <Badge variant="secondary" className="text-xs">
                                  Available Today
                                </Badge>
                              )}
                            </div>
                            <Button size="sm" className="w-full">
                              <Calendar className="h-3 w-3 mr-2" />
                              Book Appointment
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specialties" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Medical Specialties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {hospital.specialties.map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 border rounded-lg"
                      >
                        <Award className="h-5 w-5 text-primary" />
                        <span className="font-medium">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="facilities" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hospital Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hospital.facilities.map((facility, index) => {
                      const IconComponent = facility.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-4 border rounded-lg"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <span className="font-medium">{facility.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Patient Reviews</span>
                    <Badge variant="secondary">
                      {hospital.rating} ★ ({hospital.reviews})
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reviews.map((review, index) => (
                    <div key={review.id}>
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="text-sm">
                            {review.patientName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-sm">
                                {review.patientName}
                              </span>
                              {review.verified && (
                                <CheckCircle className="h-3 w-3 text-green-600" />
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-muted-foreground/30"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                      {index < reviews.length - 1 && (
                        <hr className="my-3 border-[1] border-gray-400" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
