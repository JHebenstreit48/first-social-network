import { Schema, model, type Document } from "mongoose";
import ReactionSchema, { IReaction } from "./Reaction";
import formattedDate from "../utils/dateformat";

interface IThought extends Document {
  thoughtText: string;
  createdAt: Schema.Types.Date;
  username: string;
  reactions: IReaction[];
}

const ThoughtSchema = new Schema<IThought>({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: ( timestamp:any ) => formattedDate(timestamp), // Format the Date as a string;
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema],
}, {
  toJSON: { getters: true },  // Ensure getters are applied when converting to JSON
  toObject: { getters: true } // Ensure getters are applied when converting to object
});

const Thoughts = model<IThought>("Thought", ThoughtSchema);

export default Thoughts;
