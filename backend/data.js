// backend/data.js
const educationHistory =[
  {
    id: 1,
    period: "2024 - Sekarang",
    institution: "Universitas Amikom Yogyakarta",
    major: "S1 - Teknik Informatika",
  },
  {
    id: 2,
    period: "2021 - 2024",
    institution: "SMA Negeri 3 Temanggung",
    major: "MIPA",
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
    title: 'Website Profile Company Es Kimo',
    image: 'eskimo', // ambil dari imageMap
    description: 'Platform profile perusahaan supplier es kristal',
    tech: ['CodeIgniter', 'Bootstrap', 'MySQL'],
    link: 'https://github.com/bagoongyoo/Final-Project-Web.git'
  },
  {
    title: 'Aplikasi Rental Motor',
    image: 'rental', // ambil dari imageMap
    description: 'Aplikasi Untuk Rental Motor',
    tech: ['C#'],
    link: 'https://github.com/FikihRizaldi/Sewa_motor.git'
  }
];

module.exports = { educationHistory, skills, projects };
