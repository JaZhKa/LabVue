import { createRouter, createWebHistory } from 'vue-router';
import FormComp from './components/Form-auth.vue';
import notFound from './components/Not_Found.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/auth', component: FormComp },
		{ path: '/:catchAll(.*)', component: notFound },
	],
});
