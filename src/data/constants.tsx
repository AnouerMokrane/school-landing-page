import { Crown, GraduationCap } from "lucide-react";
import { PiFaceMaskFill } from "react-icons/pi";
import { FaFlag } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { IoNuclearOutline, IoMusicalNotes, IoBulb } from "react-icons/io5";
import { AiFillPieChart } from "react-icons/ai";
import { TbAntennaBars5 } from "react-icons/tb";
import { MdElectricBolt, MdSunny, MdScience } from "react-icons/md";
import { FaBookOpen, FaPaintBrush, FaStar, FaUsers } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { BsStars } from "react-icons/bs";

export type CardProps = {
  icon: React.ReactNode;
  heading: string;
  text: string;
};

export type ITestimonial = {
  image: string;
  username: string;
  rate: number;
  text: string;
};

export type IFaq = {
  question: string;
  answer: string;
};

export type ILinkData = {
  path: string;
  title: string;
  desc: string;
};

export type ITimeLine = {
  year: string;
  title: string;
  desc: string;
};

export type ITeam = {
  imageUrl: string;
  username: string;
  qualification: string;
  desc: string;
};

export const benefitsCards: CardProps[] = [
  {
    icon: <GraduationCap className="w-full text-2xl" />,
    heading: "Holistic Learning Approach",
    text: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    icon: <Crown className="w-full text-2xl" />,
    heading: "Experienced Educators",
    text: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    icon: <PiFaceMaskFill className="w-full text-2xl" />,
    heading: "Nurturing Environment",
    text: "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    icon: <FaFlag className="w-full text-2xl" />,
    heading: "Play-Based Learning",
    text: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    icon: <IoNuclearOutline className="w-full text-2xl" />,
    heading: "Individualized Attention",
    text: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    icon: <HiUsers className="w-full text-2xl" />,
    heading: "Parent Involvement",
    text: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];

export const testimonialsData: ITestimonial[] = [
  {
    image: "./assets/profile1.png",
    username: "Jennifer B",
    rate: 5,
    text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    image: "./assets/profile2.png",
    username: "David K",
    rate: 5,
    text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    image: "./assets/profile3.png",
    username: "Emily L",
    rate: 5,
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
];

export const faqs: IFaq[] = [
  {
    question: "What are the school hours at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "Is there a uniform policy for students?",
    answer:
      "Yes, we have a uniform policy. Students are required to wear the school uniform during school hours.",
  },
  {
    question: "What extracurricular activities are available for students?",
    answer:
      "We offer a variety of extracurricular activities including sports, music, art, and more.",
  },
  {
    question: "How do you handle food allergies and dietary restrictions?",
    answer:
      "We have a strict policy to manage food allergies and dietary restrictions with utmost care.",
  },
  {
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
    answer:
      "Our teacher-to-student ratio is 1:10, ensuring personalized attention for each student.",
  },
  {
    question: "How do you handle discipline and behavior management?",
    answer:
      "We have a positive discipline policy focused on respectful and supportive behavior management.",
  },
  {
    question: "How do I apply for admission to Little Learners Academy?",
    answer:
      "You can apply for admission online through our website or contact our admissions office for assistance.",
  },
];

export const linksdata: ILinkData[] = [
  {
    path: "about-us",
    title: "About Us",
    desc: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
  },
  {
    path: "academics",
    title: "Academics",
    desc: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
  },

  {
    path: "student-life",
    title: "Student Life",
    desc: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
  },
  {
    path: "admissions",
    title: "Admissions",
    desc: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
  },
];

export const achievementsData: CardProps[] = [
  {
    icon: <AiFillPieChart className="w-full text-2xl" />,
    heading: "Outstanding Early Childhood Education Awar",
    text: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },

  {
    icon: <TbAntennaBars5 className="w-full text-2xl" />,
    heading: "Innovative STEAM Education Award",
    text: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    icon: <MdElectricBolt className="w-full text-2xl" />,
    heading: "Environmental Stewardship Award",
    text: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
];

export const timelineData: ITimeLine[] = [
  {
    year: "2023",
    title: "Resilience and Future Horizons",
    desc: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    year: "2017",
    title: "Innovation and Technology",
    desc: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    year: "2012",
    title: "Expansion and Recognition",
    desc: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    year: "2005",
    title: "Inception and Growth",
    desc: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
  },
];

export const teamMemebers: ITeam[] = [
  {
    imageUrl: "./assets/member1.png",
    username: "Ms. Sarah Anderson",
    qualification: "Bachelor's Degree in Early Childhood Education",
    desc: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    imageUrl: "./assets/member2.png",
    username: "Mr. David Roberts",
    qualification: "Master's Degree in Elementary Education",
    desc: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    imageUrl: "./assets/member3.png",
    username: "Ms. Emily Hernandez",
    qualification: "Diploma in Child Psychology",
    desc: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    imageUrl: "./assets/member4.png",
    username: "Mr. Michael Turner",
    qualification: "Bachelor's Degree in Physical Education",
    desc: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
  {
    imageUrl: "./assets/member5.png",
    username: "Ms. Jessica Lee",
    qualification: "Master's Degree in Special Education",
    desc: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
  {
    imageUrl: "./assets/member6.png",
    username: "Mr. William Parker",
    qualification: "Qualification: Bachelor's Degree in Fine Arts",
    desc: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  },
];

export const featuresData: CardProps[] = [
  {
    icon: <FaBookOpen className="w-full text-2xl" />,
    heading: "Thematic Learning",
    text: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
  },
  {
    icon: <TbAntennaBars5 className="w-full text-2xl" />,
    heading: "STEAM Education",
    text: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
  },
  {
    icon: <IoIosChatbubbles className="w-full text-2xl" />,
    heading: "Language Immersion",
    text: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
  },
  {
    icon: <FaPaintBrush className="w-full text-2xl" />,
    heading: "Art and Creativity",
    text: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
  },
  {
    icon: <MdSunny className="w-full text-2xl" />,
    heading: "Outdoor Education",
    text: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
  },
  {
    icon: <FaStar className="w-full text-2xl" />,
    heading: "Play-Based Learning",
    text: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
  },
];

export const learningPathData = [
  {
    imgUrl: "./assets/arts-image.png",
    title: "Language Arts",
    text: "Reading, writing, storytelling, and communication skills.",
  },
  {
    imgUrl: "./assets/mathematics-image.png",
    title: "Mathematics",
    text: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    imgUrl: "./assets/science-image.png",
    title: "Science",
    text: "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    imgUrl: "./assets/social-studies-image.png",
    title: "Social Studies",
    text: "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    imgUrl: "./assets/craft-image.png",
    title: "Arts and Crafts",
    text: "Encouraging creativity through various art forms and crafts.",
  },
  {
    imgUrl: "./assets/physical-education-image.png",
    title: "Physical Education",
    text: "Promoting physical fitness, coordination, and teamwork.",
  },
];

export const gallery = [
  {
    title: "Classrooms",
    desc: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: [
      "./assets/classroom1.png",
      "./assets/classroom2.png",
      "./assets/classroom3.png",
      "./assets/classroom4.png",
    ],
  },
  {
    title: "Library",
    desc: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    images: [
      "./assets/library-image1.png",
      "./assets/library-image2.png",
      "./assets/library-image3.png",
      "./assets/library-image4.png",
    ],
  },
  {
    title: "Science Lab",
    desc: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    images: [
      "./assets/science-lab1.png",
      "./assets/science-lab2.png",
      "./assets/science-lab3.png",
      "./assets/science-lab4.png",
    ],
  },
  {
    title: "Computer Lab",
    desc: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
    images: [
      "./assets/computer-lab1.png",
      "./assets/computer-lab2.png",
      "./assets/computer-lab3.png",
      "./assets/computer-lab4.png",
    ],
  },
  {
    title: "Garden and Nature Area",
    desc: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    images: [
      "./assets/garden1.png",
      "./assets/garden2.png",
      "./assets/garden3.png",
      "./assets/garden4.png",
    ],
  },
];

export const admissionProcessData = [
  {
    step: 1,
    title: "Inquiry",
    description:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
  },
  {
    step: 2,
    title: "School Tour",
    description:
      "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
  },
  {
    step: 3,
    title: "Application Form",
    description:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    step: 4,
    title: "Parent Interview",
    description:
      "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
  },
  {
    step: 5,
    title: "Student Assessment",
    description:
      "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
  },
  {
    step: 6,
    title: "Acceptance",
    description:
      "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
  },
];

export const extracurricularActivities: CardProps[] = [
  {
    icon: <MdElectricBolt className="w-full text-2xl" />,
    heading: "Sports and Athletics",
    text: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
  },
  {
    icon: <FaPaintBrush className="w-full text-2xl" />,
    heading: "Art and Creativity",
    text: "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
  },
  {
    icon: <IoMusicalNotes className="w-full text-2xl" />,
    heading: "Music and Performing Arts",
    text: "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
  },
  {
    icon: <GrLanguage className="w-full text-2xl" />,
    heading: "Language Club",
    text: "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
  },
  {
    icon: <MdScience className="w-full text-2xl" />,
    heading: "Science Clubs",
    text: "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
  },
  {
    icon: <BsStars className="w-full text-2xl" />,
    heading: "Cooking and Culinary Arts",
    text: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
  },
];

export const eventsData = [
  {
    title: "Annual Sports Day",
    description:
      "A day filled with friendly competition, team spirit, and sportsmanship.",
    imgUrl: "./assets/sports_day.png",
  },
  {
    title: "Cultural Festivals",
    description:
      "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
    imgUrl: "./assets/cultural_festivals.png",
  },
  {
    title: "Art Exhibitions",
    description:
      "Showcasing our students' artistic talents through exhibitions and displays.",
    imgUrl: "./assets/art_exhibitions.png",
  },
  {
    title: "Science Fair",
    description:
      "A platform for budding scientists to present their innovative projects and experiments.",
    imgUrl: "./assets/science_fair.png",
  },
  {
    title: "International Day",
    description:
      "A vibrant celebration of our diverse community, embracing cultures from around the world.",
    imgUrl: "./assets/international_day.png",
  },
  {
    title: "Graduation Ceremony",
    description:
      "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
    imgUrl: "./assets/graduation_ceremony.png",
  },
];

export const studentSupportData: CardProps[] = [
  {
    icon: <IoBulb className="w-full text-2xl" />,
    heading: "Counseling",
    text: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
  },
  {
    icon: <FaBookOpen className="w-full text-2xl" />,
    heading: "Learning Support",
    text: "Our educators provide additional assistance to students who may require extra support in their academic journey.",
  },
  {
    icon: <FaUsers className="w-full text-2xl" />,
    heading: "Parent-Teacher Collaboration",
    text: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
  },
];
