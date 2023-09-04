<template>
  <div
    class="countainer flex items-center justify-between bg-primary pt-4 font-primary text-white"
  >
    <img src="./assets/images/logo.svg" class="cursor-pointer" alt="" />
    <ul class="hidden gap-3 md:flex">
      <li class="cursor-pointer hover:text-gray-700">Download</li>
      <li class="cursor-pointer hover:text-gray-700">Nitro</li>
      <li class="cursor-pointer hover:text-gray-700">discver</li>
      <li class="cursor-pointer hover:text-gray-700">Safety</li>
      <li class="cursor-pointer hover:text-gray-700">Support</li>
      <li class="cursor-pointer hover:text-gray-700">blog</li>
      <li class="cursor-pointer hover:text-gray-700">Careers</li>
    </ul>
    <div class="flex items-center gap-4">
      <button
        class="cursor-pointer rounded-full bg-white px-3 py-1 text-black hover:bg-gray-100"
      >
        Open discord
      </button>
      <i
        @click="toggleMenu()"
        class="fa-solid fa-bars cursor-pointer text-3xl text-white md:hidden"
      ></i>
    </div>
  </div>

  <!-- hidden menu -->
  <menu
    class="fixed top-0 z-50 flex h-screen rounded-l-2xl bg-white transition-all duration-300 ease-linear"
    :class="[showMenu ? 'right-0' : '-right-full']"
  >
    <div class="my-4 flex w-72 flex-col justify-between">
      <div>
        <div class="flex flex-wrap items-center justify-between p-3">
          <img
            src="./assets/images/logo.svg"
            class="rounded-lg bg-black px-2 py-1"
            alt="Logo"
          />

          <i
            @click="toggleMenu"
            class="fa-solid fa-xmark cursor-pointer text-3xl"
          ></i>
          <hr class="mt-2 w-full border border-gray-50" />
        </div>
        <ul class="ml-4">
          <li class="list">Download</li>
          <li class="list">Nitro</li>
          <li class="list">Discover</li>
          <li class="list">Safety</li>
          <li class="list">Support</li>
          <li class="list">Blog</li>
          <li class="list">Careers</li>
        </ul>
      </div>

      <div class="flex">
        <button
          class="mx-4 w-full rounded-full bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none"
        >
          Download For Windows
        </button>
      </div>
    </div>
  </menu>

  <div class="countainer h-screen overflow-hidden bg-primary pt-20">
    <div class="flex flex-col gap-8 md:mx-auto md:w-10/12 lg:w-8/12">
      <h3
        class="text-4xl font-extrabold text-white md:text-center md:text-[56px]"
      >
        IMAGINE A PLACE...
      </h3>
      <p class="text-white">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <div
        class="flex flex-col items-start gap-2 md:flex-row md:justify-center"
      >
        <button
          class="rounded-full bg-white px-7 py-3 hover:bg-gray-100 md:text-lg"
        >
          <i class="fa-solid fa-download mr-2"></i>
          Download for Windows
        </button>
        <button
          class="relative rounded-full bg-secondary px-7 py-3 text-white md:text-lg"
        >
          Open discord in your browser
        </button>
      </div>
    </div>
    <div class="relative h-[350px]">
      <img
        src="./assets/images/backgroundimg.svg"
        class="-right-20 bottom-0 md:absolute"
        alt=""
      />
      <img
        src="./assets/images/backgroundtwo.svg"
        class="bottom-0 left-0 hidden lg:block"
        alt=""
      />
    </div>
  </div>

  <div class="countainer py-primary">
    <card
      title="Create an invite-only place where you belong"
      text="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
      path="/images/item1.svg"
      :changeOrder="false"
    />
  </div>

  <div class="countainer bg-[#f6f6f6] py-primary">
    <card
      title="Where hanging out is easy"
      text="Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
      path="/images/item2.svg"
      :changeOrder="true"
    />
  </div>

  <div class="countainer py-primary">
    <card
      title="From few to a fandom"
      text="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
      path="/images/item4.svg"
      
      :changeOrder="false"
    />
    
  </div>

  <div class="countainer bg-[#f6f6f6] py-primary">
    <div class="flex flex-col items-center gap-8 lg:mx-auto lg:w-9/12">
      <div class="flex flex-col items-center gap-2">
        <h3 class="text-3xl font-extrabold lg:text-5xl">
          RELIABLE TECH FOR STAYING CLOSE
        </h3>
        <p>
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
      </div>
      <img src="/images/item4-big.svg" alt="" />
      <div class="hover: flex flex-col items-center gap-3">
        <p>Ready to start your journey?</p>
        <button
          class="rounded-full bg-primary px-7 py-3 text-white hover:bg-blue-700 md:text-lg"
        >
          <i class="fa-solid fa-download mr-2"></i>
          Download For Windows
        </button>
      </div>
    </div>
  </div>

  <thefooter />
</template>

<script setup>
import card from './components/card.vue';
import thefooter from './components/thefooter.vue';
import { ref } from 'vue';

const showMenu = ref(false);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>
