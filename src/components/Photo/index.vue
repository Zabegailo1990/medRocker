<template>
	<div class="photo">
		<Button
			class="photo__button"
			:round="true"
			bg="white"
			@click.native="handleFavoriteClick"
		>
			<Icon
				:iconName="'star'"
				:color="favorites.map((item) => item.id).includes(photo.id) ? 'gold': 'gray'"
			/>
		</Button>
		<img
			class="photo__img"
			:src="photo.thumbnailUrl"
			@mouseover="isHover = true"
			@mouseout="isHover = false"
			@click="isModalOpened = true"
		/>
		<p class="photo__text" v-if="description && title">{{ title }}</p>
		<div class="photo__popup" v-if="isHover && hover && title">
			<p class="photo__text photo__text--color--white">{{ title }}</p>
		</div>
		<Modal
			:isOpened="isModalOpened"
			:url="photo.url"
			@close-modal="isModalOpened = false"
		/>
	</div>
</template>

<script>
	import Button from '../Button/index.vue';
	import Icon from '../Icon/index.vue';
	import Modal from '../Modal/index.vue';
	import { getFavorites, removeFavorites, setFavorites } from '@/storage';

	export default {
		name: 'Photo',

		components: {
			Button,
			Icon,
			Modal,
		},

		props: {
			description: Boolean,
			hover: {
				type: Boolean,
				default: true
			},
			title: String,
			photo: Object,
		},

		data: () => ({
			favorites: [],
			isHover: false,
			isModalOpened: false,
		}),

		mounted() {
			this.favorites = getFavorites();
		},

		methods: {
			handleFavoriteClick() {
				if (
					this.favorites
						.map((item) => item.id)
						.includes(this.photo.id)
				) {
					removeFavorites(this.photo.id);
				} else {
					setFavorites(this.photo);
				}
				this.favorites = getFavorites();
				this.$emit('favoriteChanged', this.favorites);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import './styles/photo.scss';
</style>
