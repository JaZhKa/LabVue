<template>
	<div>
		<el-col :span="12">
			<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
			>
				<el-sub-menu index="1">
					<template #title>
						<el-icon><Location /></el-icon>
						<span>{{ $t('mainMenu.navOne') }}</span>
					</template>
					<el-menu-item-group title="">
						<router-link to="/plur">
							<el-menu-item index="1-1">{{
								$t('mainMenu.itemOne')
							}}</el-menu-item>
						</router-link>
						<router-link to="/filter">
							<el-menu-item index="1-2">{{
								$t('mainMenu.itemTwo')
							}}</el-menu-item>
						</router-link>
					</el-menu-item-group>
					<el-menu-item-group title="">
						<el-menu-item index="1-3">{{
							$t('mainMenu.itemThree')
						}}</el-menu-item>
					</el-menu-item-group>
					<el-sub-menu index="1-4">
						<template #title>{{ $t('mainMenu.itemFour') }}</template>
						<el-menu-item index="1-4-1">{{
							$t('mainMenu.itemOne')
						}}</el-menu-item>
					</el-sub-menu>
				</el-sub-menu>
				<router-link to="/users">
					<el-menu-item index="2">
						<el-icon><icon-menu /></el-icon>
						<span>{{ $t('mainMenu.navTwo') }}</span>
					</el-menu-item>
				</router-link>
				<router-link to="/auth">
					<el-menu-item index="3">
						<el-icon><setting /></el-icon>
						<span>{{ $t('mainMenu.signIn') }}</span>
					</el-menu-item>
				</router-link>
			</el-menu>
		</el-col>
	</div>
</template>

<script lang="ts" setup>
	import { Menu as IconMenu, Setting, Location } from '@element-plus/icons-vue';
</script>

<style scoped>
	.el-menu {
		width: 200px;
	}

	a {
		text-decoration: none;
	}
</style>
