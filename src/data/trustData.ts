import { Institution, SkillProgram, GalleryItem, Leader, Testimonial } from '../types';

export const trustInfo = {
  name: "Shibham Education & Social Welfare Trust",
  shortName: "Shibham Trust",
  tagline: "Empowering education, skill development, and social welfare for a brighter and more equitable future.",
  foundedYear: 2006,
  registeredOffice: {
    title: "Registered Office",
    address: "Vill & P.O- Aurangabad, P.S- Suti, Dist - Murshidabad, West Bengal - 742201",
    mapQuery: "Aurangabad, Suti, Murshidabad, West Bengal 742201"
  },
  corporateOffice: {
    title: "Corporate Office",
    address: "30 Jaharlal Nehru Road, Chowranghee Mansion Building, 3rd Floor, Room No. 303, Park Street, Kolkata - 700016",
    mapQuery: "Chowranghee Mansion Building, Park Street, Kolkata 700016"
  },
  phones: ["+91 70019 08806", "+91 78658 44944"],
  emails: ["info@shibhamtrust.in", "shibhameducation.official@gmail.com"],
  logo: "/images/logos.png"
};

export const trustStats = [
  { value: "32,000+", label: "Youth Skilled & Trained", sublabel: "Empowered for career readiness" },
  { value: "9+", label: "Renowned Institutions", sublabel: "From Medical to Polytechnic" },
  { value: "85%+", label: "Placement Assistance", sublabel: "Pan-India corporate tie-ups" },
  { value: "2 Million", label: "10-Year Skill Goal", sublabel: "Nationwide youth empowerment" },
  { value: "19+ Yrs", label: "Social Welfare Legacy", sublabel: "Continuous service since 2006" }
];

export const leadership: Leader[] = [
  {
    name: "Jakir Hossain",
    role: "Founder & Chairman",
    title: "Visionary Industrialist & Philanthropist",
    image: "/images/founder.jpg",
    bio: "Under the pioneering leadership of industrialist Jakir Hossain, Shibham Trust was founded in 2006 to bridge the critical gap between traditional degrees and real-world industrial employability for youth across West Bengal and India."
  },
  {
    name: "Dipak Kumar Das",
    role: "General Secretary",
    title: "Dedicated Social Worker & Administrator",
    image: "/images/dpk.jpg",
    bio: "Renowned social activist Dipak Kumar Das oversees community welfare operations, ensuring our healthcare missions, grassroots education, and skill development reach the most marginalized and deserving students."
  }
];

export const institutions: Institution[] = [
  {
    id: "jhmcri",
    name: "Jakir Hossain Medical College & Research Institute",
    category: "Medical & Healthcare",
    image: "/images/11.png",
    address: "Vill.-Prasadpur, P.O-Gankar, P.S-Raghunathganj, Dist.-Murshidabad",
    pin: "742227",
    website: "https://jhmcri.com/",
    courses: ["MBBS", "Clinical Training", "Paramedical Sciences", "Nursing Care"],
    description: "State-of-the-art super-specialty hospital and medical college providing premier healthcare services and world-class medical education in rural Bengal."
  },
  {
    id: "aps",
    name: "Aurangabad Public School",
    category: "School Education",
    image: "/images/aurangabad_public_school.jpg",
    address: "Vill.+P.O - Aurangabad, P.S- Suti, Dist. - Murshidabad",
    pin: "742201",
    website: "https://www.schoolaps.in/",
    courses: ["Pre-Primary", "Primary Wing", "Secondary Education", "Holistic Curriculum"],
    description: "A premier English-medium CBSE curriculum school offering progressive and value-based schooling to nurture tomorrow's global citizens."
  },
  {
    id: "aurangabad-ptti",
    name: "Aurangabad B.Ed & PTTI",
    category: "Teacher Training",
    image: "/images/15.png",
    address: "Vill.+P.O - Aurangabad, P.S - Suti, Dist. - Murshidabad",
    pin: "742201",
    website: "https://aurangabadptti.com/",
    courses: ["B.Ed (Bachelor of Education)", "D.El.Ed (Diploma in Elementary Education)"],
    description: "NCTE-recognized premier institution dedicated to developing professional, passionate, and scientifically trained modern educators."
  },
  {
    id: "jh-bed",
    name: "Jakir Hossain B.Ed & PTTI",
    category: "Teacher Training",
    image: "/images/cardh1.png",
    address: "Vill & P.O. – Miapur, Dist. - Murshidabad",
    pin: "742235",
    website: "http://jakirhossainbed.com.shibhameduswt.net/contact.html",
    courses: ["B.Ed (Bachelor of Education)", "D.El.Ed (Diploma in Elementary Education)"],
    description: "Empowering aspiring teachers with modern pedagogical methods, ICT classrooms, and experiential teaching practice."
  },
  {
    id: "jhip",
    name: "Jakir Hossain Institute of Pharmacy",
    category: "Pharmacy",
    image: "/images/11.png",
    address: "Vill & P.O. – Miapur, Dist. - Murshidabad",
    pin: "742235",
    website: "https://www.jhip.in/",
    courses: ["B.Pharm (Bachelor of Pharmacy)", "D.Pharm (Diploma in Pharmacy)"],
    description: "PCI & AICTE approved pharmaceutical institution with cutting-edge analytical laboratories, research setups, and hospital affiliations."
  },
  {
    id: "jhp",
    name: "Jakir Hossain Institute of Polytechnic",
    category: "Engineering & Technical",
    image: "/images/13.png",
    address: "Vill- Hapania, P.O- Dafahat, P.S- Suti, Dist- Murshidabad",
    pin: "742224",
    website: "http://jakirhossainpolytechnic.com.shibhameduswt.net/about.php",
    courses: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering"],
    description: "Premier AICTE-approved diploma engineering institute equipping future engineers with hands-on industrial skills and machinery labs."
  },
  {
    id: "eoa",
    name: "English Oriental Academy",
    category: "School Education",
    image: "/images/16.png",
    address: "Vill.-Hapania, P.O-Dafahat, P.S- Suti, Dist.-Murshidabad",
    pin: "742224",
    website: "https://www.englishoriental.org/",
    courses: ["Modern English Medium", "Science Labs", "Sports & Arts", "Personality Development"],
    description: "Excellence in high-standard foundational schooling combining academic rigor with ethical values and digital classrooms."
  },
  {
    id: "jsptti",
    name: "JS PTTI",
    category: "Teacher Training",
    image: "/images/9.png",
    address: "Vill+P.O - Hapania, P.S - Suti, Dist. - Murshidabad",
    pin: "742224",
    website: "https://jsptti.com/",
    courses: ["D.El.Ed (Diploma in Elementary Education)"],
    description: "Dedicated to elementary teacher training with state-of-the-art practice teaching facilities, micro-teaching labs, and library resources."
  },
  {
    id: "nathulal",
    name: "Nathulal Das B.Ed & PTTI",
    category: "Teacher Training",
    image: "/images/cardh3.png",
    address: "Vill-Manikpur, P.O-Dafahat, P.S-Suti, Dist- Murshidabad",
    pin: "742224",
    website: "https://nathulaldasptti.com/",
    courses: ["B.Ed", "D.El.Ed"],
    description: "Committed to quality teacher education with experienced faculty, digital smart boards, and regular pedagogical workshops."
  }
];

export const skillPrograms: SkillProgram[] = [
  {
    id: "pmkvy",
    title: "PMKVY Skill Certification",
    partner: "Pradhan Mantri Kaushal Vikas Yojana",
    studentsTrained: "3,000+ Students Certified",
    description: "Flagship scheme of the Ministry of Skill Development & Entrepreneurship (MSDE) providing industry-standard training and recognized certifications.",
    image: "/images/pmkvy.jpg",
    features: ["Govt of India Certification", "100% Free Training & Toolkit", "Assessment & Monetary Reward", "Job Fair Placement Drives"],
    externalUrl: "https://www.skillindiadigital.gov.in/pmkvy-dashboard",
    isGovernment: true
  },
  {
    id: "nsdc",
    title: "NSDC Specialized Programs",
    partner: "National Skill Development Corporation",
    studentsTrained: "2,176+ Students Enrolled",
    description: "Official training partner executing industry-demand oriented courses bridging technical competence and employer expectations.",
    image: "/images/nsdc.jpg",
    features: ["Industry Alignment", "Corporate Soft-skills Module", "National Recognition", "Direct Employer Interviews"],
    externalUrl: "https://nsdcindia.org/",
    isGovernment: true
  },
  {
    id: "pbssd",
    title: "PBSSD (Utkarsh Bangla)",
    partner: "Paschim Banga Society for Skill Development",
    studentsTrained: "1,345+ Youths Empowered",
    description: "West Bengal state-level flagship mission dedicated to non-formal vocational education and immediate wage or self-employment opportunities.",
    image: "/images/pbssd.jpg",
    features: ["State Govt Certified", "Localized Job Placements", "Stipend & Subsidized Materials", "Practical Workshops"],
    externalUrl: "https://www.pbssd.gov.in/",
    isGovernment: true
  },
  {
    id: "free-coaching",
    title: "Jakir Hossain Free Coaching & Skill Center",
    partner: "Shibham Trust Social Initiative",
    studentsTrained: "12,000+ Underprivileged Students",
    description: "Specialized initiative providing completely free competitive exam coaching, language lab training, and computer literacy for needy students.",
    image: "/images/freecoch.jpg",
    features: ["Zero Course Fee", "Free Study Materials & Books", "Expert Mentors & Faculty", "Career Counseling Guidance"],
    isGovernment: false
  },
  {
    id: "wbscl",
    title: "WBSCL Swarojgar Programs",
    partner: "West Bengal Swarojgar Corporation Limited",
    studentsTrained: "1,931+ Self-Reliant Candidates",
    description: "Micro-enterprise and entrepreneurship skill development helping young men and women launch small businesses and cooperative ventures.",
    image: "/images/jkr.jpg",
    features: ["Bank Loan Assistance", "Micro-Business Plans", "Technical Trades Mastery", "Govt Subsidy Support"],
    isGovernment: true
  },
  {
    id: "skill-india",
    title: "Skill India Digital & CSS-VSE",
    partner: "Directorate of Vocational Education (DVET)",
    studentsTrained: "Pan-India Outreach",
    description: "Integration with modern digital skill portals and vocational school education programs to ensure job-readiness right after secondary schooling.",
    image: "/images/bg_1.jpg",
    features: ["Digital Portfolio Creation", "AI & IT Basics", "NSQF Aligned Curriculum", "Apprenticeship Connect"],
    externalUrl: "https://www.skillindiadigital.gov.in/home",
    isGovernment: true
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g0",
    title: "Aurangabad Public School Main Academic Campus",
    category: "Campus Life",
    image: "/images/aurangabad_public_school.jpg"
  },
  {
    id: "g1",
    title: "Vocational Skill Development Practical Lab",
    category: "Skill Training",
    image: "/images/476798867_1095517202376228_3506962943362267374_n.jpg"
  },
  {
    id: "g2",
    title: "Free Community Health Checkup & Medical Camp",
    category: "Medical Camps",
    image: "/images/458921454_982618210332795_9051489971421186320_n.jpg"
  },
  {
    id: "g3",
    title: "Campus Interactive Learning & Digital Classroom",
    category: "Campus Life",
    image: "/images/458920832_982618403666109_8184910501851362282_n.jpg"
  },
  {
    id: "g4",
    title: "Annual Education Day & Cultural Convocation",
    category: "Campus Life",
    image: "/images/485151008_1122502523011029_5824135456418508326_n.jpg"
  },
  {
    id: "g5",
    title: "Student Practical Nursing & Healthcare Demonstration",
    category: "Medical Camps",
    image: "/images/456115655_968986398362643_1764745489678812901_n.jpg"
  },
  {
    id: "g6",
    title: "Youth Certificate Distribution Ceremony",
    category: "Skill Training",
    image: "/images/456142197_968987428362540_3588561853696781704_n.jpg"
  },
  {
    id: "g7",
    title: "Rural Relief & Winter Blanket Distribution",
    category: "Community Welfare",
    image: "/images/477036574_1095517169042898_8275482849105596714_n.jpg"
  },
  {
    id: "g8",
    title: "Women Empowerment Workshop & Stitching Lab",
    category: "Community Welfare",
    image: "/images/477805814_1095514802376468_3249839671590223856_n.jpg"
  },
  {
    id: "g9",
    title: "Teacher Training Seminar & Pedagogy Workshop",
    category: "Campus Life",
    image: "/images/485324157_1122935206301094_8901456250509469498_n.jpg"
  },
  {
    id: "g10",
    title: "Blood Donation & Public Health Awareness Camp",
    category: "Medical Camps",
    image: "/images/455959537_968988068362476_2016967680633982476_n.jpg"
  },
  {
    id: "g11",
    title: "Technical Engineering Lab Demonstration",
    category: "Skill Training",
    image: "/images/485024970_1122502439677704_8625661108652061928_n.jpg"
  },
  {
    id: "g12",
    title: "Child Education Outreach in Rural Villages",
    category: "Community Welfare",
    image: "/images/485155482_1122935506301064_8999941824431347770_n.jpg"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Tanmoy Ghosh",
    course: "Diploma in Electrical Engineering",
    institution: "Jakir Hossain Institute of Polytechnic",
    quote: "Coming from a rural farming family in Murshidabad, I never dreamed I could work in a major infrastructure firm. The hands-on labs and placement cell made it happen.",
    year: "Batch of 2023"
  },
  {
    name: "Rukhsana Khatun",
    course: "PMKVY Healthcare Assistance",
    institution: "Jakir Hossain Skill Training Center",
    quote: "The free training program not only gave me a government certificate but also boosted my confidence. Today I support my family as a certified healthcare assistant.",
    year: "Batch of 2024"
  },
  {
    name: "Suman Mondal",
    course: "B.Ed (Bachelor of Education)",
    institution: "Aurangabad B.Ed & PTTI",
    quote: "The pedagogical mentorship and micro-teaching practice here prepared me thoroughly for school service examinations. Shibham Trust truly uplifts local youth.",
    year: "Batch of 2022"
  }
];
