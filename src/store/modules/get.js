import axios from 'axios';

export default {
	state: {
		users: [],
	},
	getters: {
		getUsers: (state) => state.users,
	},
	actions: {
		async fetchUsers({ commit }) {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/users'
				);
				commit('setUsers', response.data);
			} catch (error) {
				console.log(error);
			}
		},
	},
	mutations: {
		setUsers(state, users) {
			state.users = users;
		},
	},
};
