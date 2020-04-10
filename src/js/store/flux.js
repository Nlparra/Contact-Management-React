const url = "https://assets.breatheco.de/apis/fake/contact/";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			Contact: []
		},
		actions: {
			getContact() {
				fetch(url + "/agenda/NelsonContact")
					.then(res => res.json())
					.then(data => {
						console.log("Get Contact", data), setStore({ Contact: data });
					});
			}
		}
	};
};

export default getState;
