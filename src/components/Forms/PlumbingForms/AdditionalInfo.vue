<template>
  <div class="">
    <div class="" v-if="currentStep === 0">
      <NavLite />
      <div class="max-w-3xl mx-auto px-4 space-y-3">
        <div class="mt-4">
          <p class="text-2xl text-gray-600 font-semibold">Plumbing Services</p>
        </div>
        <div class="border rounded-xl shadow-sm p-4">
          <div class="">
            <p class="text-gray-500">
              Please select the service you are looking for:
            </p>
          </div>

          <ul class="space-y-2 mt-3">
            <li v-for="service in servicesData" :key="service.text">
              <div class="flex items-center justify-between">
                <p class="text-gray-800">{{ service.text }}</p>
                <div class="gap-6 w-32 flex items-center justify-between">
                  <button
                    @click="decrementService(service)"
                    class="border text-xs border-blue-600 rounded-full p-1 hover:bg-[#224386] hover:bg-opacity-30"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="blue"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                  <span class="text-lg text-gray-700">{{ service.value }}</span>
                  <button
                    @click="incrementService(service)"
                    class="bg-[#224386] text-xs rounded-full p-1 hover:bg-opacity-75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div class="text-end mt-12">
            <button
              @click="nextForm"
              class="bg-[#224386] px-8 py-2 text-white font-medium rounded-md hover:opacity-75"
            >
              Continue
            </button>
          </div>
        </div>

        <div class="max-w-3xl mx-auto space-y-3 p-4">
          <div class="mt-4">
            <p class="text-2xl text-gray-600 font-semibold">
              Plumbing Services
            </p>
          </div>
          <div class="border rounded-xl shadow-sm p-4">
            <div class="">
              <ul class="">
                <li
                  class="flex items-center justify-between gap-4 my-2"
                  v-for="service in servicesData"
                  :key="service.id"
                >
                  <span class="w-[60%]" v-if="service.value > 0">{{
                    service.text
                  }}</span>
                  <span
                    class="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-gray-50"
                    v-if="service.value > 0"
                    >{{ service.value }}</span
                  >
                  <span
                    class="w-[20%] flex items-end justify-end"
                    v-if="service.value > 0"
                    >${{ service.price * service.value }}</span
                  >
                </li>
              </ul>
              <ul class="space-y-4 mt-6">
                <li>
                  <div class="flex items-center justify-between">
                    <p>Estimated cost (Taxes included)</p>
                    <p class="text-lg font-bold">$ {{ totalCost }}</p>
                  </div>
                </li>
                <li>
                  <div class="flex items-center justify-between">
                    <p>Estimated servicee time</p>
                    <p class="text-lg font-bold">2 hours</p>
                  </div>
                </li>
                <li class="border-t border-gray-200 p-4 text-gray-500">
                  <p>
                    "Price is based on a regular replacement / Installation. If
                    supplementary details and pictures are provided or if extra
                    work is needed (usually for first-time installation), the
                    technician will be able to analyze the request and discuss
                    any further charges with you (including parts) before
                    starting the job."
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- form -1 -->

    <div class="" v-else-if="currentStep === 1">
      <div class="max-w-3xl mx-auto space-y-3">
        <div class="mt-4">
          <p class="text-2xl text-gray-600 font-semibold">Plumbing Services</p>
        </div>
        <div class="border rounded-xl shadow-sm p-4 text-center">
          <div class="text-start">
            <p class="text-gray-500">
              Please provide additionnal details and pictures (Optional)
            </p>
          </div>

          <div class="">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
            ></label>
            <textarea
              id="message"
              rows="4"
              v-model="AddDetailsAndPic"
              @change="addDescription"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder=""
            ></textarea>
          </div>

          <ImageUpload @add="handleAddImage" />

          <div class="text-end mt-6">
            <button
              @click="nextForm"
              class="bg-gray-600 px-5 py-2 text-white font-medium rounded-md hover:opacity-75"
            >
              Skip
            </button>
            <button
              @click="nextForm"
              class="bg-[#2563eb] px-5 ml-4 py-2 text-white font-medium rounded-md hover:opacity-75"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- form -2 -->
    <div class="" v-else-if="currentStep === 2">
      <div class="max-w-3xl mx-auto space-y-3">
        <div class="mt-4">
          <p class="text-2xl text-gray-600 font-semibold">Plumbing Services</p>
        </div>
        <div class="border rounded-xl shadow-sm p-4 text-center">
          <div class="">
            <p class="text-gray-500">
              Please select the date and time frame that work for you
            </p>
          </div>
          <div class="relative max-w-sm mx-auto my-6">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <DatePicker v-model="date" mode="dateTime" is24hr />
          </div>
          <div class="flex flex-wrap justify-center items-center gap-4 mt-24">
            <a href="#">
              <div
                class="border p-2 text-gray-500 text-xs rounded-md hover:bg-[#224386] hover:text-white"
              >
                {{ date }}
              </div>
            </a>
          </div>
          <div class="text-end">
            <button
              @click="nextForm"
              class="bg-[#224386] px-5 py-2 text-white font-medium rounded-md hover:opacity-75"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- form 3 -->
    <div class="" v-else-if="currentStep === 3">
      <div class="max-w-3xl mx-auto space-y-3">
        <div class="mt-4">
          <p class="text-2xl text-gray-600 font-semibold">Plumbing Services</p>
        </div>
        <div class="border rounded-xl shadow-sm p-4">
          <div class="text-center">
            <p class="text-gray-500">Please provide your contact details</p>
          </div>

          <form>
            <div class="grid gap-6 my-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >First name</label
                >
                <input
                  type="text"
                  id="first_name"
                  v-model="contactInfo.first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Last name</label
                >
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Doe"
                  v-model="contactInfo.last_name"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Phone number</label
                >
                <input
                  type="tel"
                  id="phone"
                  v-model="contactInfo.phone_number"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Email</label
                >
                <input
                  type="email"
                  id="website"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  v-model="contactInfo.email"
                  placeholder="hamzawattoo4321@gmail.com"
                  required
                />
              </div>
              <div class="space-y-3">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Preferred contact way</label
                >
                <div class="flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="text"
                    v-model="contactInfo.preferred_contact_way"
                    name="default-radio"
                    class="w-4 h-4 text-[#224386] bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    for="default-radio-1"
                    class="ml-2 text-sm font-medium text-gray-900"
                    >Text</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value="phone"
                    v-model="contactInfo.preferred_contact_way"
                    name="default-radio"
                    class="w-4 h-4 text-[#224386] bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    for="default-radio-2"
                    class="ml-2 text-sm font-medium text-gray-900"
                    >Phone call</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value="email"
                    v-model="contactInfo.preferred_contact_way"
                    name="default-radio"
                    class="w-4 h-4 text-[#224386] bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    for="default-radio-2"
                    class="ml-2 text-sm font-medium text-gray-900"
                    >Email</label
                  >
                </div>
              </div>
            </div>
            <div class="text-end">
              <button
                @click="nextForm"
                class="bg-[#224386] px-5 py-2 text-white font-medium rounded-md hover:opacity-75"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- form ---4 -->
    <div class="" v-else-if="currentStep === 4">
      <div class="max-w-3xl mx-auto space-y-3">
        <div class="mt-4">
          <p class="text-2xl text-gray-600 font-semibold">Plumbing Services</p>
        </div>
        <div class="border rounded-xl shadow-sm p-4">
          <div class="text-center">
            <p class="text-gray-500">
              Please provide your complete address and instructions if needed
            </p>
          </div>

          <form>
            <div class="grid gap-6 my-6 md:grid-cols-2">
              <div class="col-span-1 md:col-span-2">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Address</label
                >
                <input
                  type="text"
                  id="first_name"
                  v-model="addressInfo.address"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="106 DOYERS ST. 8 ARLINGTON DR. 599 NW BAY BLVD."
                  required
                />
              </div>
              <div class="">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                ></label>
                <input
                  type="text"
                  id="first_name"
                  v-model="addressInfo.unit"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Apt / Unit #"
                  required
                />
              </div>
              <div class="">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                ></label>
                <input
                  type="text"
                  id="first_name"
                  v-model="addressInfo.gate"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Gate cote"
                  required
                />
              </div>
              <div class="">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Other istructions (Optional)</label
                >
                <textarea
                  id="message"
                  rows="4"
                  v-model="addressInfo.other_instructions"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder=""
                ></textarea>
              </div>
            </div>
          </form>

          <div class="text-end">
            <button
              @click="nextForm"
              class="bg-[#224386] px-5 py-2 text-white font-medium rounded-md hover:opacity-75"
            >
              Submit request
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- form --5 -->
    <div class="pb-24" v-else-if="currentStep === 5">
      <div class="max-w-3xl mx-auto space-y-3">
        <div class="mt-4">
          <p class="text-2xl text-gray-600 font-semibold">Plumbing Services</p>
        </div>
        <div class="border rounded-xl shadow-sm p-4">
          <div class="rounded-md bg-white p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="h-5 w-5 text-gray-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-gray-800">
                  Appointment confirmation
                </h3>
                <div class="mt-2 text-sm text-gray-700">
                  <p>
                    "Your requested has been receive.<br />
                    Here is the detail below <br />
                    <br /><br />
                    Appointment details (name, address, service and date & time
                    and amount will show uo here "
                  </p>

                  <div class="">
                    <h1 class="my-6 text-3xl font-semibold">Srevices</h1>
                    <ul class="">
                      <li
                        class="flex items-center justify-between gap-4 my-2"
                        v-for="service in servicesData"
                        :key="service.id"
                      >
                        <span v-if="service.value > 0">{{ service.text }}</span>
                        <span v-if="service.value > 0">{{
                          service.value
                        }}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="">
                    <ul class="">
                      <li class="flex items-center justify-between gap-4">
                        <span>Appointment Date and Time</span>
                        <span class="bg-green-50 px-2 text-green-600">{{
                          date
                        }}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="">
                    <h1 class="my-6 text-3xl font-semibold">Personal Info</h1>
                    <ul class="">
                      <li class="flex items-center justify-between gap-4">
                        <span>First Name</span>
                        <span>{{ contactInfo.first_name }} </span>
                      </li>
                      <li class="flex items-center justify-between gap-4">
                        <span>Last Name</span>
                        <span>{{ contactInfo.last_name }} </span>
                      </li>
                      <li class="flex items-center justify-between gap-4">
                        <span>Phone Number</span>
                        <span>{{ contactInfo.phone_number }} </span>
                      </li>
                      <li class="flex items-center justify-between gap-4">
                        <span>Email</span>
                        <span>{{ contactInfo.email }} </span>
                      </li>
                      <li class="flex items-center justify-between gap-4">
                        <span>Contact Preferred</span>
                        <span>{{ contactInfo.preferred_contact_way }} </span>
                      </li>
                    </ul>
                  </div>

                  <div class="">
                    <h1 class="my-6 text-3xl font-semibold">Address</h1>
                    <ul class="">
                      <li class="flex items-center justify-between gap-4">
                        <span>Address</span>
                        <span>{{ addressInfo.address }} </span>
                      </li>
                      <li class="flex items-center justify-between gap-4">
                        <span>Unit</span>
                        <span>{{ addressInfo.unit }} </span>
                      </li>
                      <li class="flex items-center justify-between gap-4">
                        <span>Gate</span>
                        <span>{{ addressInfo.gate }} </span>
                      </li>
                      <li class="flex items-center justify-between gap-4">
                        <span>Other Information</span>
                        <span>{{ addressInfo.other_instructions }} </span>
                      </li>
                    </ul>
                  </div>

                  <div class="">
                    <h1 class="my-6 text-3xl font-semibold">
                      Addiotional Information
                    </h1>

                    <p>{{ AddDetailsAndPic }}</p>
                    <ul class="flex items-start my-8 gap-8 flex-wrap">
                      <li
                        v-for="image in savedImages"
                        :key="image.id"
                        class="flex items-center w-28 h-28 rounded"
                      >
                        <img
                          :src="image.url"
                          class="object-cover w-full h-full"
                          :alt="image.name"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- form --5 -->
    <div class="pb-24" v-if="currentStep === 5">
      <div class="max-w-3xl mx-auto space-y-3 p-4">
        <div class="mt-4">
          <p class="text-2xl text-gray-600 font-semibold">Plumbing Services</p>
        </div>
        <div class="border rounded-xl shadow-sm p-4">
          <div class="">
            <ul class="">
              <li
                class="flex items-center justify-between gap-4 my-2"
                v-for="service in servicesData"
                :key="service.id"
              >
                <span class="w-[60%]" v-if="service.value > 0">{{
                  service.text
                }}</span>
                <span
                  class="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-gray-50"
                  v-if="service.value > 0"
                  >{{ service.value }}</span
                >
                <span
                  class="w-[20%] flex items-end justify-end"
                  v-if="service.value > 0"
                  >${{ service.price * service.value }}</span
                >
              </li>
            </ul>
            <ul class="space-y-4 mt-6">
              <li>
                <div class="flex items-center justify-between">
                  <p>Estimated cost (Taxes included)</p>
                  <p class="text-lg font-bold">$ {{ totalCost }}</p>
                </div>
              </li>
              <li>
                <div class="flex items-center justify-between">
                  <p>Estimated servicee time</p>
                  <p class="text-lg font-bold">2 hours</p>
                </div>
              </li>
              <li class="border-t border-gray-200 p-4 text-gray-500">
                <p>
                  "Price is based on a regular replacement / Installation. If
                  supplementary details and pictures are provided or if extra
                  work is needed (usually for first-time installation), the
                  technician will be able to analyze the request and discuss any
                  further charges with you (including parts) before starting the
                  job."
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavLite from "@/components/navbar-Lite.vue";
import { ref, computed } from "vue";
const currentStep = ref(0);
import { v4 as uuidv4 } from "uuid";
import { Calendar, DatePicker } from "v-calendar";
import ImageUpload from "@/components/Forms/PlumbingForms/ImageUpload.vue";
import "v-calendar/style.css";

// if click on Submit Next form should show

const date = ref(new Date());
const contactInfo = ref({
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  preferred_contact_way: 0,
});

const addressInfo = ref({
  address: "",
  unit: "",
  gate: "",
  other_instructions: "",
});
const servicesData = ref([
  {
    id: uuidv4(),
    text: "Toilet replacement",
    value: 0,
    price: 10,
  },
  {
    id: uuidv4(),
    text: "Complete vanity replacement",
    value: 0,
    price: 12,
  },
  {
    id: uuidv4(),
    text: "Vanity faucet replacement",
    value: 0,
    price: 15,
  },
  {
    id: uuidv4(),
    text: "Sink replair",
    value: 0,
    price: 22,
  },
  {
    id: uuidv4(),
    text: "Shower Tub_faucet installation",
    value: 0,
    price: 13,
  },
  {
    id: uuidv4(),
    text: "Water heater replacement",
    value: 0,
    price: 30,
  },
]);

const incrementService = (service) => {
  servicesData.value = servicesData.value.map((item) => {
    if (item.id === service.id) {
      return {
        ...item,
        value: item.value + 1,
      };
    }
    return item;
  });

  // console.log(servicesData.value);
};

const decrementService = (service) => {
  servicesData.value = servicesData.value.map((item) => {
    if (item.id === service.id) {
      return {
        ...item,
        value: item.value - 1,
      };
    }
    return item;
  });

  // console.log(servicesData.value);
};

const savedImages = ref([]);
const AddDetailsAndPic = ref("");

const addDescription = (e) => {
  console.log(AddDetailsAndPic.value, "nothing");
};

const handleAddImage = (newImage) => {
  savedImages.value.push(newImage);
  console.log(savedImages.value, "here");
};

const nextForm = () => {
  currentStep.value = currentStep.value + 1;

  console.log(servicesData.value);
  console.log(date.value);
  console.log(contactInfo.value);
  console.log(addressInfo.value);
  console.log(AddDetailsAndPic.value);
};

const totalCost = computed(() => {
  return servicesData.value.reduce((total, service) => {
    return total + service.price * service.value;
  }, 0);
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
