'use client';
import React from 'react'

const EventHandling = () => {
    return (
        <div>

            <div>
                <h1 className='font-bold text-center text-3xl'>Event Handling</h1>
                <button
                    onClick={() => { alert('button was clicked'); }}
                    className='border p-3 bg-gray-300'>
                    Submit
                </button>

                <input 
                    onChange={() => {console.log('value was changed'); }}
                    className='border p-3 w-full mt-5'
                    type="text" />

                <input 
                    type="text"
                    onChange={(e) => { console.log(e.target.valaue); }}
                    className='border p-3 w-full mt-5' />

                <input 
                    className='mt-5' 
                    onChange={() => { console.log(e.target.files); }} 
                    type="file" />
            </div>

        </div>
    )
}

export default EventHandling; 