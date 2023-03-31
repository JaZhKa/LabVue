<template>
	<div>
		<el-header>
			<h1>{{ $t('headTitle') }}</h1>
			<p>{{ $d(new Date(), 'short') }}</p>
			<select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
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
	
	p{
		font: italic small-caps bold .8em cursive;
	}
</style>
