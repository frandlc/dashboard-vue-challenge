export const login = async (params) =>
	setTimeout(() => {
		console.log(params, "login");
		return params.email;
	}, 1000);
