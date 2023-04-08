<template>
	<el-button @click="goBack">{{$t('btnGoBack')}}</el-button>
	<h1>{{ $t('errorMessege') }}</h1>
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
