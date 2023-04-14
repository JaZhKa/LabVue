<template>
	<div>
		<el-input
			v-model="input"
			placeholder="Please input"
			clearable
		/>
		<hr />
		<el-card class="box-card">
			<div
				v-for="user in filteredUsers"
				:key="user.id"
				class="text item"
			>
				ID:{{ user.id }} : {{ user.username }} - {{ user.name }}
			</div>
		</el-card>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		data() {
			return {
				props: {
					keyName: {
						type: String,
						required: true,
						default: 'test',
					},
				},
				input: '',
			};
		},
		computed: {
			...mapGetters(['getUsers']),
			filteredUsers() {
				return this.getUsers.filter((user) => {
					return user.name
						.toLowerCase()
						.includes(this.input.toLocaleLowerCase());
				});
			},
		},
		methods: mapActions(['fetchUsers']),
		async mounted() {
			this.fetchUsers();
		},
	};
</script>

<style scoped>
	.text {
		font-size: 14px;
	}

	.item {
		padding: 18px 0;
	}

	.box-card {
		width: 480px;
	}
</style>
