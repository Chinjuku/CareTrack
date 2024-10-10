'use client'

import React, { createContext, useContext } from 'react'
import { User } from '@/types/user'

const UserContext = createContext<User | null>(null)

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export function UserProvider({ user, children }: { user: User | null; children: React.ReactNode }) {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}