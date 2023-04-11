<template>
	<el-button @click="goBack">{{$t('buttons.btnGoBack')}}</el-button>
	<h1>{{ $t('globalText.errorMessege') }}</h1>
</template>

<script>
	export default {
		methods: {
			goBack() {
				this.$router.go(-1);
			},
		},
	};
</script>

<style scoped>
	h1 {
		font-size: 10em;
		color: red;
	}
</style>
