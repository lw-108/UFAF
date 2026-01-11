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
  trendingScore?: number; // Added for market trend calculation
}

export const coursesData: Course[] = [
  // TECH BASED CLASSES
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
    trendingScore: 92
  },
  {
    id: 2,
    title: "IOT - Internet of Things",
    description: "Learn to build connected devices and IoT systems from scratch",
    category: "Tech Based Classes",
    duration: "8 weeks",
    students: 1250,
    rating: 4.8,
    isNew: false,
    isPopular: true,
    price: "₹4,999",
    tags: ["IoT", "Embedded", "Sensors"],
    trendingScore: 78
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
    tags: ["Programming", "Python", "Web Dev"],
    trendingScore: 85
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
    tags: ["Java", "Spring", "Backend"],
    trendingScore: 65
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
    tags: ["Web", "C", "C++", "Fundamentals"],
    trendingScore: 58
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
    tags: ["Mobile", "React Native", "Flutter"],
    trendingScore: 82
  },
  {
    id: 7,
    title: "Animation",
    description: "2D and 3D animation using modern tools",
    category: "Tech Based Classes",
    duration: "16 weeks",
    students: 1200,
    rating: 4.6,
    isNew: false,
    isPopular: false,
    price: "₹7,999",
    tags: ["Animation", "Blender", "3D"],
    trendingScore: 55
  },
  {
    id: 9,
    title: "SPL Worksops",
    description: "Mixed course covering multiple programming languages",
    category: "Tech Based Classes",
    duration: "20 days",
    students: 850,
    rating: 4.9,
    isNew: true,
    isPopular: true,
    price: "₹2,999",
    tags: ["Bootcamp", "Crash Course", "Mixed"],
    trendingScore: 88
  },

  // MATH BASED CLASSES
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
    tags: ["Vedic", "Fast Calculation", "Tricks"],
    trendingScore: 72
  },
  
 
];

export const categories = [
  "All Courses",
  "Tech Based Classes",
  "Math Based Classes",
  "Study Based Classes"
];

// Helper function to calculate trend score based on market factors
export const calculateTrendScore = (course: Course): number => {
  let score = 0;
  
  // Base score from rating (0-50 points)
  score += course.rating * 10;
  
  // Student popularity (0-20 points)
  if (course.students > 3000) score += 20;
  else if (course.students > 2000) score += 15;
  else if (course.students > 1000) score += 10;
  else score += 5;
  
  // New course bonus
  if (course.isNew) score += 10;
  
  // Popular course bonus
  if (course.isPopular) score += 15;
  
  // Price factor (affordable courses get bonus)
  const price = parseInt(course.price.replace(/[^0-9]/g, ''));
  if (price < 3000) score += 10;
  else if (price < 5000) score += 5;
  
  // Duration factor (shorter courses preferred)
  if (course.duration.includes('days')) score += 15;
  else if (course.duration.includes('weeks') && parseInt(course.duration) <= 12) score += 10;
  
  // Category weight (Tech gets highest weight)
  if (course.category === "Tech Based Classes") score += 20;
  else if (course.category === "Study Based Classes") score += 15;
  else if (course.category === "Math Based Classes") score += 10;
  
  return Math.min(100, Math.max(0, score));
};

// Calculate trend scores for all courses (if not already calculated)
coursesData.forEach(course => {
  if (!course.trendingScore) {
    course.trendingScore = calculateTrendScore(course);
  }
});

// Sort courses by trend score (descending)
export const getTrendingCourses = () => {
  return [...coursesData].sort((a, b) => 
    (b.trendingScore || 0) - (a.trendingScore || 0)
  );
};

// Get courses by category
export const getCoursesByCategory = (category: string) => {
  if (category === "All Courses") return coursesData;
  return coursesData.filter(course => course.category === category);
};

// Get market stats
export const marketStats = {
  totalCourses: coursesData.length,
  totalStudents: coursesData.reduce((acc, course) => acc + course.students, 0),
  averageRating: parseFloat((coursesData.reduce((acc, course) => acc + course.rating, 0) / coursesData.length).toFixed(1)),
  averagePrice: Math.round(coursesData.reduce((acc, course) => acc + parseInt(course.price.replace(/[^0-9]/g, '')), 0) / coursesData.length),
  trendingTechCourses: coursesData.filter(c => c.category === "Tech Based Classes" && c.trendingScore && c.trendingScore > 75).length,
  trendingStudyCourses: coursesData.filter(c => c.category === "Study Based Classes" && c.trendingScore && c.trendingScore > 70).length,
  highDemandCourses: coursesData.filter(c => c.isPopular).length
};