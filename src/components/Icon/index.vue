<template>
	<svg class="icon" :class="classesMod">
		<use :xlink:href="`${iconsPath}#icon-${iconName}`" />
	</svg>
</template>

<script>
	import sprite from './sprites/sprite.svg';

	export default {
		name: 'Icon',

		data: () => ({
			iconsPath: sprite,
		}),

		props: {
			iconName: String,
			color: String,
		},

		computed: {
			classesMod() {
				return {
					'icon--color--gold': this.color === 'gold',
				};
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import './styles/icon.scss';
</style>
