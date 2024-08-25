export const register = async (params) =>
	setTimeout(() => {
		console.log(params, "register");
		return params;
	}, 1000);
