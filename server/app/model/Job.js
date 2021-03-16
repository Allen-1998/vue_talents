//生源信息数据库模型
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const JobSchema = new Schema({
    //状态：1->待审核，2->审核通过，3->审核未通过
    status: { type: Number, default: 1 },
    //用户id
    userId:{ type: String, require: true },
    //就业单位名称
    companyName:{ type: String, require: true },
    //社会信用代码
    socialCode:{ type: String, require: true },
    //单位性质
    companyType:{ type: String, require: true },
    //单位行业
    industry:{ type: String, require: true },
    //单位所在地
    companyAddress:{ type: String, require: true },
    //单位联系人
    companyContact:{ type: String, require: true },
    //联系人电话
    companyNumber:{ type: Number, require: true },
    //联系人email
    companyEmail:{ type: String, default: '' },
    //薪资  
    pay:{ type: String, default: '' },
    //报到证签发类别
    certificateType:{ type: String, require: true },
    //报到证编号
    certificateNo:{ type: String, default: '' },
    //报到证起始时间
    certificateTime:{ type: Number, default: '' },
    //签往单位名称
    certificateUnit:{ type: Array, require: true },
    //签往单位所在地
    certificateUnitLocation:{ type: String, require: true },
    //签往单位地址
    certificateUnitAddress:{ type: String, default: '' },
    //转寄单位名称
    recordUnit:{ type: String, require: true },
    //转寄单位联系人
    recordUnitContact:{ type: String, default: '' },
    //转寄单位电话
    recordUnitPhone:{ type: Number, default: '' },
    //转寄单位邮编
    recordUnitPostcode:{ type: Number, require: true },
    //转寄单位地址
    recordUnitAddress:{ type: String, default: '' },
    //户口迁转单位
    accountUnit:{ type: String, default: '' },
    //户口迁转地址
    accountAddress:{ type: String, default: '' },
});

const Job = model("Job", JobSchema);

module.exports = Job;
