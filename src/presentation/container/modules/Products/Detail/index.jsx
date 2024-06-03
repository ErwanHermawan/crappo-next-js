// --core
import { useState } from "react";

// -- templates
import Default from "@templates/Default";

// -- states
import useStateHeader from "@states/header";

const ProductsDetail = (props) => {
	const { detail } = props;
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("productsDetail");
	}, []);

	return (
		<>
			<Default>
				<div className="pdetail">
					<div className="container">
						<div className="pdetail__inner">
							<div className="pdetail__img">
								<img src={detail.image} alt={detail.title} />
							</div>
							<div className="pdetail__txt">
								<p className="pdetail__cat">{detail.category}</p>
								<h1 className="pdetail__title">{detail.title}</h1>
								<p className="pdetail__rating">
									⭐{detail.rating.rate} ({detail.rating.count} rating)
								</p>
								<p className="pdetail__price">${detail.price}</p>
								<p className="pdetail__desc">{detail.description}</p>
							</div>
						</div>
					</div>
				</div>
			</Default>
		</>
	);
};

export default ProductsDetail;
