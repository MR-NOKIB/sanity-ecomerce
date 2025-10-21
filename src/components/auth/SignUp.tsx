"use client"
import React, { useActionState } from "react"
import Form from 'next/form'
import { Loader2 } from "lucide-react"

const initialState = {
    message: '',
}

type signUpProps = {
    action: (presState: any, formData: FormData) => Promise<{ message: string } | undefined>
}


const SignUp = ({ action }: signUpProps) => {

    const [state, formAction, isPending] = useActionState(action, initialState)

    return (
        <Form action={formAction} className="max-w-md mx-auto my-16 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-2">
                Join The Deal Revolution!
            </h1>
            <p className="text-center text-sm text-rose-600 font-semibold mb-2">
                🔥 LIMITED TIME OFFER 🔥
            </p>
            <p className="text-center text-sm text-gray-600  mb-6">
                sign up now and get 90% OFF your first order!
            </p>


            <div className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-shadow-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:border-transparent transition-colors"
                        placeholder="Enter Your Email"
                    />
                </div>

                {/* Password */}
                <div className="">
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-shadow-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="password"
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:border-transparent transition-colors"
                            placeholder="Create a password"
                        />
                    </div>
                </div>

                {/* Copywriting */}
                <div className=" text-center">
                    <p className="text-xs text-gray-500 mb-2"> ✨ Only 127 welcome bonus packages remaining!</p>
                    <p className="text-xs text-gray-500 mb-4"> 🕒 Offer expires in 13:45 </p>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isPending}
                    className={` w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-700 transition-colors font-medium flex items-center justify-center gap-2 ${isPending ? 'cursor-not-allowed' : ''}`}
                >
                    {isPending ? (
                        <React.Fragment>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            CREATING ACCOUNT...
                        </React.Fragment>
                    ) : (
                        'CREATE ACCOUNT'
                    )}
                </button>
            </div>
        </Form>
    )
}

export default SignUp