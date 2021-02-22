//验证用户名规则
const validateUsername = (rule, value, callback) => {
  const reg = /^[A-Za-z]{1}[A-Za-z0-9]{2,9}/;
  if (reg.test(value)) return callback();
  callback(new Error("需以字母开头，字母数字组合3~10长度"));
};
//验证密码
const validatePassword = (rule, value, callback) => {
  const reg = /^(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
  if (reg.test(value)) return callback();
  callback(new Error("需包含大小写字母数字，8~15长度"));
};
//二次验证密码
const validateRePassword = (rule, value, callback) => {
  const reg = /^(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
  if (reg.test(value)) return callback();
  callback(new Error("需包含大小写字母数字，8~15长度"));
};
// 手机号码验证
const validatePhone = (rule, value, callback) => {
  const reg = /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/;
  if (reg.test(value)) return callback();
  callback(new Error("请输入正确格式的手机号"));
};
// 身份证号
const validateIdCardNo = (rule, value, callback) => {
  const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
  if (reg.test(value)) return callback();
  callback(new Error("请输入正确格式的身份证号"));
};
// 邮箱
const validateEmail = (rule, value, callback) => {
  const reg = /(^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)/;
  if (reg.test(value)) return callback();
  callback(new Error("请输入正确格式的邮箱地址"));
};

export default {
  common: {
    // ---------------------公共验证方法
    //手机号
    phone: validatePhone,
    //邮箱
    email: validateEmail,
    //身份证号
    idCardNo: validateIdCardNo,
  },
  handle: {
    // ---------------------处理表单的验证方法
    username: [
      {
        // 用户名
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        validator: validateUsername,
        trigger: "blur",
      },
    ],
    password: [
      {
        // 密码
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        validator: validatePassword,
        trigger: "blur",
      },
    ],
    rePassword: [
      {
        // 密码
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        validator: validateRePassword,
        trigger: "blur",
      },
    ],
  },
};
