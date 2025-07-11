<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const skills = ref([]);
const isPaused = ref(false);
const scrollRef = ref(null);
let scrollInterval = null;

const toggleAnimation = () => {
  isPaused.value = !isPaused.value;
  if (isPaused.value) {
    clearInterval(scrollInterval);
  } else {
    startAutoScroll();
  }
};

const startAutoScroll = () => {
  scrollInterval = setInterval(() => {
    if (!scrollRef.value) return;
    scrollRef.value.scrollLeft += 1;
  }, 20);
};

onMounted(() => {
  const mockData = [
    { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Expert' },
    { name: 'Vue.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 'Expert' },
    { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Intermediate' },
    { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Expert' },
    { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 'Expert' },
    { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 'Expert' },
    { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 'Intermediate' },
  ];
  skills.value = [...mockData, ...mockData]; // duplikat agar seamless
  startAutoScroll();
});

onUnmounted(() => {
  clearInterval(scrollInterval);
});
</script>


<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Keahlian & Teknologi</h2>
    </div>

    <!-- Bisa scroll manual dan auto-scroll -->
    <div
      ref="scrollRef"
      class="scroller-container flex gap-8 overflow-x-auto scroll-smooth px-4"
      @click="toggleAnimation"
    >
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-card flex-shrink-0 bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
      >
        <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
        <div class="flex justify-center items-center h-16 my-4">
          <img
            v-if="skill.iconUrl"
            :src="skill.iconUrl"
            :alt="skill.name"
            class="max-w-[40px] h-auto object-contain"
          />
        </div>
        <p class="text-gray-500">{{ skill.level }}</p>
      </div>
    </div>
  </section>
</template>


<style scoped>
.scroller-container {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  cursor: grab;
  scroll-behavior: smooth;
  padding-bottom: 1rem;
}

.scroller-container::-webkit-scrollbar {
  display: none;
}

.skill-card {
  width: 220px;
}
</style>

