import { User } from "./user";
export { User } from "./user";

export class Vaccination {
  constructor(
    public id: number,
    public vaccination_date: Date,
    public vaccination_name: string,
    public max_participants: number,
    public participants: number,
    public users: User[]
  ) { }
}

