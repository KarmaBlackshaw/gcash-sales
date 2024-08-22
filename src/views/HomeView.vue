<script setup>

const whyMe = [
  {
    title: 'Attention to details',
    description: 'A great editor meticulously analyzes every frame, ensuring that each cut, transition, and effect is perfectly executed. It\'s the small details that make a big impact on the overall quality of the video.',
    image: 'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Creative Vision',
    description: "Editing is more than just arranging clips—it's about crafting a narrative. A great editor sees beyond the footage, transforming raw material into a compelling story that resonates with the audience.",
    image: 'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Technical Proficiency',
    description: 'Mastery of editing software and tools is essential. A great editor seamlessly blends technical skills with creative instincts, leveraging the latest technology to bring ideas to life with precision and flair.',
    image: 'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Adaptability',
    description: 'A great editor is flexible and open to feedback, adjusting their work to meet the evolving needs of each project. They understand that each story is unique and tailor their approach to match the desired vision.',
    image: 'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
]
</script>

<template>
  <div class="bg-neutral-900 py-10 min-h-[calc(100vh-64px)]">
    <div class="container mx-auto flex flex-col gap-4 items-center text-white px-20 sm:px-0">
      <h1 class="text-7xl max-w-[14ch] text-center mx-auto font-bold">
        Crafting  <span class="text-cyan-500">Stories</span>, Frame by Frame
      </h1>

      <p class="max-w-[60ch] mx-auto text-center text-white/80">
        Bringing your vision to life through dynamic and engaging video edits. From cinematic masterpieces to social media highlights, we shape every frame to captivate your audience and tell your story with impact.
      </p>

      <div class="grid place-content-center gap-5">
        <img
          class="h-[400px] rounded-lg object-cover"
          src="https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        >


        <div class="flex justify-end">
          <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-white text-neutral-500 rounded-md font-light transition duration-200 ease-linear flex items-center gap-3">
            Check out my Portfolio

            <IconArrowRight />
          </button>
        </div>
      </div>

      <div class="h-[1px] bg-neutral-700 w-full sm:w-[70%] my-10" />

      <section class="mb-20">
        <div class="text-center mb-5 text-3xl font-bold">
          <span class="text-cyan-500">Who</span> am I?
        </div>

        <div class="max-w-[800px]">
          <p class="mb-5">
            Hi, I'm <span class="text-cyan-500">Earl Gie Siao Campay</span>, a passionate video editor with 6 years of experience in transforming raw footage into compelling narratives. My expertise lies in a diverse range of video editing styles, from cinematic storytelling to promotional videos and social media content. I bring a blend of creativity and technical skill to every project, ensuring that each edit is polished and impactful.
          </p>

          <p>
            Specializing in crafting engaging and visually stunning content, I tailor my approach to meet the unique needs of each project. With a keen eye for detail and a deep understanding of narrative flow, I work closely with clients to bring their vision to life. Whether you’re looking for a polished commercial, an engaging documentary, or a vibrant music video, I’m here to turn your ideas into compelling visual experiences
          </p>
        </div>
      </section>

      <div class="text-center mb-5 text-3xl font-bold">
        But <span class="text-cyan-500">why me</span>?
      </div>

      <div class="flex flex-col gap-10 max-w-[800px]">
        <div
          v-for="(item, itemKey) in whyMe"
          :key="itemKey"
          class="flex gap-10"
          :class="itemKey % 2 === 0 ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row-reverse'"
        >
          <img
            class="h-[200px] rounded-lg object-cover"
            src="https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          >

          <div>
            <h2 class="uppercase tracking-wider">
              {{ item.title }}
            </h2>

            <p class="font-thin text-white/50">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
