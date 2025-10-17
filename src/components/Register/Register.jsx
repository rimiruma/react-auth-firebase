// import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router";
// import { auth } from "../../Fire?base/firebase.init";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";


const Register = () => {

    const {createUser} = use(AuthContext);
    
    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
        .then(result => {
            console.log(result.user); 
        })
        .catch(error => {
            console.log(error);
            
        })
    }

    return (
        <div className="py-20">
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-8">
                <h1 className="text-3xl font-bold text-center">Please Register!</h1>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input" placeholder="name" />
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4"><Link to="/login">Register</Link></button>
                        </fieldset>
                    </form>
                    <p className="">Already Have an account? Please <Link to="/login" className="text-blue-500 hover:text-blue-800">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;