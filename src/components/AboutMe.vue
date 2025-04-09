<template>
  <section class="py-10 px-6 flex flex-col w-screen h-screen relative">
    <div class="self-end">
      <router-link to="/">
        <div
          class="bg-transparent rounded-full py-3 px-3 border-[1px] border-secondary w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[22px] w-[22px] stroke-secondary"
            viewBox="0 0 21 21"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
            >
              <path d="m1.5 10.5l9-9l9 9" />
              <path d="M3.5 8.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
            </g>
          </svg>
        </div>
      </router-link>
    </div>
    <div class="flex gap-2 items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[34px] w-[34px]"
          viewBox="0 0 512 512"
        >
          <path
            fill="#000"
            fill-rule="evenodd"
            d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
            stroke-width="13"
            stroke="#000"
          />
        </svg>
      </div>
      <h1 class="font-bold text-2xl underline-offset-[10px] underline">
        About Me
      </h1>
    </div>
    <div class="flex flex-col gap-6 mt-[1.44rem] px-4">
      <h2 class="font-bold text-left text-2xl">Hi there! I'm Ojo Timothy,</h2>
      <p class="font-bold text-left">
        I'm a Frontend Engineer based in Nigeria with a passion for crafting
        beautiful, interactive, and user-friendly digital experiences.
      </p>
      <p class="font-light text-left">
        I love turning ideas into reality through code.
        <span class="font-bold"
          >whether it's building sleek web applications, optimizing performance,
          or solving complex UI challenges.</span
        >
      </p>
      <p class="font-light text-left text-[0.1.26rem] leading-6">
        When I'm not coding, you'll probably find me binge-watching anime,
        diving into immersive video games, or exploring new tech trends. I
        believe great design and clean code go hand in hand, and I’m always
        eager to learn, experiment, and push the boundaries of what’s possible
        on the web.
      </p>
      <div class="w-fit cursor-pointer">
        <a
          href="https://www.instagram.com/yo_timmy1/"
          target="_blank"
          class="px-[0.89rem] ease py-2 outline-[2.5px] outline rounded-xl outline-secondary"
        >
          Know More
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
