import {Schema, model} from 'mongoose';
import Kiosk from '../utils/interfaces/kiosk';

const KioskSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    serialKey: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isKioskClosed: {
      type: Boolean,
      required: true,
    },
    storeOpensAt: {
      type: Date,
      required: true,
    },
    storeClosesAt: {
      type: Date,
      required: true,
    },
  },
  {timestamps: true}
);

export default model<Kiosk>('Kiosk', KioskSchema);
