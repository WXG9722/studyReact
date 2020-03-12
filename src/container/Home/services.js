import $axios from '../../utils/enhance-axios';

export function listSearch(params) {
    return $axios.post('http://yapi.demo.qunar.com/mock/66987/listSearch', params);
}
