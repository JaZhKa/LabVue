<template>
		<el-button
			type="primary"
			@click="getUsers()"
			>{{ $t('btnGetUsers') }}</el-button
		>
		<div v-if="success">
			<el-descriptions
				v-for="user in users"
				:key="user.id"
				direction="vertical"
				:column="4"
				:size="'default'"
				border
			>
				<el-descriptions-item label="Username">{{
					user.name
				}}</el-descriptions-item>
				<el-descriptions-item label="Telephone">{{
					user.phone
				}}</el-descriptions-item>
				<el-descriptions-item
					label="Email"
					:span="2"
					>{{ user.email }}</el-descriptions-item
				>
				<el-descriptions-item label="Username">
					{{ user.username }}
				</el-descriptions-item>
				<el-descriptions-item label="Address"
					>{{
						Object.values(user.address)
							.slice(0, -1)
							.join(', ')
					}}
				</el-descriptions-item>
			</el-descriptions>
		</div>
		<div v-else-if="!success">
			<h1>{{ $t('UsersList') }}</h1>
		</div>
</template>

<script>
import axios from 'axios';
	export default {
		data() {
			return {
				users: null,
				success: false,
			};
		},
		methods: {
			async getUsers() {
				axios
					.get('https://jsonplaceholder.typicode.com/users')
					.then((response) => {
						this.users = response.data;
						this.success = true;
					})
					.catch((error) => {
						console.log(error);
					});
			},
		},
	};
</script>

<style scoped>
	.el-descriptions {
		margin-top: 20px;
	}

  .el-container{
    max-width: 800px;
  }

	h1 {
		margin: 50px 0 0 50px;
		font-size: 2em;
	}
</style>
