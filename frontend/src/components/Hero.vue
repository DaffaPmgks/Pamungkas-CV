<script setup>
import { onMounted, ref } from 'vue'
import fotoprofil from '@/assets/profil.jpeg'

const tiltBox = ref(null)

function handleTilt(e) {
  const box = tiltBox.value
  const rect = box.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20
  box.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`
}

function resetTilt() {
  tiltBox.value.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`
}

onMounted(() => {
  const letters = document.querySelectorAll('.reveal-letter span')
  letters.forEach((span, i) => {
    span.style.animationDelay = `${i * 0.05}s`
  })

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated')
      } else {
        entry.target.classList.remove('animated')
      }
    })
  }, { threshold: 0.2 })

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})
</script>

<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
    <!-- Kiri -->
    <div class="md:w-1/2 mb-10 md:mb-0 space-y-6">
      <h1 class="text-4xl font-bold text-gray-800 flex flex-wrap gap-[1px] reveal-letter">
        <span v-for="(char, i) in 'Halo, Saya '" :key="'h' + i" class="inline-block">
          {{ char }}
        </span>
        <span
          v-for="(char, i) in 'Daffa Pamungkas'"
          :key="'d' + i"
          class="inline-block text-blue-600"
        >
          {{ char }}
        </span>
      </h1>

      <p
        class="text-xl text-gray-600 animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-700 delay-300"
      >
        Mahasiswa Informatika yang bersemangat dalam pengembangan web dan desain.
      </p>

      <a
        href="#kontak"
        class="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 animate-on-scroll opacity-0 translate-x-[-50px] delay-500"
      >
        Hubungi Saya
      </a>
    </div>

    <!-- Kanan -->
    <div class="md:w-1/2 flex justify-center animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-700 delay-300">
      <div
        class="relative w-80 h-80 rounded-full shadow-xl overflow-hidden transform hover:scale-105 transition duration-500"
        @mousemove="handleTilt"
        @mouseleave="resetTilt"
        ref="tiltBox"
      >
        <img
          :src="fotoprofil"
          alt="Foto Profil"
          class="w-full h-full object-cover rounded-full"
        />
        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition duration-300 rounded-full" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal-letter span {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.4s ease-out forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated {
  opacity: 1 !important;
  transform: translate(0, 0) !important;
}

.animate-on-scroll {
  will-change: transform, opacity;
}
</style>
