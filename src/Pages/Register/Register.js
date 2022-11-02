import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setError('');
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
                console.error('error', error);
            })
    }

    // submit button handle
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                handleUpdateUserProfile(name);
                form.reset()
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.error('error', error);
            })
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(() => {

            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.error('error', error);
            })
    }


    return (
        <div className='md:flex justify-center gap-10'>
            <div className='mx-6'>
                <img src={img} alt="" />
            </div>
            <div className="w-full border-2 border-light-text  max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up </h1>

                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="name" className="block dark:text-gray-400">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your name" className="w-full px-2 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" id="email" placeholder="Your email" className="w-full px-2 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Confirm Password</label>
                        <input type="password" name="password" id="password" placeholder="Your password" className="w-full px-2 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <button className="block w-full p-3 text-center btn btn-square bg-orange-clr border-0 
                hover:bg-orange-600 rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign up</button>

                    <p className='text-center text-red-600 font-semibold'><small>{error}</small> </p>
                </form>

                <div class="relative my-4">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 text-neutral-600 bg-white"> Or Sign Up with </span>
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaFacebookF className='text-blue-900'></FaFacebookF>
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <FcGoogle onClick={handleGoogleSignIn}></FcGoogle>
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FaGithub></FaGithub>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link className='text-orange-clr font-bold' to='/login'> Login</Link>
                </p>
            </div>
        </div >
    );
};

export default Register;