import { AddContact } from "../views/AddContact";

const url = "https://3000-e72c875d-de25-4865-ba8f-27d8d6a62092.ws-us02.gitpod.io/contact";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			Contact: []
		},
		actions: {
			getContact() {
				fetch(url)
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
						name: name,
						phone: phone,
						email: email,
						address: address
						// agenda_slug: "NelsonContact"
					})
				}).then(() => {
					fetch(url)
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
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						name: name,
						phone: phone,
						email: email,
						address: address
						// agenda_slug: "NelsonContact"
					})
				}).then(() => {
					fetch(url)
						.then(res => res.json())
						.then(results => {
							console.log("edit", results),
								setStore({
									Contact: results
								});
						})
						.catch(err => console.error(err));
				});
			},
			deleteContact(id) {
				fetch(url + id, {
					method: "delete"
				}).then(() => {
					fetch(url)
						.then(res => res.json())
						.then(results => {
							console.log("delete", results);
							setStore({
								Contact: results
							});
						})
						.catch(e => console.error(e));
				});
			}
		}
	};
};

export default getState;
