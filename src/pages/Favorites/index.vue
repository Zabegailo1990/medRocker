<template>
	<div class="favorites">
		<div class="favorites__gallery">
			<Photo
				v-for="photo in favorites"
				:key="photo.id"
				:photo="photo"
				:description="true"
				:hover="false"
				:title="photo.title"
				@favoriteChanged="(obj) => (favorites = obj)"
			/>
		</div>
		<div class="favorites__notice" v-if="!favorites.length">
			<img class="favorites__img" src="../../assets/empty-favorites.png" />
			<h2 class="favorites__title">Список избранного пуст</h2>
			<p class="favorites__text">Добавляйте изображения, нажимая на звездочки</p>
		</div>
	</div>
</template>

<script>
	import Photo from '../../components/Photo/index.vue';
	import { getFavorites } from '@/storage';

	export default {
		name: 'Favorites',

		components: {
			Photo,
		},

		data: () => ({
			favorites: getFavorites(),
		}),
	};
</script>

<style lang="scss" scoped>
	@import './styles/favorites.scss';
</style>
