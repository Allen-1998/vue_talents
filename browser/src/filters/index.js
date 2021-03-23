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

export function formatDates(arr) {
    const start = moment(arr[0]).format("YYYY-MM-DD");
    const end = moment(arr[1]).format("YYYY-MM-DD");
    return `${start} 至 ${end}`;
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
