const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters:[],
			planets:[]
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getData: (url, param2) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(url)
				.then(response=>response.json())
				.then(data=>setStore({[param2]:data.results})
				.catch(error=> console.log("Looks like there was a problem: \n", error)))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
