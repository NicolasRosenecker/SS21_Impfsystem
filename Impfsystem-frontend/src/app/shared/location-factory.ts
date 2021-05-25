import { Location } from "./location";
import { VaccinationFactory } from './vaccination-factory';

export class LocationFactory {

  static empty(): Location{
    return new Location(
      0,
      "",
      "",
      "",
      [VaccinationFactory.empty()],
      "",)
  }

  static fromObject(rawLocation: any):Location{
    return new Location(
      rawLocation.id,
      rawLocation.postal_code,
      rawLocation.location_name,
      rawLocation.location_address,
      rawLocation.vaccinations,
      rawLocation.vaccinations.users,
    );
  }

}
