import mongoose, {Schema} from "mongoose"

const testCaseSchema = new Schema({
    input: String,
    expectedOutput: String
})


const questionSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    language: [{type: String, required: true}],

    inputFormat: {
        type:String,
        required: true
    },

    outputFormat: {
        type: String,
        required: true
    },

    sampleTestCases: [testCaseSchema],

    hiddenTestCase: [testCaseSchema]
},{timestamps: true})

export const Question = mongoose.model("Question", questionSchema) 