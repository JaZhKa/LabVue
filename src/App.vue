<template>
	<div class="common-layout">
		<el-container>
			<HeaderComp />
			<el-container class="main-container">
				<MainMenuComp />
				<el-container>
					<el-main>
						<FormComp></FormComp>
					</el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
	import HeaderComp from './components/Layout-container-header.vue';
	import MainMenuComp from './components/Main-menu.vue'

	export default {
		components: {
			HeaderComp,
			MainMenuComp
		},
	};
</script>

<script lang="ts" setup>
	import { defineAsyncComponent } from 'vue';

	const FormComp = defineAsyncComponent(
		() => import('./components/Form-auth.vue')
	);
</script>

<style>
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	
	.el-container{
		display: block;
	}

	.main-container {
		display: flex;
		flex-direction: row;
		margin: auto;
		width: 1200px;
	}
</style>