const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true,
    },
    option1:{
        type:String,
        required:true,
    },
    option2:{
        type:String,
        required:true,
    },
    option3:{
        type:String,
        required:true,
    },
    option4:{
        type:String,
        required:true,
    },
    correct_option:{
        type:String,
        required:true,
    }
});
const QuestionBank = mongoose.model("QuestionBank",questionSchema);

module.exports=QuestionBank;