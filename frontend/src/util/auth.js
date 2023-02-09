export function getAuthToken() {
	const token = localStorage.getItem("token");
	console.log(token);
	return token;
}
