import { createStore } from 'vuex';
import { getSpotData } from '../assets/data/spotData';

export default createStore({
	state: {
		initialized: false,
		spotList: [],
		selectedSpotId: 0
	},

	getters: {
		initialized: state => state.initialized,
		spotList: state => state.spotList,
		selectedSpotId: state => state.selectedSpotId
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
				const data = getSpotData();
				console.log('Spot data fetched 🎣');

				// Sort data ascending by date
				data.sort((a, b) => {
					return b.date.seconds - a.date.seconds;
				});
				commit('initSpotList', data);
			}

			// App data is ready for use
			commit('initialized', true);
		}
	},

	modules: {}
});
