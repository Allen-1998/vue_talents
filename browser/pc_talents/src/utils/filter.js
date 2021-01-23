import moment from 'moment'

export default filter = {
    // 时间过滤
    formatD: value => moment(value).format('YYYY-MM-DD'),
    formatM: value => moment(value).format('YYYY-MM-DD HH:mm'),
    formaS: value => moment(value).format('YYYY-MM-DD HH:mm:ss'),
}