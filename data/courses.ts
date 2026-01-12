export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  isNew: boolean;
  isPopular: boolean;
  price: string;
  tags: string[];
  image: string;
  displayOrder: number; // Added for fixed ordering
}

export const coursesData: Course[] = [
  // 1. AI & Robotics (First)
  {
    id: 1,
    title: "AI & Robotics",
    description: "Master artificial intelligence and robotics with hands-on projects",
    category: "Tech Based Classes",
    duration: "12 weeks",
    students: 2100,
    rating: 4.9,
    isNew: true,
    isPopular: true,
    price: "₹6,999",
    tags: ["AI", "Machine Learning", "Robotics"],
    image: "/ai.png",
    displayOrder: 1
  },
  
  // 2. IOT (Second)
  {
    id: 2,
    title: "IOT",
    description: "Learn to build connected devices and IoT systems from scratch",
    category: "Tech Based Classes",
    duration: "8 weeks",
    students: 1850,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹4,999",
    tags: ["IoT", "Embedded", "Sensors"],
    image: "/iot.png",
    displayOrder: 2
  },
  
  // 3. Java (Third)
  {
    id: 3,
    title: "Java",
    description: "Enterprise-level Java development with frameworks",
    category: "Tech Based Classes",
    duration: "12 weeks",
    students: 3200,
    rating: 4.7,
    isNew: false,
    isPopular: true,
    price: "₹4,999",
    tags: ["Java", "Spring", "Backend"],
    image: "/java.png",
    displayOrder: 3
  },
  
  // 4. Python (Fourth)
  {
    id: 4,
    title: "Python",
    description: "Complete Python course from basics to advanced applications",
    category: "Tech Based Classes",
    duration: "10 weeks",
    students: 4500,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹3,999",
    tags: ["Programming", "Python", "Web Dev"],
    image: "/python.png",
    displayOrder: 4
  },
  
  // 5. App Development (Fifth)
  {
    id: 5,
    title: "App Development",
    description: "Build mobile apps for iOS and Android",
    category: "Tech Based Classes",
    duration: "14 weeks",
    students: 2900,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹5,999",
    tags: ["Mobile", "React Native", "Flutter"],
    image: "/app.png",
    displayOrder: 5
  },
  
  // 6. Animation (Sixth)
  {
    id: 6,
    title: "Animation",
    description: "2D and 3D animation using modern tools",
    category: "Tech Based Classes",
    duration: "16 weeks",
    students: 1800,
    rating: 4.6,
    isNew: false,
    isPopular: true,
    price: "₹7,999",
    tags: ["Animation", "Blender", "3D"],
    image: "/ani.png",
    displayOrder: 6
  },
  
  // 7. Web Development (Seventh)
  {
    id: 7,
    title: "Web Development",
    description: "Full-stack web development with modern frameworks",
    category: "Tech Based Classes",
    duration: "12 weeks",
    students: 3800,
    rating: 4.7,
    isNew: false,
    isPopular: true,
    price: "₹4,999",
    tags: ["Web", "React", "Node.js", "Full-stack"],
    image: "/web.png",
    displayOrder: 7
  },
  
  // 8. Vedic Maths (Eighth)
  {
    id: 8,
    title: "Vedic Maths",
    description: "Ancient Indian mathematics techniques for fast calculations",
    category: "Math Based Classes",
    duration: "10 weeks",
    students: 2400,
    rating: 4.7,
    isNew: false,
    isPopular: true,
    price: "₹2,999",
    tags: ["Vedic", "Fast Calculation", "Tricks"],
    image: "/vedic-math.png",
    displayOrder: 8
  },
  
  // 9. Special Workshop (Ninth)
  {
    id: 9,
    title: "Special Workshop",
    description: "Intensive workshops covering latest technologies and skills",
    category: "Tech Based Classes",
    duration: "5 days",
    students: 1850,
    rating: 4.9,
    isNew: true,
    isPopular: true,
    price: "₹2,999",
    tags: ["Workshop", "Bootcamp", "Intensive"],
    image: "/workshop.png",
    displayOrder: 9
  },
  
  // 10. Handwriting (Tenth)
  {
    id: 10,
    title: "Handwriting",
    description: "Improve your handwriting with proven techniques and practice",
    category: "Study Based Classes",
    duration: "8 weeks",
    students: 1600,
    rating: 4.6,
    isNew: true,
    isPopular: true,
    price: "₹1,999",
    tags: ["Handwriting", "Penmanship", "Writing"],
    image: "/calli.png",
    displayOrder: 10
  },
  
  // 11. Spoken English (Eleventh)
  {
    id: 11,
    title: "Spoken English",
    description: "Master English communication skills for daily and professional use",
    category: "Study Based Classes",
    duration: "12 weeks",
    students: 3200,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹2,999",
    tags: ["English", "Communication", "Speaking"],
    image: "/spkenglish.png",
    displayOrder: 11
  },
];

export const categories = [
  "All Courses",
  "Tech Based Classes",
  "Math Based Classes",
  "Study Based Classes"
];

// Function to get courses in exact fixed order
export const getCoursesInFixedOrder = () => {
  return [...coursesData].sort((a, b) => a.displayOrder - b.displayOrder);
};

// Function to get courses by category (maintaining fixed order)
export const getCoursesByCategory = (category: string) => {
  const allCourses = getCoursesInFixedOrder();
  if (category === "All Courses") return allCourses;
  return allCourses.filter(course => course.category === category);
};

// Remove any sorting logic that interferes with fixed order
export const getTrendingCourses = () => {
  return getCoursesInFixedOrder(); // Just return fixed order
};

// Get market stats
export const marketStats = {
  totalCourses: coursesData.length,
  totalStudents: coursesData.reduce((acc, course) => acc + course.students, 0),
  averageRating: parseFloat((coursesData.reduce((acc, course) => acc + course.rating, 0) / coursesData.length).toFixed(1)),
  averagePrice: Math.round(coursesData.reduce((acc, course) => acc + parseInt(course.price.replace(/[^0-9]/g, '')), 0) / coursesData.length),
  techCourses: coursesData.filter(c => c.category === "Tech Based Classes").length,
  studyCourses: coursesData.filter(c => c.category === "Study Based Classes").length,
  mathCourses: coursesData.filter(c => c.category === "Math Based Classes").length,
};