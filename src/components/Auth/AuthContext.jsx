"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const AuthContext = ({ session, children }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default AuthContext