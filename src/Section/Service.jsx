import React from 'react'
import { Element } from 'react-scroll'
export default function Service() {
  return (
    <div name="Services" className='bg-white  flex flex-col justify-center items-center text-black px-8 py-20'>
     <h1 className='text-[35px] text-orange-600 font-bold text-center my-8'>Our Services</h1>
     <p className='text-lg text-gray-600 text-center mb-8'>We offer a wide range of services to cater to all your needs.</p>
     <div className='grid grid-cols-3 grid-rows-2 mx-auto space-x-14 space-y-14  justify-between items-center '>
        <div className='flex flex-col text-center justify-center items-center p-2 w-full'>
            <img src="/Icon (1).png" alt="Service 1" className=' mx-auto pb-2 ' />
            <h2 className='text-xl text-[#0F38A1] m-2 font-semibold '>Building</h2>
            <p className='text-gray-600'>Last News About Homes Econemy in Taref Lorem consequatur unde optio aperiam laudantium, commodi eligendi nisi magni, dolor nam iure mollitia eos id quisquam. Corporis, animi.</p>
        </div>
          <div className='flex flex-col text-center justify-center items-center p-2 w-full'>
            <img src="/Icon (2).png" alt="Service 1" className=' mx-auto pb-2 ' />
            <h2 className='text-xl      text-[#0F38A1] font-semibold '>Jobs</h2>
        <p className='text-gray-600'>Last Jobs Posted in El-Taref Lorem consequatur unde optio aperiam laudantium, commodi eligendi nisi magni, dolor nam iure mollitia eos id quisquam. Corporis, animi..</p>
        </div>
           <div className='flex flex-col text-center justify-center items-center p-2 w-full'>
            <img src="/Icon (3).png" alt="Service 1" className=' mx-auto pb-2 ' />
            <h2 className='text-xl  text-[#0F38A1] font-semibold '>Info</h2>
            <p className='text-gray-600'>General Information About Tech Jobs Touris Lorem consequatur unde optio aperiam laudantium, commodi eligendi nisi magni, dolor nam iure mollitia eos id quisquam. Corporis, animi.</p>
        </div>
           <div className='flex flex-col text-center justify-center items-center p-2 w-full'>
            <img src="/Icon (4).png" alt="Service 1" className=' mx-auto pb-2 ' />
            <h2 className='text-xl  text-[#0F38A1]font-semibold '>Econemy</h2>
            <p className='text-gray-600'>Iformation About The Econemy Situation of El Taref 
Lorem consequatur unde optio aperiam laudantium, commodi eligendi nisi magni, dolor nam iure mollitia eos id quisquam. Corporis, animi.
            </p>
        </div>
           <div className='flex flex-col text-center justify-center items-center p-2 w-full'>
            <img src="/Icon (5).png" alt="Service 1" className=' mx-auto pb-2 ' />
            <h2 className='text-xl  text-[#0F38A1] font-semibold '>Tourist</h2>
            <p className='text-gray-600'>All About Our Willay Tourrist News 
Lorem consequatur unde optio aperiam laudantium, commodi eligendi nisi magni, dolor nam iure mollitia eos id quisquam. Corporis, animi.
            </p>
        </div>
            <div className='flex flex-col text-center justify-center items-center p-2 w-full'>
            <img src="/Icon (4).png" alt="Service 1" className=' mx-auto pb-2 ' />
            <h2 className='text-xl  text-[#0F38A1] font-semibold '>News</h2>
            <p className='text-gray-600'>News Day by Day of Taref 
Lorem consequatur unde optio aperiam laudantium, commodi eligendi nisi magni, dolor nam iure mollitia eos id quisquam. Corporis, animi.            </p>
        </div>
        </div>
    </div>
  )
}
