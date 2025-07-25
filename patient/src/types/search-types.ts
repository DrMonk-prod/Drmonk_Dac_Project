export interface City {
  id: number;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export type SearchEntity =
  | {
      type: "doctor";
      doctor: {
        id: number;
        name: string;
        speciality: string;
        img?: string;
      };
    }
  | {
      type: "clinic";
      clinic: {
        id: number;
        name: string;
        locality: string;
        img?: string;
      };
    }
  | {
      id: number;
      type: "speciality";
      speciality: string;
    };
