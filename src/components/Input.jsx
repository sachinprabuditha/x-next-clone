"use client";

import { useSession } from 'next-auth/react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import React from 'react'

export default function Input() {
    const { data: session } = useSession();

    if (!session) {
        return (
            null
        )
    }
  return (
    <div className='flex border-b border-gray-200 p-3 space-x-3 w-full'>
        <img src={session.user.image} alt='user-img' className='w-11 h-11 rounded-full cursor-pointer hover:brightness-95'/>
        <div className='w-full divide-y divide-gray-200'>
            <textarea className='w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700' placeholder='Whats happening?'></textarea>
            <div className='flex justify-between items-center pt-2.5'>
                    <HiOutlinePhotograph className='h-10 w-10 text-sky-500 p-2 hover:bg-sky-100 rounded-full cursor-pointer'/>
                    <button disabled className='bg-blue-400 text-white rounded-full hover:brightness-95 disabled:opacity-50 px-4 py-1.5 font-bold shadow-md'>Post</button>
            </div>
        </div>
    </div>
  )
}
