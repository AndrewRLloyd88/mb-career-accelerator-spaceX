export interface LaunchesArray {
    [index: string]: Launch;
}

export interface LaunchObject {
    name: string;
    details: string;
    flight_number: number;
    date_local: string;
    id: string;
    success: boolean;
    large: string;
}