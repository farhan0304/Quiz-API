const express = require("express");
const QuestionBank = require("../model/question.model.js");

const addNewQuestion = async (req,res)=>{
    const body = req.body;
    try {
        if(!body.question || !body.option1 || !body.option2 || !body.option3 || !body.option4 || !body.correct_option ){
            throw "All feilds are required"
        }

        const addQuestion = await QuestionBank.create({
            "question" : body.question,
            "option1" : body.option1,
            "option2" : body.option2,
            "option3" : body.option3,
            "option4" : body.option4,
            "correct_option" : body.correct_option
        })

        return res.status(200).json(addQuestion);

    } catch (error) {
        res.status(400).json({
            error
        })
    }
    
}

const getAllQuestion = async (req,res)=>{
    try {

        const questionData = await QuestionBank.find({},{
            _id:0,question:1,option1:1,option2:1,option3:1,option4:1,correct_option:1});
        
        return res.status(200).json(
            [
                ...questionData
            ]
        );
        
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

module.exports = {
    addNewQuestion,
    getAllQuestion
}



