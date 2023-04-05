import { createRouter, createWebHistory } from 'vue-router';
import FormComp from './components/Form-auth.vue';
import notFound from './components/Not_Found.vue';
import PluralComp from './components/Pluralization-counter.vue';
import UsersListComp from './components/Users-List.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/auth', component: FormComp },
		{ path: '/plur', component: PluralComp },
		{ path: '/users', component: UsersListComp },
		{ path: '/:catchAll(.*)', component: notFound },
	],
});
