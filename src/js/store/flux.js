import { AddContact } from "../views/AddContact";

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
			},

			addContact(name, phone, email, address) {
				fetch(url, {
					method: "Post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						email: email,
						address: address,
						agenda_slug: "NelsonContact"
					})
				}).then(() => {
					fetch(url + "/agenda/NelsonContact")
						.then(res => res.json())
						.then(data => {
							console.log("Get Contact", data),
								setStore({
									Contact: data
								});
						})
						.catch(e => console.error(e));
				});
			}
		}
	};
};

export default getState;
