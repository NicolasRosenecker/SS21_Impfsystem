export class User {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public social_security_number: string,
    public email: string,
    public is_admin?: boolean,
    public is_vaccinated?: boolean
  ) { }
}
