<template>
	<div class="dropdown">
		<div class="dropdown__row">
			<Button
				class="dropdown__button dropdown__button--icon"
				:class="classesMod"
				:round="true"
				bg="blue"
				@click.native="isActive = !isActive"
			/>
			<slot name="title" />
		</div>
		<div class="dropdown__content" v-if="isActive">
			<slot />
		</div>
	</div>
</template>

<script>
	import Button from '../Button/index.vue';
	export default {
		name: 'Dropdown',
		components: {
			Button,
		},

		data: () => ({
			isActive: false,
		}),

		computed: {
			classesMod() {
				return {
					'dropdown__button--icon--active': this.isActive,
				};
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import './styles/dropdown.scss';
</style>
