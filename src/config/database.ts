import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

const MONGODB_URI =
  "mongodb+srv://healthFlex:theoretical@test.9ti6kri.mongodb.net/?retryWrites=true&w=majority&appName=test";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

export default mongoose;
