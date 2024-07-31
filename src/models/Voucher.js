import mongoose from 'mongoose';

// schema Voucher variables
const DOCUMENT_NAME = 'Voucher';
const COLLECTION_NAME = 'Vouchers';

export const VOUCHER_STATUS = {
  ACTIVE: 0,
  INACTIVE: 1,
};

const voucherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    max_usage: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      enum: [VOUCHER_STATUS.ACTIVE, VOUCHER_STATUS.INACTIVE],
      default: VOUCHER_STATUS.ACTIVE,
    },
    discount_types: {
      type: String,
      enum: ['percentage', 'fixed'],
    },
    minimum_order_price: {
      type: Number,
    },
    voucher_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Voucher_Type',
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: COLLECTION_NAME,
  }
);

export default mongoose.model(DOCUMENT_NAME, voucherSchema);
