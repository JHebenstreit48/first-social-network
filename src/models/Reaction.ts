import { Schema, Types, type Document } from "mongoose";
import formattedDate from "../utils/dateformat.js";

 interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Schema.Types.Date;
  }
  
  const ReactionSchema = new Schema<IReaction>({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: ( timestamp:any ) => formattedDate(timestamp),
        },
  });

  export { IReaction }
  export default ReactionSchema
