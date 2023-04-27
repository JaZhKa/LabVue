<template>
	<div class="common-layout">
		<el-container>
			<HeaderComp />
			<el-container class="main-container">
				<MainMenuComp />
				<el-container>
					<el-main>
						<router-view></router-view>
					</el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
	import HeaderComp from './components/Layout-container-header.vue';
	import MainMenuComp from './components/Main-menu.vue';

	export default {
		components: {
			HeaderComp,
			MainMenuComp,
		},
	};
</script>

<style>
	@import './styles/reset';

	.el-container {
		display: block;
	}

	.main-container {
		display: flex;
		flex-direction: row;
		margin: auto;
		width: 1200px;
	}
</style>
