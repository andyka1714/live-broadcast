import axios from 'axios'
import router from '@/router'
import Vue from 'vue'
import ElementUI from 'element-ui'
import qs from 'qs'
import store from './index'

Vue.use(ElementUI)

let base = 'http://private-08d53-paimei.apiary-mock.com'
let noTransform = false

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    switch (error.response.status) {
        case 401:
            store.commit('logout');
            Vue.prototype.$cookies.remove("token");
            break;
        case 422:
            var errors = error.response.data.errors
            var message = '<ul>'
            for (var key in errors) {
                message += `<li>${errors[key]}</li>`
            }
            message += '<ul>'
            Vue.prototype.$message.error({
                dangerouslyUseHTMLString: true,
                message
            })
            break;
        case 400:
            var message = error.response.data.message
            Vue.prototype.$message.error({
                dangerouslyUseHTMLString: true,
                message
            })
            break;
        case 403:
            var message = error.response.data.message
            Vue.prototype.$message.error({
                dangerouslyUseHTMLString: true,
                message
            })
            break;
        case 404:
            var message = error.response.data.message
            Vue.prototype.$message.error({
                dangerouslyUseHTMLString: true,
                message
            })
            break;
    }
    return Promise.reject(error);
});
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
export default {
    setToken({
        commit
    }, token) {
        console.log('hahahaha')
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        commit('setToken', token);
    },
    async login({}) {
        let url = `${base}/login`
        let res = await axios.post(url)
        console.log('..........', res)
        return res.data
    },
    
}
