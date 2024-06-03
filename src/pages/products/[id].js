import ENDPOINT from "@api/endPoint";
import httpRequest from "@api/httpRequest";

// -- modules
import ProductsDetail from "@modules/Products/Detail";

// -- SSR getStaticPaths
const getStaticPaths = async () => {
	const { data: productsData, error: productsError } = await httpRequest({
		method: "get",
		url: ENDPOINT.PRODUCTS,
	});

	const paths = productsData.map((val) => ({
		params: { id: String(val.id) },
	}));

	return { paths, fallback: false };
};

// -- SSR getStaticProps
const getStaticProps = async (req) => {
	const { params } = req;
	const { id: productId } = params;

	const { data: productDetail, error: productDetailError } = await httpRequest({
		method: "get",
		url: `${ENDPOINT.PRODUCTS}/${productId}`,
	});

	return {
		props: {
			detail: productDetail,
		},
	};
};

// ========================
// ProductsDetailPage
// ========================
const ProductsDetailPage = (props) => {
	return <ProductsDetail {...props} />;
};

export { getStaticPaths, getStaticProps };
export default ProductsDetailPage;
