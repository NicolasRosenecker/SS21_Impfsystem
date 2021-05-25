import { Location } from "./location";

export class LocationFactory {

  static empty(): Location{
    return new Location(
      0,
      "",
      "",
      "",
      [{
        id: 0,
        vaccination_name: "",
        vaccination_date: new Date("2021-01-01 11:59:59"),
        max_participants: 0,
        participants: 0,
        users: [{
            id: 0,
            firstname: "",
            lastname: "",
            social_security_number: "",
            email: "",
            is_admin: false,
            is_vaccinated: false
        }]
      }],
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
