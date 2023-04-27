<template>
	<div>
		<el-header>
			<router-link to="/">
				<h1>{{ $t('globalText.headTitle') }}</h1>
			</router-link>
			<p>{{ $d(date, 'short') }}</p>
			<select v-model="$i18n.locale">
				<option
					v-for="locale in $i18n.availableLocales"
					:key="`locale-${locale}`"
					:value="locale"
				>
					{{ locale }}
				</option>
			</select>
		</el-header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				date: new Date(),
			};
		},
		mounted() {
			setInterval(() => (this.date = new Date()), 1000);
		},
	};
</script>

<style scoped>
	.el-header {
		background-color: #3375b9;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: space-around;
		align-items: center;
	}

	h1 {
		font: italic small-caps bold 2em cursive;
		padding: 5px 0 0 0;
	}

	p {
		font: italic small-caps bold 0.8em cursive;
	}
</style>
