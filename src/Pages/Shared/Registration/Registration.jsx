import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvidee";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Registration = () => {
    const {createUser, user} = useAuth()

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {email, password} =data
        console.log(email, password);
        createUser(email, password)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full name" className="input input-bordered" {...register("fullName")}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" {...register("email")}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" placeholder="image url" className="input input-bordered" {...register("imgUrl")}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password")}/>
                        </div>
                        <div className="form-control mt-6 p-0">
                            <button className="btn btn-neutral">Register</button>
                        </div>
                        <label className="label">
                            Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                        </label>
                        {/* <SocialLogin /> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;