import { createStore } from 'vuex';
// import { getSpotData } from '../utils/spotData'; // Static spot data
import { getMapStyle } from '../utils/mapStyle';

export default createStore({
	state: {
		initialized: false,
		spotList: [],
		selectedSpotId: 0,
		latestPost: {},
		detailsSpotId: 0,
		mapStyle: [],
		mapCenter: {}
	},

	getters: {
		initialized: state => state.initialized,
		spotList: state => state.spotList,
		selectedSpotId: state => state.selectedSpotId,
		latestPost: state => state.latestPostId,
		detailsSpotId: state => state.detailsSpotId,
		mapStyle: state => state.mapStyle,
		mapCenter: state => state.mapCenter
	},

	mutations: {
		initialized: (state, data) => {
			state.initialized = data;
		},

		initSpotList: (state, data) => {
			state.spotList = data;
		},

		setSelectedSpotId: (state, data) => {
			state.selectedSpotId = data;
		},

		setlatestPost: (state, data) => {
			state.latestPost = data;
		},

		setDetailsSpotId: (state, data) => {
			state.detailsSpotId = data;
		},

		initMapStyle: (state, data) => {
			state.mapStyle = data;
		},

		initMapCenter: (state, data) => {
			state.mapCenter = data;
		}
	},

	actions: {
		async init({ state, commit }) {
			// Check if App already has been initialized
			if (state.initialized) {
				return;
			}

			{
				// Get spot data
				// const data = getSpotData(); // Static spot data
				const { data, error } = await to(getSpotData());
				if (error) {
					return;
				}
				console.log('Spot data fetched 🎣');

				// Sort data ascending by date
				data.data.sort((a, b) => {
					return b.date.seconds - a.date.seconds;
				});
				commit('initSpotList', data.data);

				// Set latestPost to latest post
				const latestPost = data.data[0];
				console.log(`ID of latest post is ${latestPost.id} ✨`);
				commit('setlatestPost', latestPost);

				// Make latest post pre-selected
				commit('setSelectedSpotId', latestPost.id);

				// Init map center by latest post
				const center = latestPost.location.coordinates;
				commit('initMapCenter', center);
			}

			{
				// Init map style
				const data = getMapStyle();
				console.log('Map style fetched 🎨');
				commit('initMapStyle', data);
			}

			// App data is ready for use
			commit('initialized', true);
			console.log('App initialized ⚙️');
		}
	},
	modules: {}
});

/* IO Handling */

const url = 'https://romey-api.herokuapp.com/';

export function getSpotData() {
	return fetch(url + 'spots');
}

function to(promise) {
	return promise
		.then(response => response.json())
		.then(data => ({ data, error: null }))
		.catch(error => ({ data: null, error }));
}
