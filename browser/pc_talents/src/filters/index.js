import moment from 'moment'

// 时间过滤
export function formatDate(val){
    return moment(val).format('YYYY-MM-DD')
} 

export function formatMinute(val){
    return moment(val).format('YYYY-MM-DD HH:mm')
} 

export function formatSecond(val){
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
} 