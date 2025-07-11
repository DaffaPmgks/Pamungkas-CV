// backend/data.js
const educationHistory =[
  {
    "id": 1,
    "period": "2024 - Sekarang",
    "institution": "Universitas Amikom Yogyakarta",
    "major": "S1 - Teknik Informatika"
  },
  {
    "id": 2,
    "period": "2019 - 2022",
    "institution": "SMA Negeri 3 Temanggung",
    "major": "MIPA"
  }
];

const skills = [
    { name: 'Vue.js',
      level: 'Mahir',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' 
    },

    { name: 'JavaScript', 
      level: 'Mahir',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' 
    },

  

    { name: 'Node.js', 
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
    },

    { name: 'React.js', 
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
    },

    { name: 'MySQL',
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },

    { name: 'Git & GitHub',
      level: 'Mahir', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { name: 'HTML5 & CSS3',
      level: 'Mahir', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    }
  ];
  
const projects = [
  {
    id: 1,
    title: 'MANCING',
    // URL gambar representatif untuk toko online
    image: 'mancing',
    description: 'Platform e‑commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 2,
    title: 'ROBLOX',
    // URL gambar representatif untuk aplikasi manajemen tugas
    image: 'roblox',
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#'
  }
];

module.exports = { educationHistory, skills, projects };
