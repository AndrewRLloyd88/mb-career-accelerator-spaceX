export interface PayloadSpecificInfo {
  dragon: {
    capsule: boolean;
    mass_returned_kg: boolean;
    mass_returned_lbs: boolean;
    flight_time_sec: boolean;
    manifest: boolean;
    water_landing: boolean;
    land_landing: boolean;
  };
  name: string;
  type: string;
  reused: boolean;
  launch: string;
  customers: string;
  norad_ids: [];
  nationalities: string;
  manufacturers: string;
  mass_kg: number;
  mass_lbs: number;
  orbit: string;
  reference_system: string;
  regime: string;
  longitude: string;
  semi_major_axis_km: string;
  eccentricity: string;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: string;
  lifespan_years: string;
  epoch: string;
  mean_motion: string;
  raan: string;
  arg_of_pericenter: string;
  mean_anomaly: string;
  id: string;
}
