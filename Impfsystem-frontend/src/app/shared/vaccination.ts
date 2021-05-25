export class Vaccination {
  constructor(
    public id: number,
    public vaccination_date: Date,
    public vaccination_name: string,
    public max_participants: number,
    public participants: number,
    public location_id: number
  ) { }
}

