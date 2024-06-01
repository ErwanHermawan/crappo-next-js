import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleSubmit = async (formData) => {
	const { data, error } = await httpRequest({
		method: "post",
		url: ENDPOINT.SUBSCRIBE,
		data: {
			email: formData.email,
		},
	});

	return {
		data,
		error,
	};
};

const subscribeModel = {
	submit: handleSubmit,
};

export default subscribeModel;
