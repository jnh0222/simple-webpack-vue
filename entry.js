// entry point
import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import './static/scss/import.scss';

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
