import Link from 'next/link'
import React from 'react'

export default function FeedHeader() {
    return (
        <div className='flex items-center border-b border-gray-200 sticky top-0 bg-white/60 backdrop-blur-md z-10'>
            <ul className='flex items-center flex-1'>
                <li className='flex-1'>
                    <Link href="/" className='hover:bg-gray-200 transition p-3 block text-center font-semibold text-[rgb(15,20,25)]'>
                        For you
                    </Link>
                </li>
                <li className='flex-1'>
                    <Link href="/following" className='hover:bg-gray-200 transition p-3 block text-center font-semibold text-[rgb(15,20,25)]'>
                        Following
                    </Link>
                </li>
            </ul>

            <div className='aspect-square w-12 flex items-center justify-center'>
                <div className='p-2 hover:bg-gray-200 transition rounded-full'>
                    <div className='w-5 h-5'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "rgb(15, 20, 25)" }}><g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></g></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
