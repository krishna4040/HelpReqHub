import { connectToDB } from "../DBconnect.js";
import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const handleAuth = async ({
  name,
  email,
  contact,
  password,
  image,
  method,
}) => {
  try {
    name = String(name).toLowerCase();
    await connectToDB();

    const user = await UserModel.findOne({ email });
    if (user) {
      if (method !== user.method) {
        throw new Error(`Authentication method was different than ${method}`);
      }

      // checking which method user is using
      if (method === "credentials" && !bcrypt.compareSync(password, user.password)) {
        throw new Error('Incorrect password');
      }

      let userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        joined_at: user.createdAt,
      };

      return {
        success: true,
        message: 'User found',
        userData,
      };
    } else {
      if (method !== "credentials" && !password) {
        password = undefined;
      } else {
        password = bcrypt.hashSync(password, 10)
      }
      if (!image) image = undefined
      const user = await UserModel.create({
        email,
        contact,
        password,
        name,
        image,
        method,
      })
      let userData = {
        id: user._id,
        name,
        email,
        contact: user.contact,
        image: user.image,
        joined_at: user.createdAt,
      };

      return {
        success: true,
        message: `User created`,
        userData,
      };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};
