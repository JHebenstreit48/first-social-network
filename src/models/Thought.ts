import { Schema, Types, model, type Document } from "mongoose";

interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: Types.IReaction[];
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
      get: function(value: Date | undefined): string {
        return value ? value.toLocaleString() : '';  // Format the Date as a string
      },
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

const Thoughts = model("Thought", ThoughtSchema);

export default Thoughts;
