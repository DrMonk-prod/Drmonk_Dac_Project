import { SearchEntity } from "@/types/search-types";

export const searchResults: SearchEntity[] = [
  // Doctors (10)
  {
    type: "doctor",
    doctor: {
      id: 1,
      name: "Dr. Sneha Patil",
      speciality: "Dermatologist",
      img: "/images/doctors/sneha.jpg",
    },
  },
  {
    type: "doctor",
    doctor: {
      id: 2,
      name: "Dr. Rajeev Sharma",
      speciality: "Cardiologist",
    },
  },
  {
    type: "doctor",
    doctor: {
      id: 3,
      name: "Dr. Meena Joshi",
      speciality: "Pediatrician",
      img: "/images/doctors/meena.jpg",
    },
  },
  {
    type: "doctor",
    doctor: {
      id: 4,
      name: "Dr. Arvind Bansal",
      speciality: "Orthopedic",
    },
  },
  {
    type: "doctor",
    doctor: {
      id: 5,
      name: "Dr. Fatima Syed",
      speciality: "Gynecologist",
    },
  },
  {
    type: "doctor",
    doctor: {
      id: 6,
      name: "Dr. Nilesh Gaikwad",
      speciality: "Dentist",
    },
  },
  {
    type: "doctor",
    doctor: {
      id: 7,
      name: "Dr. Ankur Goyal",
      speciality: "Oncologist",
      img: "/images/doctors/ankur.jpg",
    },
  },
  {
    type: "doctor",
    doctor: {
      id: 8,
      name: "Dr. Kavita Deshmukh",
      speciality: "ENT Specialist",
    },
  },
  {
    type: "doctor",
    doctor: {
      id: 9,
      name: "Dr. Priya Menon",
      speciality: "Psychiatrist",
    },
  },
  {
    type: "doctor",
    doctor: {
      id: 10,
      name: "Dr. Ashok Kulkarni",
      speciality: "Neurologist",
    },
  },

  // Clinics (10)
  {
    type: "clinic",
    clinic: {
      id: 11,
      name: "CityCare Clinic",
      locality: "Hinjewadi",
      img: "/images/clinics/citycare.jpg",
    },
  },
  {
    type: "clinic",
    clinic: {
      id: 12,
      name: "HealthFirst Hospital",
      locality: "Kharadi",
    },
  },
  {
    type: "clinic",
    clinic: {
      id: 13,
      name: "Sunshine Medical Centre",
      locality: "MG Road",
    },
  },
  {
    type: "clinic",
    clinic: {
      id: 14,
      name: "Pulse Diagnostics",
      locality: "Baner",
    },
  },
  {
    type: "clinic",
    clinic: {
      id: 15,
      name: "MediPoint Clinic",
      locality: "Viman Nagar",
    },
  },
  {
    type: "clinic",
    clinic: {
      id: 16,
      name: "Harmony Health",
      locality: "Andheri",
    },
  },
  {
    type: "clinic",
    clinic: {
      id: 17,
      name: "CarePlus Hospital",
      locality: "Borivali",
    },
  },
  {
    type: "clinic",
    clinic: {
      id: 18,
      name: "PrimeCare",
      locality: "Dwarka",
    },
  },
  {
    type: "clinic",
    clinic: {
      id: 19,
      name: "Wellness Clinic",
      locality: "Saket",
    },
  },
  {
    type: "clinic",
    clinic: {
      id: 20,
      name: "Family Health Hub",
      locality: "Connaught Place",
    },
  },

  // Specialities (10)
  {
    id: 21,
    type: "speciality",
    speciality: "Dermatologist",
  },
  {
    id: 22,
    type: "speciality",
    speciality: "Cardiologist",
  },
  {
    id: 23,
    type: "speciality",
    speciality: "Neurologist",
  },
  {
    id: 24,
    type: "speciality",
    speciality: "Gynecologist",
  },
  {
    id: 25,
    type: "speciality",
    speciality: "ENT Specialist",
  },
  {
    id: 26,
    type: "speciality",
    speciality: "Pediatrician",
  },
  {
    id: 27,
    type: "speciality",
    speciality: "Orthopedic",
  },
  {
    id: 28,
    type: "speciality",
    speciality: "Oncologist",
  },
  {
    id: 29,
    type: "speciality",
    speciality: "Psychiatrist",
  },
  {
    id: 30,
    type: "speciality",
    speciality: "Dentist",
  },
];
