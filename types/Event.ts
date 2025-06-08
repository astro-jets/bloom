export interface Event {
  _id?: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  details: string;
  coordinates?: string[];
  thumbnail?: string;
  video?: string;
}
