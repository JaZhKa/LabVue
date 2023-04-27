<template>
	<router-link to="/plur"
		><el-button type="primary">{{
			$t('mainMenu.itemOne')
		}}</el-button></router-link
	>
	<router-link to="/filter"
		><el-button type="primary">
			{{ $t('mainMenu.itemTwo') }}</el-button
		></router-link
	>
	<router-link to="/users"
		><el-button type="primary">
			{{ $t('mainMenu.itemTwo') }}</el-button
		></router-link
	>
	<router-link to="/auth"
		><el-button type="primary">{{
			$t('mainMenu.signIn')
		}}</el-button></router-link
	>
	<p>{{ date }}</p>{{ date }}
</template>

<script>

</script>

<style scoped>
	button {
		margin: 10px;
	}
</style>
