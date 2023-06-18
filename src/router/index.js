import Vue from 'vue';
import VueRouter from 'vue-router';
import LayoutDefault from '../layouts/LayoutsDefault/index.vue';
import Catalog from '../pages/Catalog/index.vue';
import Favorites from '../pages/Favorites/index.vue';

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: LayoutDefault,
			children: [
				{
					path: '',
					component: Catalog,
				},
				{
					path: 'favorites',
					component: Favorites,
				},
			],
		},
	],
});

export default router;
