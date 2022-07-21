import uniApiH5 from './plat-h5'
import uniApiWeixin from './plat-weixin'

let uniApi: any
// #ifdef H5
uniApi = uniApiH5
// #endif
// #ifdef MP-WEIXIN
uniApi = uniApiWeixin
// #endif
export default uniApi