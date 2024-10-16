interface IThought extends Document {
    first: string,
    last: string,
    github: string,
    assignments: Schema.Types.ObjectId[]
}

const ThoughtSchema = new Schema<IThought>({
    
})
