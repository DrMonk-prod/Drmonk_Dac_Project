import apiClient from "@/lib/axios";

export const getDoctorDetailsById = async (doctorId: string) => {
  const response = await apiClient.get(`/doctors/${doctorId}`);
  return response.data;
};

export const getTimeSlotByDoctorIdAndDate = async (
  doctorId: string,
  date: string
) => {
  const response = await apiClient.get(
    `/doctors/${doctorId}/slots?date=${date}`
  );
  console.log("Time slots fetched for doctor:", response.data);
  return response.data;
};
