<template>
	<el-form
		ref="ruleFormRef"
		:model="ruleForm"
		status-icon
		:rules="rules"
		label-width="120px"
		class="demo-ruleForm"
	>
		<el-form-item
			label=""
			prop="email"
			>{{ $t('form.labelEmail') }}
			<el-input v-model="ruleForm.email" />
		</el-form-item>
		<el-form-item
			label=""
			prop="pass"
			>{{ $t('form.labelPassword') }}
			<el-input
				v-model="ruleForm.pass"
				type="password"
				autocomplete="off"
			/>
		</el-form-item>
		<el-form-item
			label=""
			prop="checkPass"
			>{{ $t('form.labelConfirm') }}
			<el-input
				v-model="ruleForm.checkPass"
				type="password"
				autocomplete="off"
			/>
		</el-form-item>
		<el-form-item>
			<el-button
				type="primary"
				:plain="true"
				@click="submitForm(ruleFormRef)"
				>{{ $t('buttons.btnSubmit') }}</el-button
			>
			<el-button @click="resetForm(ruleFormRef)">{{
				$t('buttons.btnReset')
			}}</el-button>
		</el-form-item>
	</el-form>
</template>

<script lang="ts" setup>
	import { reactive, ref } from 'vue';
	import type { FormInstance, FormRules } from 'element-plus';
	import { ElNotification } from 'element-plus';
	import { useI18n } from 'vue-i18n';
	import axios from 'axios';

	const { t } = useI18n();
	const ruleFormRef = ref<FormInstance>();

	const checkEmail = (
		rule: any,
		value: any,
		callback: any
	) => {
		if (!value) {
			return callback(new Error(t('validation.invalidMesEmail')));
		}
		setTimeout(() => {
			if (!value.includes('@')) {
				callback(new Error(t('validation.invalidMesEmail')));
			} else {
				callback();
			}
		}, 1000);
	};

	const validatePass = (rule: any, value: any, callback: any) => {
		if (value === '') {
			callback(new Error(t('validation.invalidMesPassword')));
		} else {
			if (ruleForm.checkPass !== '') {
				if (!ruleFormRef.value) return;
				ruleFormRef.value.validateField('checkPass', () => null);
			}
			callback();
		}
	};
	const validatePass2 = (rule: any, value: any, callback: any) => {
		if (value === '') {
			callback(new Error(t('validation.invalidMesConfirm')));
		} else if (value !== ruleForm.pass) {
			callback(new Error(t('validation.invalidMesConfirmNotMatch')));
		} else {
			callback();
		}
	};

	const ruleForm = reactive({
		pass: '',
		checkPass: '',
		email: '',
	});

	const rules = reactive<FormRules>({
		pass: [{ validator: validatePass, trigger: 'blur' }],
		checkPass: [{ validator: validatePass2, trigger: 'blur' }],
		email: [{ validator: checkEmail, trigger: 'blur' }],
	});

	// const sendForm = function () {
	// 	fetch('https://jsonplaceholder.typicode.com/posts', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			title: 'auth',
	// 			userEmail: ruleForm.email,
	// 			userPass: ruleForm.pass,
	// 			userId: 1,
	// 		}),
	// 		headers: {
	// 			'Content-type': 'application/json; charset=UTF-8',
	// 		},
	// 	})
	// 		.then((response) => response.json())
	// 		.then((json) => {
	// 			console.log(json);
	// 			open1();
	// 		})
	// 		.catch(() => {
	// 			open4();
	// 		});
	// };

	const sendForm = async function () {
		axios
			.post('https://jsonplaceholder.typicode.com/posts', {
				userEmail: ruleForm.email,
				userPass: ruleForm.pass,
			})
			.then((response) => {
				console.log(response);
				open1();
			})
			.catch((error) => {
				console.log(error);
				open4();
			});
	};

	const open1 = () => {
		ElNotification({
			title: t('notification.ENotificatoinSuccessTitle'),
			message: t('notification.ENotificatoinSuccessMes'),
			type: 'success',
		});
	};

	const open2 = () => {
		ElNotification({
			title: t('notification.ENotificatoinWarningTitle'),
			message: t('notification.ENotificatoinWarningMes'),
			type: 'warning',
		});
	};

	const open4 = () => {
		ElNotification({
			title: t('notification.ENotificatoinErrorTitle'),
			message: t('notification.ENotificatoinErrorMes'),
			type: 'error',
		});
	};

	const submitForm = (formEl: FormInstance | undefined) => {
		if (!formEl) return;
		formEl.validate((valid) => {
			if (valid) {
				sendForm();
			} else {
				open2();
				return false;
			}
		});
	};

	const resetForm = (formEl: FormInstance | undefined) => {
		if (!formEl) return;
		formEl.resetFields();
	};
</script>
