"use client"
import React, { useActionState } from "react"
import Form from 'next/form'
import { Loader2 } from "lucide-react"

const initialState = {
    message: '',
}

type SignInProps = {
    action: (presState: any, formData: FormData) => Promise<{ message: string } | undefined>
}


const SignIn = ({ action }: SignInProps) => {

    const [state, formAction, isPending] = useActionState(action, initialState)

    return (
        <Form action={formAction} className="max-w-md mx-auto my-16 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-2">
                Welcome Back!
            </h1>
            <p className="text-center text-sm text-rose-600 font-semibold mb-2">
                🔥 MEMBER EXCLUSIVE 🔥
            </p>
            <p className="text-center text-sm text-gray-600  mb-6">
                sign in to access your exclusive deals.
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
                    <p className="text-xs text-gray-500 mb-2"> ✨ Member saves an extra 15% on all orders!</p>
                    <p className="text-xs text-gray-500 mb-4"> 🕒 Plus get free shipping on orders over $15! </p>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isPending}
                    className={` w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-700 transition-colors font-medium flex items-center justify-center gap-2 cursor-pointer ${isPending ? 'cursor-not-allowed' : ''}`}
                >
                    {isPending ? (
                        <React.Fragment>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            SIGNING IN...
                        </React.Fragment>
                    ) : (
                        'SIGN IN'
                    )}
                </button>
                {state?.message && state.message.length > 0 && (
                    <p className="text-center text-sm text-red-600">
                        {state.message}
                    </p>
                )}
            </div>
        </Form>
    )
}

export default SignIn