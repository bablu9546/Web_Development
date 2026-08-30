import React from 'react';
import "../index.css";
import pharma from "../assets/pharma.avif";
import pet from "../assets/pet.avif";
import baby from "../assets/baby.avif";

const C2 = () => {
    return (
        <div className='flex flex-wrap gap-4'>
              <div className='flex flex-wrap gap-4'>
                <img src={pharma} alt="human_error" className='w-88 h-55 ml-5 max-w-full max-h-full' />
                <img src={pet} alt="human_error"  className='w-88 h-55 ml-5 max-w-full max-h-full' />
                <img src={baby} alt="human_error" className='w-88 h-55 ml-5 max-w-full max-h-full' />
              </div>
        </div>
    )
}

export default C2;