import { createRouter, createWebHistory } from 'vue-router';
import FormComp from './components/Form-auth.vue';
import notFound from './components/Not_Found.vue';
import PluralComp from './components/Pluralization-counter.vue';
import UsersListComp from './components/Users-List.vue';
import FilterComp from './components/User-filter.vue';
import HomeComp from './components/Home-page.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: HomeComp },
		{ path: '/auth', component: FormComp },
		{ path: '/plur', component: PluralComp },
		{ path: '/users', component: UsersListComp },
		{ path: '/filter', component: FilterComp },
		{ path: '/:catchAll(.*)', component: notFound },
	],
});
