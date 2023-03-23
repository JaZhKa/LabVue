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
			label="Email"
			prop="email"
		>
			<el-input v-model="ruleForm.email" />
		</el-form-item>
		<el-form-item
			label="Password"
			prop="pass"
		>
			<el-input
				v-model="ruleForm.pass"
				type="password"
				autocomplete="off"
			/>
		</el-form-item>
		<el-form-item
			label="Confirm"
			prop="checkPass"
		>
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
				>Submit</el-button
			>
			<el-button @click="resetForm(ruleFormRef)">Reset</el-button>
		</el-form-item>
	</el-form>
</template>

<script lang="ts" setup>
	import { reactive, ref } from 'vue';
	import type { FormInstance, FormRules } from 'element-plus';
	import { ElNotification } from 'element-plus';

	const ruleFormRef = ref<FormInstance>();

	const checkEmail = (rule: any, value: any, callback: any) => {
		if (!value) {
			return callback(new Error('Please input the Email'));
		}
		setTimeout(() => {
			if (!value.includes('@')) {
				callback(new Error('Please input Email'));
			} else {
				callback();
			}
		}, 1000);
	};

	const validatePass = (rule: any, value: any, callback: any) => {
		if (value === '') {
			callback(new Error('Please input the password'));
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
			callback(new Error('Please input the password again'));
		} else if (value !== ruleForm.pass) {
			callback(new Error("Two inputs don't match!"));
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

	const sendForm = function () {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'auth',
				userEmail: ruleForm.email,
				userPass: ruleForm.pass,
				userId: 1,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				open1();
			})
			.catch(() => {
				open4();
			});
	};

	const open1 = () => {
		ElNotification({
			title: 'Success',
			message: 'Data has been sent',
			type: 'success',
		});
	};

  const open2 = () => {
  ElNotification({
    title: 'Warning',
    message: 'Fill in all the fields!',
    type: 'warning',
  })
}

  const open4 = () => {
  ElNotification({
    title: 'Error',
    message: 'Fail!',
    type: 'error',
  })
}

	const submitForm = (formEl: FormInstance | undefined) => {
		if (!formEl) return;
		formEl.validate((valid) => {
			if (valid) {
				sendForm();
				console.log('submit!');
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
