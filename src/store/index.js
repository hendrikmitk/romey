import { createStore } from 'vuex';
// import { getSpotData } from '../utils/spotData'; // Static spot data

export default createStore({
	state: {
		initialized: false,
		spotList: [],
		authorList: [],
		selectedAuthor: {},
		selectedSpotId: 0,
		latestPost: {},
		detailSpot: {},
		mapCenter: {}
	},

	getters: {
		initialized: state => state.initialized,
		spotList: state => state.spotList,
		authorList: state => state.authorList,
		selectedAuthor: state => state.selectedAuthor,
		selectedSpotId: state => state.selectedSpotId,
		maxSpotId: state => state.maxSpotId,
		latestPost: state => state.latestPostId,
		detailSpot: state => state.detailSpot,
		mapCenter: state => state.mapCenter
	},

	mutations: {
		initialized: (state, data) => {
			state.initialized = data;
		},

		initSpotList: (state, data) => {
			state.spotList = data;
		},

		initAuthorList: (state, data) => {
			state.authorList = data;
		},

		setSelectedAuthor: (state, data) => {
			state.selectedAuthor = data;
		},

		setSelectedSpotId: (state, data) => {
			state.selectedSpotId = data;
		},

		setMaxSpotId: (state, data) => {
			state.maxSpotId = data;
		},

		setlatestPost: (state, data) => {
			state.latestPost = data;
		},

		setDetailSpot: (state, data) => {
			state.detailSpot = data;
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

				// Get list of unique author details and set default author
				const authorDetails = data.data.map(post => {
					return {
						author: post.author,
						author_image_alt: post.author_image_alt,
						author_image_src: post.author_image_src
					};
				});
				const uniqueAuthorDetails = authorDetails.filter(
					(v, i, a) => a.findIndex(t => t.author === v.author) === i
				);
				commit('initAuthorList', uniqueAuthorDetails);
				console.log(`Default author is ${uniqueAuthorDetails[0].author} ✍️`);
				commit('setSelectedAuthor', uniqueAuthorDetails[0]);

				// Get biggest spot id
				const spotIds = () => {
					return data.data.map(spot => spot.id);
				};
				const maxSpotId = Math.max(...spotIds());
				console.log(`Biggest spot id is ${maxSpotId} 👠`);
				commit('setMaxSpotId', maxSpotId);

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

			// App data is ready for use
			commit('initialized', true);
			console.log('App initialized ⚙️');
		}
	},
	modules: {}
});

/* IO Handling */

const url = '/.netlify/functions/get-spots';

export function getSpotData() {
  return fetch(url);
}

function to(promise) {
	return promise
		.then(response => response.json())
		.then(data => ({ data, error: null }))
		.catch(error => ({ data: null, error }));
}
