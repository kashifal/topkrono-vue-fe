<template>
    <div class="bg-white sticky top-0 shadow-lg">
        <nav class=" max-w-7xl mx-auto">
            <div class="relative flex h-16 justify-between">
              <div
                class="absolute inset-y-0 left-0 flex items-center md:hidden"
              >
                <!-- Mobile menu button -->
                <button
                  type="button"
                  @click="toggleMenu"
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
                    class="block h-32 w-auto"
                    :src="LogoImage"
                    alt="Your Company"
                  />
                </div>
                <div class="hidden md:ml-6 md:flex sm:space-x-8">
                  <a
                    href="#"
                    @click="desktopServices"
                    class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm text-gray-900 whitespace-nowrap relative"
                    >Services</a
                  >
                  <div
                    :class="isDeskServiceOpen === true ? 'block' : 'hidden'"
                    class="absolute left-20 max-w-3xl w-1/4 border rounded-md bg-white mt-16"
                    id="mobile-menu"
                  >
                    <div class="space-y-1 pb-4 pt-2">
                      <a
                        href="#"
                        class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-sm font-medium text-indigo-700"
                        >TV Mounting</a
                      >
                     
                      <a
                        href="#"
                        class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >Handyman Services</a
                      >
                     
                      <a
                        href="#"
                        class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >IPhone Repair</a
                      >
                      <router-link
                        to="/appliance"
                        class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >Appliances Installation </router-link
                      > 
                      <router-link
                        to="/electrical"
                        class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >Garage Door Repair a tech</router-link
                      >
                      <router-link
                        to="/plumbing"
                        class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        >Plumbing Service</router-link
                      >
                    </div>
                  </div>
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
                <div class="bg-[#224386] rounded-full hover:bg-white py-1 px-5">
                  <a
                    href="#"
                    class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-white hover:text-[#224386]"
                    >Login</a
                  >
                </div>
              </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div
              :class="isMenuOpen === true ? 'block' : 'hidden'"
              id="mobile-menu"
            >
              <div class="space-y-1 pb-4 pt-2">
                <a
                  href="#"
                  @click="toggleServices"
                  class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                  >Services</a
                >
                <div
                  :class="isServiceOpen === true ? 'block' : 'hidden'"
                  class="bg-white rounded-md space-y-1 pb-4 pt-2 px-4"
                >
                  <a
                    href="#"
                    class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-sm font-medium text-indigo-700"
                    >TV Mounting</a
                  >
                  <a
                    href="#"
                    class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >Home Appliances</a
                  >
                  <a
                    href="#"
                    class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >Handyman Services</a
                  >
                  <a
                    href="#"
                    class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >IPhone Repair</a
                  >
                  <a
                    href="#"
                    class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >Garage Door Repair a tech</a
                  >
                  <a
                    href="#"
                    class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >Plumbing Service</a
                  >
                </div>
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
    </div>
  
</template>


<script setup>
        import LogoImage from "../assets/transparentlogo.png";
        import { ref } from "vue";




        const isMenuOpen = ref(false);
const isServiceOpen = ref(false);
const isDeskServiceOpen = ref(false);
// import HomeImage from "../assets/cartoon-street-with-suburban-houses-driveway-tree_316839-1562.avif";

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleServices() {
  isServiceOpen.value = !isServiceOpen.value;
}

function desktopServices() {
  isDeskServiceOpen.value = !isDeskServiceOpen.value;
}











</script>


<style scoped>

</style>