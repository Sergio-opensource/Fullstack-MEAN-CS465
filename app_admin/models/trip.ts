export interface Trip {
  _id: string; // internal MongoDB primary key
  code: string;
  name: string;
  length: string;
  start: Date;
  perPerson: string;
  image: string;
  description: string;
}
