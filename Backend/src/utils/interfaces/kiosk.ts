import {Document} from 'mongoose';

export default interface Kiosk extends Document {
  id: string;
  serialKey: string;
  description: string;
  isKioskClosed: boolean;
  storeOpensAt: Date;
  storeClosesAt: Date;
}
