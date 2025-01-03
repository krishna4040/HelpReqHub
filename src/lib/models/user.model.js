import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: [true, "Email already exists."],
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      lowercase: true,
      required: [true, "Name is required."],
      trim: true,
    },
    contact: {
      type: Number,
      required: [true, "Phone number is required."],
      trim: true,
    },
    image: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg",
    },
    location: {
      type: {
        lat: {
          type: Number,
          required: [true, "Latitude is required"],
        },
        lng: {
          type: Number,
          required: [true, "Longitude is required"],
        },
      },
      default: {
        lat: 0,
        lng: 0,
      },
    },
    method: {
      type: String,
      lowercase: true,
      enum: ["credentials", "oauthprovider"],
      trim: true,
      required: [true, "Method is required"],
    },
  },
  { timestamps: true }
);

export const UserModel =
  mongoose.models["user"] || new mongoose.model("user", authSchema);
