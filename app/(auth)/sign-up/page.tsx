'use client'
import AuthForm from '@/components/auth/auth-form'
import { signUpSchema } from '@/types/signup-type'
import React from 'react'
import  * as z from 'zod'

const page = () => {
  const onSubmit = (values: z.infer<typeof signUpSchema>)=>{
    console.log(values) 
  }
  return (
    <div>
       <AuthForm type={'SIGN_IN'} schema={signUpSchema} defaultValues={{
      email: '',
      password: '',
      fullName: '',
      universityId:0,
      universityCard: ''
     }} onSubmit={onSubmit } />
    </div>
  )
}

export default page
