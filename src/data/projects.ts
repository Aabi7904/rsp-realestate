export interface Amenity {
  icon: string;
  name: string;
}

export interface Project {
  id: string;
  name: string;
  road: string;
  address: string;
  description: string;
  aboutText: string;
  plots: number;
  totalArea: string;
  plotSizes: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  reraNumber?: string;
  image: string;
  galleryImages: string[];
  amenities: Amenity[];
  landmarks: string[];
  mapEmbedUrl: string;
}

export const roads = [
  "ALL",
  "VANDAVASI ROAD",
  "ARANI ROAD",
  "POLUR ROAD",
  "TIRUVANNAMALAI ROAD",
  "GINGEE ROAD",
] as const;

export type Road = (typeof roads)[number];

const defaultAmenities: Amenity[] = [
  { icon: "Road", name: "Tar Roads" },
  { icon: "Droplets", name: "Drainage System" },
  { icon: "Zap", name: "Electricity" },
  { icon: "TreePine", name: "Avenue Plantation" },
  { icon: "Lamp", name: "Street Lights" },
  { icon: "ShieldCheck", name: "Gated Entry" },
  { icon: "ParkingCircle", name: "Children's Park" },
  { icon: "Waves", name: "Water Supply" },
];

const defaultMapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.8!2d79.3!3d12.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI0JzAwLjAiTiA3OcKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1";

export const projects: Project[] = [

  // ===== ARANI ROAD =====
  {
    id: "dhana-shri-nagar",
    name: "Dhana Shri Nagar",
    road: "ARANI ROAD",
    address: "Arani Road, Chetpet, Tamil Nadu",
    description: "Premium residential layout with essential infrastructure.",
    aboutText: "Dhana Shri Nagar offers well-planned plots in a fast-growing residential corridor.",
    plots: 120,
    totalArea: "15 Acres",
    plotSizes: "1200 - 2400 sq.ft",
    status: "Completed",
    image: "project-1",
    galleryImages: ["project-1","project-2","project-3","project-4"],
    amenities: defaultAmenities,
    landmarks: ["Near Bus Stand","Close to NH","Near School","Hospital Nearby"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "lakshmi-garden",
    name: "Lakshmi Garden",
    road: "ARANI ROAD",
    address: "Arani Road, Chetpet, Tamil Nadu",
    description: "Well-developed gated residential layout.",
    aboutText: "Lakshmi Garden provides modern infrastructure with peaceful living.",
    plots: 64,
    totalArea: "8 Acres",
    plotSizes: "1500 - 3000 sq.ft",
    status: "Ongoing",
    image: "project-3",
    galleryImages: ["project-3","project-1","project-2","project-4"],
    amenities: defaultAmenities,
    landmarks: ["On Main Road","Near Hospital","Scenic Area","Close to Town"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "balaji-nagar",
    name: "Balaji Nagar",
    road: "ARANI ROAD",
    address: "Arani Road, Chetpet, Tamil Nadu",
    description: "Affordable residential plots.",
    aboutText: "Balaji Nagar provides quality plots at competitive pricing.",
    plots: 110,
    totalArea: "14 Acres",
    plotSizes: "800 - 1600 sq.ft",
    status: "Completed",
    image: "project-3",
    galleryImages: ["project-3","project-2","project-1","project-4"],
    amenities: defaultAmenities,
    landmarks: ["Near College","Market Nearby","Town Access","Highway Connectivity"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "lakshmi-garden-3",
    name: "Lakshmi Garden - 3",
    road: "ARANI ROAD",
    address: "Arani Road, Chetpet, Tamil Nadu",
    description: "Phase 3 extension layout.",
    aboutText: "Lakshmi Garden - 3 expands the successful Lakshmi Garden community.",
    plots: 50,
    totalArea: "5 Acres",
    plotSizes: "1000 - 1800 sq.ft",
    status: "Upcoming",
    image: "project-4",
    galleryImages: ["project-4","project-2","project-3","project-1"],
    amenities: defaultAmenities,
    landmarks: ["Near College","Highway Access","Bus Stop","Market Close"],
    mapEmbedUrl: defaultMapUrl,
  },

  // ===== POLUR ROAD =====
  {
    id: "happy-home",
    name: "Happy Home",
    road: "POLUR ROAD",
    address: "Polur Road, Chetpet, Tamil Nadu",
    description: "Affordable residential community.",
    aboutText: "Happy Home is designed for first-time homeowners seeking value and comfort.",
    plots: 80,
    totalArea: "9 Acres",
    plotSizes: "800 - 1500 sq.ft",
    status: "Ongoing",
    image: "project-1",
    galleryImages: ["project-1","project-3","project-2","project-4"],
    amenities: defaultAmenities,
    landmarks: ["On Main Road","Near Town","School Close","Hospital Nearby"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "shri-sivasakthi-nagar",
    name: "Shri Sivasakthi Nagar",
    road: "POLUR ROAD",
    address: "Polur Road, Chetpet, Tamil Nadu",
    description: "Secure residential layout.",
    aboutText: "Shri Sivasakthi Nagar combines convenience and affordability.",
    plots: 70,
    totalArea: "8 Acres",
    plotSizes: "900 - 1700 sq.ft",
    status: "Completed",
    image: "project-1",
    galleryImages: ["project-1","project-2","project-3","project-4"],
    amenities: defaultAmenities,
    landmarks: ["Near School","Hospital Nearby","Main Road","Bus Stop Close"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "pournami-nagar",
    name: "Pournami Nagar",
    road: "POLUR ROAD",
    address: "Polur Road, Chetpet, Tamil Nadu",
    description: "Peaceful residential layout with quality infrastructure.",
    aboutText: "Pournami Nagar offers serene living with modern amenities.",
    plots: 60,
    totalArea: "6 Acres",
    plotSizes: "900 - 1800 sq.ft",
    status: "Completed",
    image: "project-1",
    galleryImages: ["project-1","project-2","project-3","project-4"],
    amenities: defaultAmenities,
    landmarks: ["Near Temple","Close to School","Bus Access","Hospital Nearby"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "anandam-nagar",
    name: "Anandam Nagar",
    road: "POLUR ROAD",
    address: "Polur Road, Chetpet, Tamil Nadu",
    description: "Family-friendly residential community.",
    aboutText: "Anandam Nagar blends comfort and connectivity.",
    plots: 72,
    totalArea: "9 Acres",
    plotSizes: "1000 - 1800 sq.ft",
    status: "Ongoing",
    image: "project-2",
    galleryImages: ["project-2","project-4","project-1","project-3"],
    amenities: defaultAmenities,
    landmarks: ["Near PHC","Close to Town","Bus Stop Nearby","Main Road Access"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "udhayam-nagar",
    name: "Udhayam Nagar",
    road: "POLUR ROAD",
    address: "Polur Road, Chetpet, Tamil Nadu",
    description: "Elite residential layout with modern facilities.",
    aboutText: "Udhayam Nagar offers spacious plots with strong connectivity.",
    plots: 150,
    totalArea: "20 Acres",
    plotSizes: "1200 - 2800 sq.ft",
    status: "Completed",
    image: "project-4",
    galleryImages: ["project-4","project-1","project-2","project-3"],
    amenities: defaultAmenities,
    landmarks: ["Near Temple","Close to Bus Stand","Medical College Nearby","Shops Nearby"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "lakshmi-nagar",
    name: "Lakshmi Nagar",
    road: "POLUR ROAD",
    address: "Polur Road, Chetpet, Tamil Nadu",
    description: "Approved residential plots in prime location.",
    aboutText: "Lakshmi Nagar is ideal for families looking for secure and peaceful surroundings.",
    plots: 85,
    totalArea: "10 Acres",
    plotSizes: "1000 - 2000 sq.ft",
    status: "Completed",
    image: "project-2",
    galleryImages: ["project-2","project-3","project-4","project-1"],
    amenities: defaultAmenities,
    landmarks: ["Near Railway Station","Close to Market","College Nearby","8 km from Town"],
    mapEmbedUrl: defaultMapUrl,
  },

  // ===== VANDAVASI ROAD =====
  {
    id: "shri-srinivasa-nagar",
    name: "Shri Srinivasa Nagar",
    road: "VANDAVASI ROAD",
    address: "Vandavasi Road, Chetpet, Tamil Nadu",
    description: "Upcoming premium development.",
    aboutText: "Shri Srinivasa Nagar is designed for modern residential needs.",
    plots: 48,
    totalArea: "7 Acres",
    plotSizes: "1500 - 3500 sq.ft",
    status: "Upcoming",
    image: "project-4",
    galleryImages: ["project-4","project-2","project-3","project-1"],
    amenities: defaultAmenities,
    landmarks: ["On Highway","Near Hills View","5 km from Town","Developing Zone"],
    mapEmbedUrl: defaultMapUrl,
  },

  // ===== GINGEE ROAD =====
  {
    id: "shri-maruthi-nagar",
    name: "Shri Maruthi Nagar",
    road: "GINGEE ROAD",
    address: "Gingee Road, Chetpet, Tamil Nadu",
    description: "Well-planned residential development.",
    aboutText: "Shri Maruthi Nagar ensures comfortable family living.",
    plots: 75,
    totalArea: "9 Acres",
    plotSizes: "1000 - 2000 sq.ft",
    status: "Completed",
    image: "project-2",
    galleryImages: ["project-2","project-3","project-4","project-1"],
    amenities: defaultAmenities,
    landmarks: ["Near Market","Bus Stop Nearby","Close to Town","Main Road Access"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "thulasi-nagar",
    name: "Thulasi Nagar",
    road: "GINGEE ROAD",
    address: "Gingee Road, Chetpet, Tamil Nadu",
    description: "Calm and peaceful residential plots.",
    aboutText: "Thulasi Nagar offers green surroundings with modern amenities.",
    plots: 62,
    totalArea: "7 Acres",
    plotSizes: "950 - 1900 sq.ft",
    status: "Completed",
    image: "project-3",
    galleryImages: ["project-3","project-1","project-2","project-4"],
    amenities: defaultAmenities,
    landmarks: ["Near Fort","Bus Stop","Hospital Nearby","Main Road"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "shri-sai-ram-nagar",
    name: "Shri Sai Ram Nagar",
    road: "GINGEE ROAD",
    address: "Gingee Road, Chetpet, Tamil Nadu",
    description: "Premium plots with secure environment.",
    aboutText: "Shri Sai Ram Nagar offers excellent connectivity and amenities.",
    plots: 68,
    totalArea: "8 Acres",
    plotSizes: "1100 - 2100 sq.ft",
    status: "Ongoing",
    image: "project-3",
    galleryImages: ["project-3","project-4","project-1","project-2"],
    amenities: defaultAmenities,
    landmarks: ["Near College","Hospital Close","Market Area","Highway Access"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "shri-maruthi-nagar-2",
    name: "Shri Maruthi Nagar 2",
    road: "GINGEE ROAD",
    address: "Gingee Road, Chetpet, Tamil Nadu",
    description: "Extension phase with expanded plots.",
    aboutText: "Shri Maruthi Nagar 2 is the second phase with upgraded amenities.",
    plots: 54,
    totalArea: "6 Acres",
    plotSizes: "1200 - 2400 sq.ft",
    status: "Upcoming",
    image: "project-4",
    galleryImages: ["project-4","project-1","project-2","project-3"],
    amenities: defaultAmenities,
    landmarks: ["On Main Road","Near Hills","Close to Bus Stop","Peaceful Area"],
    mapEmbedUrl: defaultMapUrl,
  },

  {
    id: "shri-renugambal-nagar",
    name: "Shri Renugambal Nagar",
    road: "GINGEE ROAD",
    address: "Gingee Road, Chetpet, Tamil Nadu",
    description: "Premium layout in growing locality.",
    aboutText: "Shri Renugambal Nagar offers safe and secure residential plots.",
    plots: 96,
    totalArea: "12 Acres",
    plotSizes: "1100 - 2200 sq.ft",
    status: "Completed",
    image: "project-1",
    galleryImages: ["project-1","project-3","project-4","project-2"],
    amenities: defaultAmenities,
    landmarks: ["Near Bus Stop","Market Nearby","School Close","Hospital Nearby"],
    mapEmbedUrl: defaultMapUrl,
  },

];