// 手机号码验证
const validatePhone = (rule, value, callback) => {
  const patter = new RegExp(
    "^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$"
  );
  if (patter.test(value)) return callback();
    callback(new Error("请输入正确格式的手机号！"));
};
// 邮箱的正则
const validateEmail = (rule, value, callback) => {
  const mailbox = new RegExp(
    "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$"
  );
  if (mailbox.test(value)) return callback();
    callback(new Error("请输入正确格式的邮箱！"));

};
// 身份证号
const validateIdCardNo = (rule, value, callback) => {
  const mailbox = new RegExp(
    "^[1-9]d{5}(18|19|([23]d))d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{3}[0-9Xx]$)|(^[1-9]d{5}d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{2}[0-9Xx]$"
  );
  if (mailbox.test(value)) return callback();
  callback(new Error("请输入正确格式的身份证号！"));
};
//验证用户名规则
const validateUsername = (rule, value, callback) => {
  const regUsername = /^[A-Za-z]{1}[A-Za-z0-9]{2,9}/;
  if (regUsername.test(value)) return callback();
  callback(new Error("需以字母开头，字母数字组合3~10长度"));
};
//验证密码
const validatePassword = (rule, value, callback) => {
  const regPass = /^(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
  if (regPass.test(value)) return callback();
  callback(new Error("需包含大小写字母数字，8~15长度"));
};
//二次验证密码
const validateRePassword = (rule, value, callback) => {
  const regPass = /^(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
  if (regPass.test(value)) return callback();
  callback(new Error("需包含大小写字母数字，8~15长度"));
};

export default {
  common: {
    // ---------------------公共验证方法
    phone: [
      {
        // 手机号
        required: true,
        message: "手机号不能为空",
        trigger: "blur",
      },
      {
        validator: validatePhone,
        trigger: "blur",
      },
    ],
    email: [
      {
        // 邮箱
        required: true,
        message: "邮箱不能为空",
        trigger: "blur",
      },
      {
        validator: validateEmail,
        trigger: "blur",
      },
    ],
    idCardNo: [
      {
        // 身份证号码
        required: true,
        message: "身份证号码不能为空",
        trigger: "blur",
      },
      {
        validator: validateIdCardNo,
        trigger: "blur",
      },
    ],
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
  handle: {
    // ---------------------处理表单的验证方法
    result: [
      {
        //处理结果
        required: true,
        message: "请选择处理结果",
      },
    ],
    opinion: [
      {
        //处理结果描述
        required: true,
        message: "请填写处理结果描述",
      },
    ],
  },
};
