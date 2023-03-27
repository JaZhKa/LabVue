<template>
	<div>
		<el-header>
			<h1>{{ $t('headTitle') }}</h1>
		</el-header>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.el-header {
		background-color: #3375b9;
		width: 100%;
	}

	h1 {
		font: italic small-caps bold 2em cursive;
		margin: 0 0 0 300px;
		padding: 5px 0 0 0;
	}
</style>
