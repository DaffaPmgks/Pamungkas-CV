<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// A reactive reference to hold the skills data
const skills = ref([]);

// A reactive reference to control the animation state
const isPaused = ref(false);

// Function to toggle the paused state of the animation
const toggleAnimation = () => {
  isPaused.value = !isPaused.value;
};

// Fetch skills data when the component is mounted
onMounted(async () => {
  try {
    // This is a mock API call. Replace with your actual endpoint.
    // To make the animation seamless, we are duplicating the data.
    // const response = await axios.get('http://localhost:3000/api/skills');
    // const data = response.data;

    // --- Mock Data for Demonstration ---
    const mockData = [
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Expert' },
      { name: 'Vue.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 'Expert' },
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Intermediate' },
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Expert' },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 'Expert' },
      { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 'Expert' },
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 'Intermediate' },
    ];
    // --- End Mock Data ---

    skills.value = [...mockData, ...mockData]; // Duplicate the array for a seamless loop
  } catch (error) {
    console.error('Failed to fetch skills:', error);
  }
});
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Keahlian & Teknologi</h2>
    </div>

    <div
      class="scroller-container w-full overflow-hidden"
      @click="toggleAnimation"
    >
      <div
        class="scroller-content flex gap-8"
        :class="{ 'paused': isPaused }"
      >
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="skill-card flex-shrink-0 bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
        >
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <div class="flex justify-center items-center h-16 mb-4">
            <img
              v-if="skill.iconUrl"
              :src="skill.iconUrl"
              :alt="skill.name"
              class="max-w-[40px] h-auto object-contain"
            />
          </div>
          <p class="text-gray-500 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Keyframes for a smooth, continuous scroll from right to left */
@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Moves the content to the left by the width of one full set of skills */
    transform: translateX(-50%);
  }
}

.scroller-container {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  cursor: pointer;
}

.scroller-content {
  /* Apply the animation */
  animation: scrollLeft 40s linear infinite;
}

/* Pause the animation when the 'paused' class is applied */
.scroller-content.paused {
  animation-play-state: paused;
}

/* Define the fixed width for each skill card */
.skill-card {
  width: 220px; /* Adjust width as needed */
}
</style>
