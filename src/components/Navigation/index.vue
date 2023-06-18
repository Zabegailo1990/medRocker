<template>
	<ul class="navigation">
		<li class="navigation__item" 
			v-for="(item, index) in list" 
			:key="index"
		>
			<router-link
				class="navigation__link navigation__link--active"
				:to="item.path"
			>
				{{ item.title }}
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'Navigation',

		data: () => ({
			list: [
				{
					title: 'Каталог',
					path: '/',
				},
				{
					title: 'Избранное',
					path: 'favorites',
				},
			],
		}),
	};
</script>

<style lang="scss" scoped>
	@import './styles/navigation.scss';
</style>
