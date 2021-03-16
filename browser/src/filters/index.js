import moment from "moment";

// 时间过滤
export function formatDate(val) {
    return moment(val).format("YYYY-MM-DD");
}

export function formatMinute(val) {
    return moment(val).format("YYYY-MM-DD HH:mm");
}

export function formatSecond(val) {
    return moment(val).format("YYYY-MM-DD HH:mm:ss");
}

//单选框过滤
export function formatRadio(val, prop) {
    switch (prop) {
        case "sex":
            switch (val) {
                case "0":
                    return "女";
                case "1":
                    return "男";
            }
            break;
        default:
            switch (val) {
                case "0":
                    return "否";
                case "1":
                    return "是";
            }
            break;
    }
}