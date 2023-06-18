<template>
	<div class="catalog">
		<User
			class="catalog__user"
			v-for="user in users"
			:key="user.id"
			:userId="user.id"
			:fullname="user.name"
		/>
		<Loading class="catalog__loading" v-if="isLoading" />
	</div>
</template>

<script>
	import User from '../../components/User/index.vue';
	import Loading from '../../components/Loading/index.vue';
	import { instance } from '@/api';

	export default {
		name: 'Catalog',
		components: {
			User,
			Loading,
		},

		data: () => ({
			users: [],
			isLoading: false,
		}),

		mounted() {
			this.fetchUsers();
		},

		methods: {
			fetchUsers() {
				this.isLoading = true;
				instance
					.get('/users')
					.then((response) => {
						this.users = response?.data || [];
					})
					.catch(function (error) {
						console.log(error);
						this.isError = true;
					})
					.finally(() => {
						this.isLoading = false;
					});
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import './styles/catalog.scss';
</style>
