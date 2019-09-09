import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import CamelToKebab from '../../helpers/camelToKebab'

Vue.use(Vuex);

axios.defaults.baseURL = 'https://demo.book24.ru/api/v1';
axios.defaults.headers.common['X-TOKEN'] = '330d207892855dbd5abd5147ea562094';
axios.defaults.headers.common['Authorization'] = 'Basic ZGVtby5ib29rMjQ6Ym9vazI0';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin';
axios.defaults.responseType = 'json';
//axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'include';
//axios.defaults.withCredentials = true;

export const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {
        handleError(state, {error}) {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                //console.log(1, error.response.data);
                console.log(1, error.response.data.message);
                // console.log(error.response.status);
                // console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(2, error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log(3, 'Error', error.message);
            }
            //console.log(error.config);
        },
    },
    actions: {
        getEmailAvailability(store, {email}) {
            let url = '/user/check-email-availability' ;
            axios.get(url, {email})
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    store.commit('handleError', {error: error})
                });
        },
    },
    strict: process.env.NODE_ENV !== 'production'
});
