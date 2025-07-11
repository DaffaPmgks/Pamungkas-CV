<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Kontak Saya" />
      <p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>

      <div class="flex justify-center items-center gap-6 mb-12">
        <!-- Email -->
        <a
          href="mailto:daffapamungkas@students.amikom.ac.id"
          class="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center"
          aria-label="Kirim Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
          </svg>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/DaffaPmgks"
          target="_blank"
          class="bg-gray-700 p-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 inline-flex items-center justify-center"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303
              3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
              -.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729
              1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998
              .108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.335-5.467-5.93
              0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0
              1.005-.322 3.3 1.23a11.51 11.51 0 013.003-.403c1.02.005 2.045.137
              3.003.403 2.28-1.552 3.285-1.23 3.285-1.23 .645 1.653.24 2.873.12 3.176
              .765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92
              .42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286
              0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297
              c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>

        <!-- YouTube -->
   <a
  href="https://www.youtube.com/@dppa.666"
  target="_blank"
  class="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors duration-300 inline-flex items-center justify-center"
  aria-label="YouTube"
>
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 50 50"
       class="h-6 w-6"
       fill="none">
    <circle cx="25" cy="25" r="25" fill="#FF0000" />
    <polygon points="20,17 20,33 34,25" fill="white" />
  </svg>
</a>

        <!-- Instagram -->
        <a
          href="https://instagram.com/daffapmks"
          target="_blank"
          class="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300 inline-flex items-center justify-center"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3a5.75 5.75 0 110 11.5 5.75 5.75 0 010-11.5zm0 1.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm5.5-.25a1 1 0 110 2 1 1 0 010-2z"/>
          </svg>
        </a>
      </div>

      <p class="text-gray-500 mt-8">&copy; {{ new Date().getFullYear() }} PMGKS. Dibuat dengan ♡</p>
    </div>
  </footer>
</template>
