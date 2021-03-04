export interface ShipSpecificInfo {
  legacy_id: string;
  model: string;
  type: string;
  roles: string[];
  imo: number;
  mmsi: number;
  abs: number;
  class: number;
  mass_kg: number;
  mass_lbs: number;
  year_built: number;
  home_port: string;
  status: string;
  speed_kn: null | number;
  course_deg: null | number;
  latitude: null | number;
  longitude: null | number;
  last_ais_update: null | number;
  link: string;
  image: string;
  launches: string[];
  name: string;
  active: boolean;
  id: string;
}
