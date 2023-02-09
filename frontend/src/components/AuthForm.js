import {
	Form,
	Link,
	useActionData,
	useNavigation,
	useSearchParams,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
	const [searchParams, setSearchParams] = useSearchParams();
	const isLogin = searchParams.get("mode") === "login";

	const data = useActionData();
	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";

	return (
		<>
			<Form method="post" className={classes.form}>
				<h1>{isLogin ? "Log in" : "Create a new user"}</h1>
				{isSubmitting && <p>Submitting</p>}
				{data && data.errors && (
					<ul style={{ color: "red" }}>
						{Object.values(data.errors).map((error) => (
							<li key={Math.random()}>{error}</li>
						))}
					</ul>
				)}
				{data && data.message && <p>{data.message}</p>}
				<p>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" required />
				</p>
				<p>
					<label htmlFor="image">Password</label>
					<input id="password" type="password" name="password" required />
				</p>
				<div className={classes.actions}>
					<Link to={`?mode=${isLogin ? "signup" : "login"}`}>
						{isLogin ? "Create new user" : "Login"}
					</Link>
					<button disabled={isSubmitting}>
						{isSubmitting ? "Submitting..." : "Save"}
					</button>
				</div>
			</Form>
		</>
	);
}

export default AuthForm;
