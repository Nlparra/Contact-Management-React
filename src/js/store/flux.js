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
							console.log("Add Contact", data),
								setStore({
									Contact: data
								});
						})
						.catch(e => console.error(e));
				});
			},
			editContact(id, name, phone, email, address) {
				fetch(url + id, {
					method: "Put",
					// headers: { "Context-type": "application/json" },
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
						.then(results => {
							console.log("edit", results),
								setStore({
									Contact: results
								});
						})
						.catch(err => console.error(err));
				});
			}
		}
	};
};

export default getState;
