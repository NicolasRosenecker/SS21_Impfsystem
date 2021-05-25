export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}
export const LocationFormErrorMessages = [
  new ErrorMessage('location_name', 'required', 'Ein Ortsname muss angegeben werden.'),
  new ErrorMessage('location_postal_code', 'required', 'Eine Postleitzahl muss angegeben werden.'),
  new ErrorMessage('location_postal_code', 'minlength', 'Die Postleitzahl darf lediglich aus 4 Ziffern bestehen.'),
  new ErrorMessage('location_postal_code', 'maxlength', 'Die Postleitzahl darf lediglich aus 4 Ziffern bestehen.'),
  new ErrorMessage('location_address', 'required', 'Eine Addresse muss angegeben werden.'),

  new ErrorMessage('vaccination', 'required', 'Ein Ort muss mindestens einen Impftermin anbieten.'),

  new ErrorMessage('vaccination_name', 'required', 'Ein Vakzin muss über einen Namen verfügen.'),
  new ErrorMessage('vaccination_date', 'required', 'Ein Vakzin muss über ein Datum verfügen.'),
  new ErrorMessage('max_participants', 'required', 'Eine maximale Teilnehmer:innenanzahl muss angegeben werden.'),


];
