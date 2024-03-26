import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    locations: {
      type: Array,
      required: true
    },
    inclutions: {
      type: [String],
      required: true
    },
    exclutions: {
      type: [String],
    },
    food: {
      type: Boolean,
      required: true
    },
    transport: {
      type: Boolean,
      required: true
    },
    images: {
      type: Array,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    supplierRef: {
      type: String,
      required: true
    }

    
  },
  { timestamps: true }
);

const Tour = mongoose.model('Tour', tourSchema);

export default Tour;