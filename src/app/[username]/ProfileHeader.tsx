import React from 'react'

export default function ProfileHeader() {
    return (
        <div className='flex items-center gap-8 px-2 py-[2px] sticky top-0 bg-white/60 backdrop-blur-md z-10'>
            <div className='w-9 h-9 cursor-pointer transition rounded-full flex items-center justify-center hover:bg-gray-200'>
                <div className='w-5 h-5'>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
                </div>
            </div>

            <div>
                <h1 className='text-base font-bold'>Display Name</h1>
                <p className='text-gray-500 text-sm'>465 posts</p>
            </div>
        </div>
    )
}
