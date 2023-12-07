import { UserProfile } from '@/lib/types';
import Link from 'next/link';
import React from 'react'

export default function ProfileInfo({userProfile}: {userProfile: UserProfile| null}) {

  return (
    <div className='p-4 space-y-4'>
      <div>
        <p className='text-xl font-bold'>{userProfile?.name || 'User Name'}</p>
        <p className='text-gray-500 text-sm'>@{userProfile?.username}</p>
      </div>
      <div>
        <p className='text-sm'>{userProfile?.bio || 'User Bio'}</p>
      </div>
      <div>
        <ul className='flex flex-wrap gap-4 text-gray-500 text-sm'>
          <li className='flex items-center gap-1'>
            <p className='w-5 h-5'>
              <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z"></path></g></svg>
            </p>
            <p>Category</p>
          </li>
          <li className='flex items-center gap-1'>
            <p className='w-5 h-5'>
              <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path></g></svg>
            </p>
            <p>{userProfile?.location || "Location"}</p>
          </li>
          <li className='flex items-center gap-1'>
            <p className='w-5 h-5'>
              <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path></g></svg>
            </p>
            <p>{
              userProfile?.website ? <Link href={userProfile?.website} target='_blank' className='hover:underline transition text-primary'>{userProfile?.website.split("://")[1]}</Link> : "Website URL"}</p>
          </li>
          <li className='flex items-center gap-1'>
            <p className='w-5 h-5'>
              <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></g></svg>
            </p>
            <p>Joined {userProfile?.created_at?.split("T")[0]}</p>
          </li>
        </ul>
      </div>
      <div className='text-sm flex items-center gap-4'>
        <div className='flex items-center gap-1 hover:underline cursor-pointer'>
          <p className='font-bold'>244</p>
          <p className='text-gray-500'>Following</p>
        </div>
        <div className='flex items-center gap-1 hover:underline cursor-pointer'>
          <p className='font-bold'>556</p>
          <p className='text-gray-500'>Followers</p>
        </div>
      </div>
    </div>
  )
}
