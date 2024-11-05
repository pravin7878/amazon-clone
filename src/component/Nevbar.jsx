import React from 'react'
import { CiLocationOn, CiSearch } from 'react-icons/ci'

// import asits
import logo from "../assets/amazon_logo.png"
import logolight from "../assets/amazon_logo-lite.png"
import CustomSelect from '../utils/CustomeSelect'


export const Nevbar = () => {
    return (
        <div className=' bg-[#131921]  text-white flex justify-between'>
            <div className='w-[30%] flex justify-between gap-1'>
                {/* logo for md screen*/}
                <span className='flex w-[30%] items-center'>
                    <div className='w-[80%] m-auto flex justify-center items-center'>
                        <span className='w-[90%] m-auto'>
                            <img src={logolight} alt="amazon.in" />
                        </span>
                        <span className='w-[10%] mb-2'>.in</span>
                    </div>
                </span>

                <span className='w-[65%]'>
                    <p>Delivering to Jaipur 302001</p>
                    <span className='flex font-bold'>
                        <CiLocationOn size={30} />
                        <h1>Update location</h1>
                    </span>
                </span>
            </div>
            <div className='w-[30%] flex text-black border-2 border-red-500 m-1.5'>
                <select className='w-[25%] border-2 border-green-400'>
                    <option value="All">All</option>
                    <option value="All">Catagory</option>
                    <option value="All"></option>
                </select>
                <input className='w-[50%]' type="search" />
                <span className='w-[25%]'><CiSearch /></span>
            </div>
            <div className='w-[30%]'>
                <CustomSelect/>
            </div>
        </div>
    )
}
