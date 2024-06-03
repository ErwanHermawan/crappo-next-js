// --core
import { useState } from "react";
import Link from "next/link";

// -- templates
import Default from "@templates/Default";

// api
import ENDPOINT from "@api/endPoint";
import httpRequest from "@api/httpRequest";

// -- states
import useStateHeader from "@states/header";

const Products = (props) => {
	const { setMenu } = useStateHeader();

	useState(() => {
		setMenu("products");
	}, []);

	const {
		ready,
		data: productData,
		error,
	} = httpRequest.firstLoad({
		method: "GET",
		url: ENDPOINT.PRODUCTS,
	});

	return (
		<>
			<Default>
				<div className="product">
					<div className="container">
						<div className="product__list">
							{productData !== null &&
								productData.map((val, idx) => (
									<div className="product__item" key={idx}>
										<div className="product__box">
											<Link
												href={`/products/${val.id}`}
												className="product__link"
											>
												{val.title}
											</Link>
											<div className="product__img">
												<img src={val.image} alt={val.title} />
											</div>
											<div className="product__txt">
												<h6 className="product__title">{val.title}</h6>
												<p className="product__price">${val.price}</p>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
				;
			</Default>
		</>
	);
};

export default Products;
