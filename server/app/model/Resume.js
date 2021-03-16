//生源信息数据库模型
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ResumeSchema = new Schema({
    //状态：1->待审核，2->审核通过，3->审核未通过
    status: { type: Number, default: 1 },
    //用户id
    userId:{ type: String, require: true },
    //简历base64
    url:{ type: String, require: true },
});

const Resume = model("Resume", ResumeSchema);

module.exports = Resume;
