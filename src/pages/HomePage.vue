<template>
  <div class="">
    <div
      class="w-full bg-cover"
      :style="{
        'background-image': 'url(' + myImage + ')',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
      }"
    >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <nav class="">
          <div class="relative flex h-16 justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
              <!-- Mobile menu button -->
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            >
              <div class="hidden md:flex flex-shrink-0 items-center">
                <img
                  class="block h-8 w-auto"
                  :src="logoImage"
                  alt="Your Company"
                />
              </div>
              <div class="hidden md:ml-6 md:flex sm:space-x-8">
                <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                <a
                  href="#"
                  class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm text-gray-900 whitespace-nowrap"
                  >Services</a
                >
                <a
                  href="#"
                  class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm text-gray-900 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
                  >Memberships</a
                >
                <a
                  href="#"
                  class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm text-gray-900 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
                  >Info hub</a
                >
                <a
                  href="#"
                  class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm text-gray-900 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
                  >Pricing</a
                >
                <a
                  href="#"
                  class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm text-gray-900 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
                  >Become a tech</a
                >
                <a
                  href="#"
                  class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm text-gray-900 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
                  >Real estate agents</a
                >
              </div>
            </div>
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
              <!-- Profile dropdown -->
              <div class="bg-blue-600 rounded-full hover:bg-white py-1 px-5">
                <a
                  href="#"
                  class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-white hover:text-blue-600"
                  >Login</a
                >
              </div>
            </div>
          </div>

          <!-- Mobile menu, show/hide based on menu state. -->
          <div class="md:hidden" id="mobile-menu">
            <div class="space-y-1 pb-4 pt-2">
              <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
              <a
                href="#"
                class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                >Services</a
              >
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >Memberships</a
              >
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >Info hub</a
              >
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >Pricing</a
              >
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >Become a tech</a
              >
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >Real estate agents</a
              >
            </div>
          </div>
        </nav>
        <section class="py-44">
          <div class="space-y-6 w-auto md:w-1/4 px-4">
            <h3 class="text-5xl font-bold text-[#52575a]">
              Plumbing made simple
            </h3>
            <p class="text-lg text-gray-500">
              Quality repairs and replacements done right the first time.
            </p>
            <button
              class="bg-blue-600 py-5 px-8 font-medium text-white whitespace-nowrap"
            >
              Schedule now
            </button>
          </div>
        </section>
      </div>
    </div>
    <!-- section appointment -->
    <div class="mx-auto max-w-7xl py-12 px-2 sm:px-6 lg:px-8">
      <section class="my-12">
        <div class="flex flex-wrap gap-4 items-center justify-between">
          <div class="">
            <h3 class="text-xl font-semibold text-gray-700">
              Book an appointment today.
            </h3>
            <p class="text-gray-700">Where can we help?</p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="">
              <div
                class="text-gray-600 border border-gray-300 p-4 flex flex-col justify-center items-center w-32"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                <p>Kichen</p>
              </div>
            </a>
            <a href="">
              <div
                class="text-gray-600 border border-gray-300 p-4 flex flex-col justify-center items-center w-32"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                <p>Bathroom</p>
              </div>
            </a>
            <a href="">
              <div
                class="text-gray-600 border border-gray-300 p-4 flex flex-col justify-center items-center w-32"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                <p>Laundry</p>
              </div>
            </a>
            <a href="">
              <div
                class="text-gray-600 border border-gray-300 p-4 flex flex-col justify-center items-center w-32"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                <p>Pumps</p>
              </div>
            </a>
            <a href="">
              <div
                class="text-gray-600 border border-gray-300 p-4 flex flex-col justify-center items-center w-32"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p>More</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="my-24">
        <div class="grid grid-cols-1 md:grid-cols-2 space-y-6">
          <div class="">
            <img :src="infoImage" alt="" />
          </div>
          <div class="space-y-8 px-4 md:px-32">
            <div class="flex gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="cyan"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="cyan"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="cyan"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>

              <div class="min-w-0 flex-auto">
                <p class="font-semibold leading-6 text-gray-900">Risk-free</p>
                <p class="mt-1 truncate text-sm leading-5 text-gray-500">
                  We don't start working until you approve our quote.
                </p>
              </div>
            </div>
            <div class="flex gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="cyan"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
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

      <section class="my-12">
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
            <button
              class="bg-blue-600 py-5 px-8 font-medium text-white whitespace-nowrap"
            >
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
        <div
          class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32"
        >
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="grid grid-cols-2 gap-8 xl:col-span-2">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-semibold leading-6 text-gray-900">
                    Campany
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Resources</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Analytics</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Commerce</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Insights</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="text-sm font-semibold leading-6 text-gray-900">
                    Partnerships
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Pricing</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Documentation</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Guides</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >API Status</a
                      >
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
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >About</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Blog</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Jobs</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Press</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Partners</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="text-sm font-semibold leading-6 text-gray-900">
                    Legals
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Claim</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Privacy</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >Terms</a
                      >
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
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autocomplete="email"
                  required
                  class="w-full min-w-0 appearance-none border-b bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder="Enter your email"
                />
                <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    class="flex w-full items-center justify-center bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <div class="flex space-x-6 md:order-2 mt-6">
                <a
                  href="#"
                  class="p-1 rounded-full text-white hover:text-gray-500 bg-blue-600"
                >
                  <span class="sr-only">Facebook</span>
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="p-1 rounded-full text-white hover:text-gray-500 bg-blue-600"
                >
                  <span class="sr-only">Instagram</span>
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="p-1 rounded-full text-white hover:text-gray-500 bg-blue-600"
                >
                  <span class="sr-only">Twitter</span>
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="p-1 rounded-full text-white hover:text-gray-500 bg-blue-600"
                >
                  <span class="sr-only">GitHub</span>
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="p-1 rounded-full text-white hover:text-gray-500 bg-blue-600"
                >
                  <span class="sr-only">YouTube</span>
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24"
          >
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
</script>

<style scoped></style>
