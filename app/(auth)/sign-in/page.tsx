'use client'
import AuthForm from '@/components/auth/auth-form'
import { signInSchema } from '@/types/signin-types'
import React from 'react'

const page = () => {
  const onSubmit = ()=>{}
  return (
    <div>
     <AuthForm type={'SIGN_IN'} schema={signInSchema} defaultValues={{
      email: '',
      password: ''
     }} onSubmit={onSubmit} />
    </div>
  )
}

export default page
