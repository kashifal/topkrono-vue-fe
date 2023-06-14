<template>
    <div class="">
        <Navbar />
        <div class="w-full bg-cover" :style="{
            'background-image': 'url(' + myImage + ')',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
        }">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
               
                <section class="py-44">
                    <div class="space-y-6 w-auto md:w-1/4 px-4">
                        <h3 class="text-5xl font-bold text-[#52575a]">
                            Electrical made simple
                        </h3>
                        <p class="text-lg text-gray-500">
                            Quality repairs and replacements done right the first time.
                        </p>
                        <button class="bg-[#224386] py-5 px-8 font-medium text-white whitespace-nowrap rounded">
                            Schedule now
                        </button>
                    </div>
                </section>
            </div>
        </div>
        <!-- section appointment -->
        <div class="mx-auto max-w-7xl py-16 px-2 sm:px-6 lg:px-8">
            <section class="my-24">
                <div class="flex flex-wrap gap-4 items-center justify-center">
                    <div class="">
                        <h3 class="text-xl font-semibold text-gray-700">
                            Book an appointment today.
                        </h3>
                        <p class="text-gray-700">Where can we help?</p>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                        <router-link
                        to="/plumbin"
                        
                        href="">
                            <div
                                class="text-gray-600 border border-gray-300 py-8 px-4 flex flex-col justify-center items-center h-full hover:text-blue-800 hover:border-blue-800">

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M20.916 9.564a.998.998 0 0 0-.513-1.316L7.328 2.492c-.995-.438-2.22.051-2.645 1.042l-2.21 5.154a2.001 2.001 0 0 0 1.052 2.624L9.563 13.9L8.323 17H4v-3H2v8h2v-3h4.323c.823 0 1.552-.494 1.856-1.258l1.222-3.054l5.205 2.23a1 1 0 0 0 1.31-.517l.312-.71l1.701.68l2-5l-1.536-.613l.523-1.194zm-4.434 5.126L4.313 9.475l2.208-5.152l12.162 5.354l-2.201 5.013z" />
                                </svg>
                                <p class="whitespace-nowrap">Wireless security camera</p>
                            </div>
                        </router-link>
                        <a href="">
                            <div
                                class="text-gray-600 border border-gray-300 py-8 px-4 flex flex-col justify-center items-center h-full hover:text-blue-800 hover:border-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="m22.05 16.7l-1.4-1.4q.65-.65 1-1.513T22 12q0-.925-.35-1.788t-1-1.512l1.4-1.4q.95.95 1.45 2.15T24 12q0 1.35-.5 2.55t-1.45 2.15Zm-2.675-2l-1.425-1.4q.275-.275.413-.6t.137-.7q0-.375-.138-.7t-.412-.6l1.425-1.4q.55.55.838 1.238T20.5 12q0 .775-.288 1.463t-.837 1.237ZM12 22q-2.075 0-3.538-1.463T7 17V7q0-2.075 1.463-3.538T12 2q2.075 0 3.538 1.463T17 7v10q0 2.075-1.463 3.538T12 22Zm0-2q1.25 0 2.125-.875T15 17V7q0-1.25-.875-2.125T12 4q-1.25 0-2.125.875T9 7v10q0 1.25.875 2.125T12 20Zm0-2q.825 0 1.413-.588T14 16q0-.825-.588-1.413T12 14q-.825 0-1.413.588T10 16q0 .825.588 1.413T12 18Zm0-1q-.425 0-.713-.288T11 16q0-.425.288-.713T12 15q.425 0 .713.288T13 16q0 .425-.288.713T12 17Zm0-7q.825 0 1.413-.588T14 8q0-.825-.588-1.413T12 6q-.825 0-1.413.588T10 8q0 .825.588 1.413T12 10Zm0 2Z" />
                                </svg>
                                <p>Smart Door Bell</p>
                            </div>
                        </a>
                        <a href="">
                            <div
                                class="text-gray-600 border border-gray-300 py-8 px-4 flex flex-col justify-center items-center h-full hover:text-blue-800 hover:border-blue-800 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="m9.95 10.225l-2.15 3.8q-.125.2-.05.4t.275.325q.2.1.388.05t.312-.25l2.375-4.2q.025-.05.075-.25v-.475q0-.2-.163-.35t-.362-.15H7.8q-.2 0-.35.15t-.15.35q0 .2.163.363t.362.162H9.9l.05.075ZM14.35 15q1.125 0 1.763-.862T16.75 12q0-1.275-.65-2.138T14.35 9q-1.125 0-1.762.863T11.95 12q0 1.275.638 2.138T14.35 15Zm0-1.025q-.65 0-.975-.587T13.05 12q0-.6.275-1.288t1.025-.687q.75 0 1.025.688T15.65 12q0 .8-.325 1.388t-.975.587ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" />
                                </svg>
                                <p>Smart Thermostat</p>
                            </div>
                        </a>
                        <a href="">
                            <div
                                class="text-gray-600 border border-gray-300 py-8 px-4 flex flex-col justify-center items-center h-full hover:text-blue-800 hover:border-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
                                        <path
                                            d="M21 12a46.819 46.819 0 0 1-.288 5.22l-.017.154a4.838 4.838 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a24.88 24.88 0 0 1-5.169 0a51.167 51.167 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a46.932 46.932 0 0 1 0-10.689l.016-.137a4.833 4.833 0 0 1 3.918-4.197l.215-.04a24.736 24.736 0 0 1 9.091 0l.323.06a4.701 4.701 0 0 1 3.81 4.067c.056.483.106.967.148 1.452" />
                                        <path d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6" />
                                    </g>
                                </svg>
                                <p>Smart Speaker hub</p>
                            </div>
                        </a>
                        <a href="">
                            <div
                                class="text-gray-600 border border-gray-300 py-8 px-4 flex flex-col justify-center items-center h-full hover:text-blue-800 hover:border-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M16 11h2v2h-2v-2m-4-8h7a2 2 0 0 1 2 2v14h1v2H2v-2h8V5a2 2 0 0 1 2-2m0 2v14h7V5M6.2 5H2.8v-.5a1.7 1.7 0 0 1 3.4 0M7 5v-.5a2.5 2.5 0 0 0-5 0V5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" />
                                </svg>
                                <p>Smart Door lock</p>
                            </div>
                        </a>
                        <a href="">
                            <div
                                class="text-gray-600 border border-gray-300 py-8 px-4 flex flex-col justify-center items-center h-full hover:text-blue-800 hover:border-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                                            d="M2 14v2c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-4c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6H8c-2.828 0-4.243 0-5.121.879c-.642.641-.815 1.568-.862 3.121M9 2l3 3.5L15 2m1 4v4m0 12v-8" />
                                        <path fill="currentColor"
                                            d="M20 16a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm0-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z" />
                                    </g>
                                </svg>
                                <p>Home Theater Device</p>
                            </div>

                        </a>
                        <a href="">
                            <div
                                class="text-gray-600 border border-gray-300 py-8 px-4 flex flex-col justify-center items-center h-full hover:text-blue-800 hover:border-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path
                                            d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                                        <path fill="currentColor"
                                            d="M12 9a1 1 0 0 1 1 1v4h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h6v-4a1 1 0 0 1 1-1ZM6.662 3.959A1 1 0 0 1 6.75 5.37A6.97 6.97 0 0 0 5 10c0 .297.018.59.054.876a1 1 0 0 1-1.984.248A9.079 9.079 0 0 1 3 10a8.97 8.97 0 0 1 2.25-5.953a1 1 0 0 1 1.412-.088Zm12.088.088A8.97 8.97 0 0 1 21 10c0 .38-.024.755-.07 1.124a1 1 0 1 1-1.984-.248c.035-.286.054-.579.054-.876a6.97 6.97 0 0 0-1.75-4.63a1 1 0 1 1 1.5-1.323ZM9.662 6.604a1 1 0 0 1 .088 1.412a2.985 2.985 0 0 0-.727 2.36a1 1 0 0 1-1.984.248A4.985 4.985 0 0 1 8.25 6.693a1 1 0 0 1 1.41-.089Zm6.088.088a4.984 4.984 0 0 1 1.211 3.932a1 1 0 0 1-1.984-.248a2.985 2.985 0 0 0-.726-2.36a1 1 0 1 1 1.499-1.324Z" />
                                    </g>
                                </svg>
                                <p>WIFI connevtion setup</p>
                            </div>


                        </a>

                    </div>
                </div>
            </section>
            <section class="py-24">
                <div class="grid grid-cols-1 md:grid-cols-2 space-y-6">
                    <div class="">
                        <img :src="infoImage" alt="" />
                    </div>
                    <div class="space-y-8 px-4 md:px-32">
                        <div class="flex gap-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="cyan" class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clip-rule="evenodd" />
                            </svg>

                            <div class="min-w-0 flex-auto">
                                <p class="font-semibold leading-6 text-gray-900">
                                    No hidden fees
                                </p>
                                <p class="mt-1 truncate text-sm leading-5 text-gray-500">
                                    No emergency fee, no weekend fee.
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="cyan" class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clip-rule="evenodd" />
                            </svg>

                            <div class="min-w-0 flex-auto">
                                <p class="font-semibold leading-6 text-gray-900">
                                    On time, every time
                                </p>
                                <p class="mt-1 truncate text-sm leading-5 text-gray-500">
                                    We honor our arrival windows and text you ETA updates.
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="cyan" class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clip-rule="evenodd" />
                            </svg>

                            <div class="min-w-0 flex-auto">
                                <p class="font-semibold leading-6 text-gray-900">Risk-free</p>
                                <p class="mt-1 truncate text-sm leading-5 text-gray-500">
                                    We don't start working until you approve our quote.
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="cyan" class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clip-rule="evenodd" />
                            </svg>

                            <div class="min-w-0 flex-auto">
                                <p class="font-semibold leading-6 text-gray-900">
                                    No mess. No stress.
                                </p>
                                <p class="mt-1 truncate text-sm leading-5 text-gray-500">
                                    We leave your home cleaner than we found it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="my-24">
                <!-- section for caresol -->
            </section>
            <section class="my-12">
                <div class="border flex flex-wrap items-center justify-between">
                    <div class="space-y-6 w-33% py-10 px-16">
                        <h3 class="text-2xl font-bold text-[#52575a]">
                            Ready to getstarted?
                        </h3>
                        <p class="text-sm text-gray-500">
                            Quality repairs and replacements done right the first time.
                        </p>
                        <button class="bg-[#224386] py-5 px-8 font-medium text-white whitespace-nowrap rounded">
                            Schedule now
                        </button>
                    </div>
                    <div class="w-66%">
                        <img class="object-cover h-full w-full" :src="boyImage" alt="" />
                    </div>
                </div>
            </section>

            <footer class="bg-white" aria-labelledby="footer-heading">
                <h2 id="footer-heading" class="sr-only">Footer</h2>
                <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
                    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 class="text-sm font-semibold leading-6 text-gray-900">
                                        Campany
                                    </h3>
                                    <ul role="list" class="mt-6 space-y-4">
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Resources</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Analytics</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Commerce</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Insights</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-10 md:mt-0">
                                    <h3 class="text-sm font-semibold leading-6 text-gray-900">
                                        Partnerships
                                    </h3>
                                    <ul role="list" class="mt-6 space-y-4">
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Documentation</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">API
                                                Status</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 class="text-sm font-semibold leading-6 text-gray-900">
                                        Company
                                    </h3>
                                    <ul role="list" class="mt-6 space-y-4">
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Partners</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-10 md:mt-0">
                                    <h3 class="text-sm font-semibold leading-6 text-gray-900">
                                        Legals
                                    </h3>
                                    <ul role="list" class="mt-6 space-y-4">
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10 xl:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">
                                Stay Connected
                            </h3>
                            <form class="mt-6 sm:flex sm:max-w-md">
                                <label for="email-address" class="sr-only">Email address</label>
                                <input type="email" name="email-address" id="email-address" autocomplete="email" required
                                    class="w-full min-w-0 appearance-none border-b bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                                    placeholder="Enter your email" />
                                <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                    <button type="submit"
                                        class="flex w-full items-center justify-center bg-[#224386] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            <div class="flex space-x-6 md:order-2 mt-6">
                                <a href="#" class="p-1 rounded-full text-white hover:text-gray-500 bg-[#224386]">
                                    <span class="sr-only">Facebook</span>
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" class="p-1 rounded-full text-white hover:text-gray-500 bg-[#224386]">
                                    <span class="sr-only">Instagram</span>
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" class="p-1 rounded-full text-white hover:text-gray-500 bg-[#224386]">
                                    <span class="sr-only">Twitter</span>
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" class="p-1 rounded-full text-white hover:text-gray-500 bg-[#224386]">
                                    <span class="sr-only">GitHub</span>
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" class="p-1 rounded-full text-white hover:text-gray-500 bg-[#224386]">
                                    <span class="sr-only">YouTube</span>
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
                        <p class="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
                            &copy; 2020 Your Company, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>
  
  <!--hero section -->
  
<script setup>
// import plumbing from '@/assets/plumbing-desktop.jpg'
import myImage from "../assets/plumbing-desktop.jpg";
import infoImage from "../assets/plumbing-info.jpg";
import boyImage from "../assets/plumbing-mobile.jpg";
import Navbar from "../components/Navbar.vue";



</script>
  
<style scoped></style>
      