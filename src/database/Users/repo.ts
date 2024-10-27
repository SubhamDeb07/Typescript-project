import User, { UserModel } from "./model";
import { Types } from "mongoose";

async function findById(id: Types.ObjectId): Promise<User | null> {
  return UserModel.findOne({ _id: id }).lean().exec();
}

async function create(user: User): Promise<User> {
  const now = new Date();
  user.createdAt = now;
  user.updatedAt = now;
  const created = await UserModel.create(user);
  return created.toObject();
}

async function update(user: User): Promise<User | null> {
  user.updatedAt = new Date();
  return UserModel.findByIdAndUpdate(user._id, user, { new: true })
    .lean()
    .exec();
}

async function findByEmail(email: string) {
  return UserModel.findOne({ email: email });
}

export default {
  findById,
  create,
  update,
  findByEmail,
};
