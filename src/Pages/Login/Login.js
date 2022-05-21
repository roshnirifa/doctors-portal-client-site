import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let signInError;

    if (gError || error) {
        signInError = <p className='text-red-500'>
            {
                error?.message
                || gError?.message
            } </p>
    }
    if (gLoading || loading) {
        return <Loading></Loading>;
    }

    if (gUser) {
        return (
            navigate(from, { replace: true })

        );
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex h-screen justify-center items-center' >
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mx-auto">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "email is requried"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'provide a valid email' // JS only: <p>error message</p> TS only support string
                                }
                            })}
                                type="email"
                                placeholder="email"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500"> {errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500"> {errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is requried"
                                },

                                minLength: {
                                    value: 6,
                                    message: 'must be 6 characters longer' // JS only: <p>error message</p> TS only support string
                                }

                            })}
                                type="password"
                                placeholder="password"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500"> {errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500"> {errors.password.message}</span>}

                            </label>
                        </div>
                        {
                            signInError
                        }
                        <input className='btn w-full max-w-xs' type="submit" value='Login' />
                        <p className='mt-3'>New to Doctors Portal? <span className='text-primary'><Link to='/signup'>Create New Account</Link></span></p>
                    </form>


                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;