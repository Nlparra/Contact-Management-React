import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";
import { Contacts } from "../views/Contacts";
import { Link } from "react-router-dom";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, action } = useContext(Context);
	console.log("sttooooreee", store.Contact);

	return (
		<div>
			{store.Contact &&
				store.Contact.map((e, index) => {
					return (
						<li key={index} className="list-group-item">
							<div className="row w-100">
								<div className="col-12 col-sm-6 col-md-3 px-0">
									<img
										src={MikePhoto}
										alt="Mike Anamendolla"
										className="rounded-circle mx-auto d-block img-fluid"
									/>
								</div>
								<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
									<div className=" float-right">
										<label className="name lead">{e.full_name}</label>
										<br />
										<i className="fas fa-map-marker-alt text-muted mr-3" />
										<span className="text-muted">{e.address}</span>
										<br />
										<span
											className="fa fa-phone fa-fw text-muted mr-3"
											data-toggle="tooltip"
											title=""
											data-original-title="(870) 288-4149"
										/>
										<span className="text-muted small">{e.phone}</span>
										<br />
										<span
											className="fa fa-envelope fa-fw text-muted mr-3"
											data-toggle="tooltip"
											data-original-title=""
											title=""
										/>
										<span className="text-muted small text-truncate">{e.email}</span>
									</div>
								</div>
							</div>
							<Link to={"/edit/" + e.id + "/" + index}>
								<button className="btn">
									<i className="fas fa-pencil-alt mr-3" />
								</button>
							</Link>
							<button className="btn" onClick={() => props.onDelete()}>
								<i className="fas fa-trash-alt" />
							</button>
						</li>
					);
				})}
		</div>
	);
};

ContactCard.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object,
	onDelete: PropTypes.func
};

ContactCard.defaultProps = {
	onDelete: null
};
