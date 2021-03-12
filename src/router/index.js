import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import SpotDetails from '../views/SpotDetails.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/details/:spotId',
		name: 'SpotDetails',
		component: SpotDetails,
		props: true
	},
	{
		path: '/contact',
		name: 'ContactPage',
		component: ContactPage
	},
	{
		path: '/:catchAll(.*)',
		name: 'PageNotFound',
		component: () => import('../views/PageNotFound.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
