import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema(
  {
    //userId: { type: String },
    title: { type: String, required: true, unique: true },
    description: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSmall: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Movie', MovieSchema);
