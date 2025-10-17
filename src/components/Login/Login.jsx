import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { auth } from "../../Firebase/firebase.init";

const Login = () => {

    const { signInUser, signInWithGoogle } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                event.target.reset();
                navigate(location.state || '/')

            })
            .catch(error => {
                console.log(error);

            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate(location?.state || '/')
            
        })
        .catch(error => {
            console.log(error);
            
        })
    }


    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-8 mt-20">
            <h1 className="text-3xl font-bold text-center">Please Login!</h1>
            <div className="card-body">
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
                <p className="">New To our website? Please <Link to="/register" className="text-blue-500 hover:text-blue-800">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;