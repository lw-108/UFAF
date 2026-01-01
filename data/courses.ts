export interface Course {
  id: number
  title: string
  description: string
  category: string
  duration: string
  students: number
  rating: number
  isNew: boolean
  isPopular: boolean
  price: string
  tags: string[]
}

export const coursesData: Course[] = [
  // TECH BASED CLASSES
  {
    id: 1,
    title: "IOT - Internet of Things",
    description: "Learn to build connected devices and IoT systems from scratch",
    category: "Tech Based Classes",
    duration: "8 weeks",
    students: 1250,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹4,999",
    tags: ["IoT", "Embedded", "Sensors"]
  },
  {
    id: 2,
    title: "AI & Robotics",
    description: "Master artificial intelligence and robotics with hands-on projects",
    category: "Tech Based Classes",
    duration: "12 weeks",
    students: 2100,
    rating: 4.9,
    isNew: true,
    isPopular: true,
    price: "₹6,999",
    tags: ["AI", "Machine Learning", "Robotics"]
  },
  {
    id: 3,
    title: "Python Programming",
    description: "Complete Python course from basics to advanced applications",
    category: "Tech Based Classes",
    duration: "10 weeks",
    students: 3500,
    rating: 4.7,
    isNew: false,
    isPopular: true,
    price: "₹3,999",
    tags: ["Programming", "Python", "Web Dev"]
  },
  {
    id: 4,
    title: "Java Programming",
    description: "Enterprise-level Java development with frameworks",
    category: "Tech Based Classes",
    duration: "12 weeks",
    students: 1800,
    rating: 4.6,
    isNew: false,
    isPopular: false,
    price: "₹4,999",
    tags: ["Java", "Spring", "Backend"]
  },
  {
    id: 5,
    title: "HTML, C, C++",
    description: "Fundamentals of web and systems programming",
    category: "Tech Based Classes",
    duration: "10 weeks",
    students: 2800,
    rating: 4.5,
    isNew: false,
    isPopular: false,
    price: "₹3,499",
    tags: ["Web", "C", "C++", "Fundamentals"]
  },
  {
    id: 6,
    title: "App Development",
    description: "Build mobile apps for iOS and Android",
    category: "Tech Based Classes",
    duration: "14 weeks",
    students: 1900,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹5,999",
    tags: ["Mobile", "React Native", "Flutter"]
  },
  {
    id: 7,
    title: "Embedded System",
    description: "Design and program embedded systems",
    category: "Tech Based Classes",
    duration: "10 weeks",
    students: 950,
    rating: 4.7,
    isNew: false,
    isPopular: false,
    price: "₹4,499",
    tags: ["Embedded", "Microcontrollers", "Hardware"]
  },
  {
    id: 8,
    title: "Animation",
    description: "2D and 3D animation using modern tools",
    category: "Tech Based Classes",
    duration: "16 weeks",
    students: 1200,
    rating: 4.6,
    isNew: false,
    isPopular: false,
    price: "₹7,999",
    tags: ["Animation", "Blender", "3D"]
  },
  {
    id: 9,
    title: "13 Days SPL Boot Camp",
    description: "Mixed course covering multiple programming languages",
    category: "Tech Based Classes",
    duration: "13 days",
    students: 850,
    rating: 4.9,
    isNew: true,
    isPopular: true,
    price: "₹2,999",
    tags: ["Bootcamp", "Crash Course", "Mixed"]
  },

  // MATH BASED CLASSES
  {
    id: 10,
    title: "Abacus",
    description: "Mental math techniques using abacus",
    category: "Math Based Classes",
    duration: "8 weeks",
    students: 3100,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹2,499",
    tags: ["Mental Math", "Kids", "Calculation"]
  },
  {
    id: 11,
    title: "Vedic Maths",
    description: "Ancient Indian mathematics techniques",
    category: "Math Based Classes",
    duration: "10 weeks",
    students: 2400,
    rating: 4.7,
    isNew: false,
    isPopular: true,
    price: "₹2,999",
    tags: ["Vedic", "Fast Calculation", "Tricks"]
  },
  {
    id: 12,
    title: "Geometry in Arts",
    description: "Applying mathematical concepts in artistic creations",
    category: "Math Based Classes",
    duration: "8 weeks",
    students: 850,
    rating: 4.6,
    isNew: true,
    isPopular: false,
    price: "₹3,499",
    tags: ["Art", "Geometry", "Creative"]
  },
  {
    id: 13,
    title: "Competitive Math Prep",
    description: "Preparation for various math competitions",
    category: "Math Based Classes",
    duration: "12 weeks",
    students: 1200,
    rating: 4.9,
    isNew: false,
    isPopular: true,
    price: "₹4,999",
    tags: ["Competitive", "Olympiad", "Exams"]
  },

  // INDOOR AND FITNESS
  {
    id: 14,
    title: "Chess",
    description: "Master chess strategies and tactics",
    category: "Indoor & Fitness",
    duration: "8 weeks",
    students: 1800,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹2,499",
    tags: ["Strategy", "Brain Game", "Tactics"]
  },
  {
    id: 15,
    title: "Carrom",
    description: "Professional carrom techniques and gameplay",
    category: "Indoor & Fitness",
    duration: "6 weeks",
    students: 750,
    rating: 4.5,
    isNew: false,
    isPopular: false,
    price: "₹1,999",
    tags: ["Indoor", "Game", "Recreational"]
  },
  {
    id: 16,
    title: "Yoga & Meditation",
    description: "Complete yoga and meditation for mental peace",
    category: "Indoor & Fitness",
    duration: "12 weeks",
    students: 3200,
    rating: 4.9,
    isNew: false,
    isPopular: true,
    price: "₹3,999",
    tags: ["Health", "Wellness", "Mindfulness"]
  },

  // HOBBIES & LIFESTYLE
  {
    id: 17,
    title: "Drawing",
    description: "Fundamental drawing techniques and styles",
    category: "Hobbies & Lifestyle",
    duration: "10 weeks",
    students: 2100,
    rating: 4.7,
    isNew: false,
    isPopular: true,
    price: "₹3,499",
    tags: ["Art", "Sketching", "Creative"]
  },
  {
    id: 18,
    title: "Hand Writing & Calligraphy",
    description: "Improve handwriting and learn calligraphy",
    category: "Hobbies & Lifestyle",
    duration: "8 weeks",
    students: 1600,
    rating: 4.6,
    isNew: false,
    isPopular: true,
    price: "₹2,999",
    tags: ["Writing", "Art", "Skill"]
  },
  {
    id: 19,
    title: "Photography",
    description: "Professional photography techniques",
    category: "Hobbies & Lifestyle",
    duration: "12 weeks",
    students: 1900,
    rating: 4.8,
    isNew: true,
    isPopular: true,
    price: "₹4,999",
    tags: ["Camera", "Creative", "Professional"]
  },
  {
    id: 20,
    title: "Music",
    description: "Learn vocal and instrumental music",
    category: "Hobbies & Lifestyle",
    duration: "16 weeks",
    students: 2300,
    rating: 4.7,
    isNew: false,
    isPopular: true,
    price: "₹5,999",
    tags: ["Vocal", "Instruments", "Art"]
  },
  {
    id: 21,
    title: "Painting",
    description: "Various painting techniques and styles",
    category: "Hobbies & Lifestyle",
    duration: "12 weeks",
    students: 1400,
    rating: 4.6,
    isNew: false,
    isPopular: false,
    price: "₹4,499",
    tags: ["Art", "Colors", "Creative"]
  },
  {
    id: 22,
    title: "Film Making",
    description: "Complete film making from script to screen",
    category: "Hobbies & Lifestyle",
    duration: "20 weeks",
    students: 650,
    rating: 4.9,
    isNew: true,
    isPopular: false,
    price: "₹8,999",
    tags: ["Video", "Production", "Creative"]
  },
  {
    id: 23,
    title: "Art & Craft",
    description: "Creative art and craft projects",
    category: "Hobbies & Lifestyle",
    duration: "8 weeks",
    students: 1800,
    rating: 4.5,
    isNew: false,
    isPopular: true,
    price: "₹2,999",
    tags: ["Craft", "Creative", "DIY"]
  },

  // STUDY BASED CLASSES
  {
    id: 24,
    title: "Tuitions (Grade 3rd to 12th)",
    description: "Comprehensive tuition for school students",
    category: "Study Based Classes",
    duration: "Ongoing",
    students: 4200,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹1,999/month",
    tags: ["School", "Academic", "CBSE"]
  },
  {
    id: 25,
    title: "NEET Preparation",
    description: "Complete NEET exam preparation",
    category: "Study Based Classes",
    duration: "12 months",
    students: 1800,
    rating: 4.9,
    isNew: false,
    isPopular: true,
    price: "₹9,999",
    tags: ["Medical", "Exam", "Competitive"]
  },
  {
    id: 26,
    title: "GATE Preparation",
    description: "GATE exam preparation for engineering graduates",
    category: "Study Based Classes",
    duration: "10 months",
    students: 1200,
    rating: 4.7,
    isNew: false,
    isPopular: true,
    price: "₹8,999",
    tags: ["Engineering", "Exam", "PG"]
  },
  {
    id: 27,
    title: "JEE Preparation",
    description: "Comprehensive JEE Main & Advanced preparation",
    category: "Study Based Classes",
    duration: "12 months",
    students: 2500,
    rating: 4.9,
    isNew: false,
    isPopular: true,
    price: "₹11,999",
    tags: ["Engineering", "Exam", "Competitive"]
  },
  {
    id: 28,
    title: "Phonics",
    description: "English phonics for early learners",
    category: "Study Based Classes",
    duration: "8 weeks",
    students: 1900,
    rating: 4.6,
    isNew: false,
    isPopular: true,
    price: "₹2,499",
    tags: ["English", "Kids", "Language"]
  },
  {
    id: 29,
    title: "Spoken English",
    description: "Fluency and communication skills in English",
    category: "Study Based Classes",
    duration: "12 weeks",
    students: 3100,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹3,999",
    tags: ["Communication", "Language", "Speaking"]
  }
]

export const categories = [
  "All Courses",
  "Tech Based Classes",
  "Math Based Classes",
  "Indoor & Fitness",
  "Hobbies & Lifestyle",
  "Study Based Classes"
]