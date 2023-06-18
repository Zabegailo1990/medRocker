<template>
	<div class="layout-default">
		<div class="layout-default__container">
			<Navigation />
			<router-view />
		</div>
	</div>
</template>

<script>
	import Navigation from '../../components/Navigation/index.vue';

	export default {
		name: 'LayoutDefault',
		components: {
			Navigation,
		},
	};
</script>

<style lang="scss" scoped>
	@import './styles/layout-default.scss';
</style>
