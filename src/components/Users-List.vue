<template>
	<el-button
		type="primary"
		@click="getUsers()"
		>{{ $t('buttons.btnGetUsers') }}</el-button
	>
	<div v-if="success">
		<el-descriptions
			v-for="user in state.users"
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
				>{{ Object.values(user.address).slice(0, -1).join(', ') }}
			</el-descriptions-item>
		</el-descriptions>
	</div>
	<div v-else>
		<h1>{{ $t('globalText.UsersList') }}</h1>
		<h2>{{ success }}</h2>
	</div>
</template>

<script setup>
	import axios from 'axios';
	import { ElNotification } from 'element-plus';
	import { useI18n } from 'vue-i18n';
	import { ref, reactive } from 'vue';

	const state = reactive({users:[]})

	// let users = ref([]);
	let success = false;
	const { t } = useI18n();

	async function getUsers () {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users'
			);
			state.users = await response.data;
			console.log(state.users)
			success = true;
			return {state}
		} catch (error) {
			console.log(error)
			ElNotification({
				title: t('notification.ENotificatoinErrorTitle'),
				message: t('notification.ENotificatoinErrorMes'),
				type: 'error',
			});
		}
	}
</script>

<style scoped>
	.el-descriptions {
		margin-top: 20px;
	}

	.el-container {
		max-width: 800px;
	}

	h1 {
		margin: 50px 0 0 50px;
		font-size: 2em;
	}
</style>
