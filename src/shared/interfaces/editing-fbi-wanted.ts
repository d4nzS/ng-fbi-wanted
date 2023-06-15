import { FbiWanted } from './fbi-wanted';

export interface EditingFbiWanted extends FbiWanted {
  additionalInfo: {
    [key: string]: string;
  }
}
