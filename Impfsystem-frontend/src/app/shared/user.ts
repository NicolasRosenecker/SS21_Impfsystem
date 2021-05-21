export class Vaccination {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public social_security_number: string,
    public birth_date: Date,
    public gender: string,
    public email: string,
    public password: string,
    public phone: string,
    public is_admin: boolean,
    public is_vaccinated: boolean,
  ) { }
}
