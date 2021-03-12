import { createApp } from 'vue';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import App from './App.vue';
import router from './router';
import store from './store';
import './main.css';

createApp(App)
	.use(VueGoogleMaps, {
		load: {
			key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
		}
	})
	.use(store)
	.use(router)
	.mount('#app');
