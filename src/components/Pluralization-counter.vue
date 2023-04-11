<template>
	<div>
		<input
			type="text"
			placeholder="Count"
			v-model.number="count"
		/>
		<p>{{ $t('globalText.plur', count) }}</p>
	</div>
</template>

<script>
	export default {
		data: () => ({
			count: '',
		}),
	};
</script>
