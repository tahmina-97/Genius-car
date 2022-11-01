import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-100">
            <div className=" grid grid-cols-1 md:grid-cols-2 justify-between my-20 mb-32">
                <div className='relative mb-28 md:mb-0 mx-5 md:mx-0'>
                    <img src={person} alt="" className="w-[370px] md:w-[460px] h-[400px] md:h-[473px]  object-cover rounded-xl" />
                    <img src={parts} alt="" className="absolute left-52 top-56 w-60 md:w-80 h-64 md:h-80 border-8 border-white object-cover rounded-lg " />

                </div>


                <div className="flex flex-col justify-center px-8 text-center lg:text-left">
                    <p className='text-xl font-inter text-orange-clr font-bold mb-3'>About Us</p>
                    <h1 className="text-5xl font-bold text-black-bg font-inter">We are qualified  <br />& of experience <br /> in this field
                    </h1>
                    <p className="mt-6 mb-8 text-gray-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="mb-5 text-gray-text">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>

                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button className="btn btn-active mr-5 bg-orange-clr border-none hover:bg-orange-800">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;