import { Schema, model } from "mongoose";

const stockSchema = new Schema(
  {
    nome: {
      type: "string",
      require: true,
    },
    quantity: {
      type: "string",
      require: true,
    },
    value: {
      type: "string",
      require: true,
    },
    stock: {
      type: "string",
      require: true,
    },
  },
  { timestamps: true }
);

export default model("stock", stockSchema);
