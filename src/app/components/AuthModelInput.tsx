import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

export default function AuthModelInout({register, errors}: {
    register : UseFormRegister<FieldValues>, 
    errors: FieldErrors<FieldValues>
}) {
    
    return (
        <div>
            <div className="my-3 flex justify-between text-sm">
                <input
                    type='text'
                    className={`border ${errors.firstName ? "border-red-500" : ""} rounded p-2 py-3 w-[49%] `}
                    placeholder="First Name"
                    {...register("firstName", {required:true, pattern: /^[a-zA-Z ]+$/})}
                />
                <input
                    type='text'
                    className={`border ${errors.lastName ? "border-red-500" : ""} rounded p-2 py-3 w-[49%] `}
                    placeholder="Last Name"
                    {...register("lastName", {required:true, pattern: /^[a-zA-Z ]+$/})}
                />
            </div>
            <div className="my-3 flex text-sm w-full">
                <input
                    type='email'
                    className={`border ${errors.email ? "border-red-500" : ""} rounded p-2 py-3 w-full `}
                    placeholder="Your Email"
                    {...register("email", {required:true, pattern: /^\S+@\S+$/i})}
                />
            </div>
            <div className="my-3 flex justify-between text-sm">
                <input
                    type='text'
                    className={`border ${errors.city ? "border-red-500" : ""} rounded p-2 py-3 w-[49%] `}
                    placeholder="City"
                    {...register("city", {required:true, pattern: /^[a-zA-Z ]+$/})}
                />
                <input
                    type='number'
                    className={`border ${errors.phoneNumber ? "border-red-500" : ""} rounded p-2 py-3 w-[49%] `}
                    placeholder="Phone Number"
                    {...register("phoneNumber", {required:true, pattern: /^[0-9+-]+$/, maxLength: 10, minLength: 10})}
                />
            </div>
            <div className="my-3 flex text-sm w-full">
                <input
                    type='password'
                    className="border rounded p-2 py-3 w-full"
                    placeholder="Password"
                    {...register("password", {required:true})}
                />
            </div>
        </div>
    )
}
