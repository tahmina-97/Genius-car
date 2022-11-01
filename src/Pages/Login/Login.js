import React from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {
    return (
        <div className='flex flex-col-reverse md:flex md:flex-row justify-center gap-10'>
            <div className='mx-10'>
                <img src={img} alt="" />
            </div>
            <div className="w-full border-2 border-light-text ml-4  max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block dark:text-gray-400">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-center text-xs dark:text-gray-400">
                            <a href="#">Forgot Password?</a>

                        </div>
                    </div>
                    <button className="block w-full p-3 text-center btn btn-square bg-orange-clr border-0 
                    hover:bg-orange-600 rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
                </form>
                <div class="relative my-4">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 text-neutral-600 bg-white"> Or Sign In with </span>
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaFacebookF className='text-blue-900'></FaFacebookF>
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <FcGoogle></FcGoogle>
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FaGithub></FaGithub>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link className='text-orange-clr font-bold' to='/register'> Sign Up</Link>
                </p>
            </div>
        </div >
    );
};

export default Login;