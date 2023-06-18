<template>
	<div class="modal" v-if="showModal">
		<Button class="modal__close" bg="none" @click.native="handleClose">
			<Icon iconName="close" />
		</Button>
		<div class="modal__overlay" @click="handleClose" />
		<img class="modal__img" :src="url" />
	</div>
</template>

<script>
	import Button from '../Button/index.vue';
	import Icon from '../Icon/index.vue';

	export default {
		name: 'Modal',
		components: {
			Button,
			Icon,
		},
		
		props: {
			isOpened: {
				type: Boolean,
				default: false,
			},
			url: String,
	},
		
		data: () => ({
			showModal: false,
		}),

		mounted() {
			this.showModal = this.isOpened;
		},

		watch: {
			isOpened() {
				this.showModal = this.isOpened;
			},
		},

		methods: {
			handleClose() {
				this.showModal = false;
				this.$emit('close-modal');
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import './styles/modal.scss';
</style>
