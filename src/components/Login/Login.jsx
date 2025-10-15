import { Link } from "react-router";

const Login = () => {
    return (
     <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-8 mt-20">
                    <h1 className="text-3xl font-bold text-center">Please Login!</h1>
                    <div className="card-body">
                        <form>
                            <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        </form>
                        <p className="">New To our website? Please <Link to="/register" className="text-blue-500 hover:text-blue-800">Register</Link></p>
                    </div>
                </div>
    );
};

export default Login;