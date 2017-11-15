import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Container from './components/Container.vue';
import Sub1 from './components/Sub1.vue';
import Sub2 from './components/Sub2.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '*',
			redirect: '/'
		},
		{
			path: '/',
			component: Home
		},
		{
			path: '/sub', component: Container,
			children: [
				{path: '', component: Sub1},
				{path: 'sub2', component: Sub2}
			]
		}
	]
})
