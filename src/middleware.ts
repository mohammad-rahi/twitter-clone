import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res }, {
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY
    })

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // if user is signed in and the current path is /login redirect the user to /
    if (user && req.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/', req.url))
    }

    // if user is signed in and the current path is /register redirect the user to /
    if (user && req.nextUrl.pathname === '/register') {
        return NextResponse.redirect(new URL('/', req.url))
    }

    return res
}

export const config = {
    matcher: ['/', '/login', '/register'],
}