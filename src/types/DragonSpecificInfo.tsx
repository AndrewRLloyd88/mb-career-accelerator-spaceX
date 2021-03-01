interface DragonSpecificInfo {
  heat_shield: {
    material: string;
    size_meters: number;
    temp_degrees: number;
    dev_partner: string;
  };
  launch_payload_mass: {
    kg: number;
    lb: number;
  };
  launch_payload_vol: {
    cubic_meters: number;
    cubic_feet: number;
  };
  return_payload_mass: {
    kg: number;
    lb: number;
  };
  return_payload_vol: {
    cubic_meters: number;
    cubic_feet: number;
  };
  pressurized_capsule: {
    payload_volume: {
      cubic_meters: number;
      cubic_feet: number;
    };
  };
  trunk: {
    trunk_volume: {
      cubic_meters: number;
      cubic_feet: number;
    };
    cargo: {
      solar_array: number;
      unpressurized_cargo: boolean;
    };
  };
  height_w_trunk: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  first_flight: string;
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  thrusters: [
    {
      type: string;
      amount: number;
      pods: number;
      fuel_1: string;
      fuel_2: string;
      isp: number;
      thrust: {
        kN: number;
        lbf: number;
      };
    },
  ];
  wikipedia: string;
  description: string;
  id: string;
}
