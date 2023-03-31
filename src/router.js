import { createRouter, createWebHistory } from 'vue-router';
import FormComp from './components/Form-auth.vue';
import notFound from './components/Not_Found.vue';
import PluralComp from './components/Pluralization-counter.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/auth', component: FormComp },
		{ path: '/plur', component: PluralComp },
		{ path: '/:catchAll(.*)', component: notFound },
	],
});
