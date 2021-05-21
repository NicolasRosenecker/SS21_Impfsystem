import { Vaccination } from "./vaccination";
export { Vaccination } from "./vaccination";

export class Location {
  constructor(
    public id: number,
    public postal_code: string,
    public location_name: string,
    public location_address: string,
    public vaccinations: Vaccination[],
    public location_description?: string
  ) { }
}
