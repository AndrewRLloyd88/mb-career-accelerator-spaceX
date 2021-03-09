import type { LaunchCoreInfo } from './LaunchCoreInfo';

export interface LaunchesArray {
  [index: string]: LaunchObject;
}

export interface Cores {
  [index: string]: LaunchCoreInfo;
}

interface Fairings {
  reused: false;
  recovery_attempt: true;
  recovered: false;
  ships: string[];
}

interface Rocket {
  name: string;
  id: string;
}

interface Links {
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    launch: string;
  };
}

export interface LaunchObject {
  name: string;
  details: string;
  flight_number: number;
  date_local: string;
  id: string;
  success: boolean;
  large: string;
  fairings: Fairings;
  rocket: Rocket;
  cores: Cores;
  links: Links;
}
