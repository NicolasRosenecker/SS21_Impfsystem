import { Vaccination } from "./vaccination";

export class VaccinationFactory {

  static empty(): Vaccination{
    return new Vaccination(
      0,
      new Date("1999-01-01"),
      "",
      0,
      0,
      0)
  }

  static fromObject(rawVaccination: any):Vaccination{
    return new Vaccination(
      rawVaccination.id,
      rawVaccination.vaccination_date,
      rawVaccination.vaccination_name,
      rawVaccination.max_participants,
      0,
      rawVaccination.location_id,
    );
  }

}
