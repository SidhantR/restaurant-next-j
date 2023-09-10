export default function AuthModelInout() {
    return (
        <div>
            <div className="my-3 flex justify-between text-sm">
                <input
                    type='text'
                    className="boredr rounded p-2 py-3 w-[49%] "
                    placeholder="First Name"
                />
                <input
                    type='text'
                    className="boredr rounded p-2 py-3 w-[49%] "
                    placeholder="Last Name"
                />
            </div>
            <div className="my-3 flex text-sm w-full">
                <input
                    type='email'
                    className="boredr rounded p-2 py-3 w-full"
                    placeholder="Your Email"
                />
            </div>
            <div className="my-3 flex justify-between text-sm">
                <input
                    type='text'
                    className="boredr rounded p-2 py-3 w-[49%] "
                    placeholder="City"
                />
                <input
                    type='number'
                    className="boredr rounded p-2 py-3 w-[49%] "
                    placeholder="Phone Number"
                />
            </div>
            <div className="my-3 flex text-sm w-full">
                <input
                    type='password'
                    className="boredr rounded p-2 py-3 w-full"
                    placeholder="Password"
                />
            </div>
        </div>
    )
}
