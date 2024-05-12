import React from 'react';
import Academic from './Academic/Academic';
import Experience from './Experience/Experience';

const Journey = () => {
    return (
        <section className='max-w-screen-xl mx-auto py-8 pb-12 min-h-screen'>
            <h1 className="font-bold mb-2 text-center text-transparent lg:text-6xl text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                My Learning Journey
            </h1>
        
            <section  className='text-white  justify-center flex flex-col lg:flex-row px-2 gap-8 lg:gap-20 mt-8 md:mt-12 lg:mt-14'>
                <Academic></Academic>
                <Experience></Experience>
            </section>
        </section>
    );
};

export default Journey;