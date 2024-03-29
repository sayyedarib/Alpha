import React from 'react'
import axios from 'axios'

const Herosection = () => {
    return (
        <div className='bg-white dark:bg-gray-800 flex justify-center items-center'>
            <div className="relative isolate px-6 pt-14 lg:px-8 flex justify-center items-center">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0edae5] to-[#ea7907] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 flex justify-between items-center">
                    <div className="text-left max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight text-yellow-100 sm:text-6xl">
                            Welcome to Alpha Gaming
                        </h1>
                        <p className="mt-5 text-lg leading-8 text-gray-200">
                            A physical online gaming interface.
                        </p>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-200">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="https://www.templerun.ee/"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    try {
                                        const response = await axios.post('/run_model');
                                        console.log(response.data);
                                    } catch (error) {
                                        console.error(error);
                                    }
                                }}
                                className="rounded-md bg-yellow-200 w-full text-center px-3.5 py-2.5 text-lg font-semibold shadow-sm hover:bg-yellow-500 hover:scale-105 duration-500 text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100 cursor-pointer"
                            >
                                Play now
                            </a>
                        </div>
                    </div>
                    <img className='w-1/3 hover:scale-105 duration-500' src='/images/hero_logo.png' alt='' />
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#7ef488] to-[#aaf210] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Herosection
