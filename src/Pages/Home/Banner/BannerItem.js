import React from 'react';
import './BannerItem.css'
const BannerItem = ({ slide }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image-grad '>
                <img src={image} alt="" className="w-full rounded-lg" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-16 md:left-24 top-1/4 md:top-1/3">
                <h1 className='text-3xl leading-0 md:text-6xl font-bold text-white md:leading-snug'>Affordable <br /> Price For Car  <br /> Servicing</h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-16 md:left-24 top-1/2  md:mt-14">
                <p className='text-sm pr-5 md:pr-0 text-white md:w-3/5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-16 md:left-24 top-2/3">
                <button className="btn btn-active mr-5 bg-orange-clr border-none hover:bg-orange-800">Discover More</button>
                <button className="btn btn-outline outline-white text-white hover:bg-white hover:text-black">Latest Project</button>

            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 right-10 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle border-none bg-slate-900 bg-opacity-40  mr-4">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle border-none bg-orange-clr bg-opacity-90 hover:bg-orange-clr">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;