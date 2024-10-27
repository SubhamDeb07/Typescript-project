import User from "src/database/Users/model";
import UserRepo from "../../database/Users/repo";
import express from "express";
import asyncHandler from "../../helpers/asyncHandler";

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const user = { ...req.body } as User;
    const findUser = await UserRepo.findByEmail(user.email.toLowerCase());

    if (findUser) {
      return res.status(500).json({ message: "User already exist" });
    }
    const createUser = await UserRepo.create(user);

    if (!createUser)
      return res.status(500).json({ message: "User could not be created" });
    return res.status(200).json({ message: "User successfully registered!" });
  })
);

export default router;
