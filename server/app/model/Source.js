//生源信息数据库模型
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const SourceSchema = new Schema({
    //状态：1->待审核，2->审核通过，3->审核未通过
    status: { type: Number, default: 1 },
    //用户id
    userId:{ type: String, require: true },
    //姓名
    name:{ type: String, require: true },
    //性别
    sex:{ type: String, require: true },
    //身份证号
    idCardNo:{ type: Number, require: true },
    //出生日期
    birth:{ type: Number, require: true },
    //政治面貌
    politics:{ type: String, require: true },
    //民族
    nation:{ type: String, require: true },
    //生源所在地
    domicile:{ type: String, require: true },
    //毕业院校
    schoolName:{ type: String, require: true },
    //学历
    education:{ type: String, require: true },
    //所在院系
    department:{ type: String, require: true },
    //专业班级
    major:{ type: String, require: true },
    //学号
    studentId:{ type: Number, require: true },
    //就读时间
    studyingTime:{ type: Array, require: true },
    //学习形式
    studyMode:{ type: String, require: true },
    //学制
    educationalSystem:{ type: String, require: true },
    //专业方向
    professional:{ type: String, require: true },
    //培养方式
    trainingMode:{ type: String, default: '' },
    //手机号码
    phone:{ type: Number, require: true },
    //QQ
    qq:{ type: Number, default: '' },
    //微信
    wx:{ type: String, default: '' },
    //电子邮箱
    email:{ type: String, require: true },
    //紧急联系人
    emergencyContact:{ type: String, require: true },
    //家庭电话
    homePhone:{ type: Number, require: true },
    //家庭地址
    address:{ type: String, require: true },
    //家庭邮编
    postcode:{ type: Number, default: '' },
    //档案是否转入学校
    record:{ type: String, require: true },
    //户口是否转入学校
    account:{ type: String, require: true },
    //入学前档案所在单位
    unit:{ type: String, require: true },
    //入学前户口所在地
    policeStation:{ type: String, require: true },
});

const Source = model("Source", SourceSchema);

module.exports = Source;
