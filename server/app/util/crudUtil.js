module.exports = {
    SAVE_ERR : { status: 422, message: "保存失败！" },
    SAVE_SUCCESS : { status: 200, message: "保存成功！"},
    UPDATE_ERR : { status: 422, message: "修改失败！" },
    UPDATE_SUCCESS : { status: 200, message: "修改成功！"},
    DELETE_ERR : { status: 422, message: "删除失败！" },
    DELETE_SUCCESS : { status: 200, message: "删除成功！"},
    FIND_ERR : { status: 200},
    // FIND_ERR : { status: 422, message: "查询失败！" },
    FIND_SUCCESS: (data) => {
      return {
        status: 200,
        // message: "查询成功！",
        data,
      };
    },
}