export interface Amenity {
  icon: string;
  name: string;
}
import projectVideo1 from "@/assets/videos/udhayam-nagar.mp4";
import aananthamnagar from "@/assets/videos/AANANTHAM-NAGAR.mp4";
import balajjinagar from "@/assets/videos/BALAJI-NAGAR.mp4";
import dhanasrinagar from "@/assets/videos/DANASRI-NAGAR.mp4";
import happyhome from "@/assets/videos/HAPPY-HOME.mp4";
import lakshmigardern from "@/assets/videos/LAKSHMI-GARDEN.mp4";
import lakshminagar from "@/assets/videos/LAKSHMI-NAGAR-POLUR ROAD.mp4";
import pournaminagar from "@/assets/videos/POWRNAMI-NAGAR.mp4";
import renugambalnagar from "@/assets/videos/RENUGAMBAL-NAGAR.mp4";
import sivasakthinagar from "@/assets/videos/SIVASAKTHI-NAGAR.mp4";
import srinivasanagar from "@/assets/videos/SRINIVASA-NAGAR.mp4";
import thulasivanam from "@/assets/videos/THULASI-VANAM-PARK.mp4";
import marutinagar from "@/assets/videos/MARUTHI-NAGAR.mp4";
import sairamnagar from "@/assets/videos/SAIRAM-NAGAR.mp4";
import lakshmigardern3 from "@/assets/videos/LAKSHMI-GARDEN 3.mp4";
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
  layoutImage: string;
  galleryImages: string[];
  amenities: Amenity[];
  landmarks: string[];
  mapEmbedUrl: string;
  video?: string;
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

export const projects: Project[] = [

  // ===== ARANI ROAD =====
{
  id: "dhana-shri-nagar",
  name: "Dhana Shri Nagar",
  road: "ARANI ROAD",
  address: "Arani Road, Chetpet",
  description: "Premium residential layout with essential infrastructure.",
  aboutText: "Dhana Shri Nagar offers well-planned plots in a fast-growing residential corridor.",
  plots: 120,
  totalArea: "15 Acres",
  plotSizes: "1200 - 2400 sq.ft",
  status: "Completed",
  image: "dhana-shri-nagar",
  layoutImage: "dhana-shri-nagar",
   video: dhanasrinagar,
  galleryImages: ["project-1","project-2","project-3","project-4"],
  amenities: defaultAmenities,
  landmarks: ["Near Bus Stand","Close to NH","Near School","Hospital Nearby"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.6826415145183!2d79.352377!3d12.470842999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI4JzE1LjAiTiA3OcKwMjEnMDguNiJF!5e0!3m2!1sen!2sin!4v1774029788419!5m2!1sen!2sin" 
},
{
  id: "lakshmi-garden",
  name: "Lakshmi Garden",
  road: "TIRUVANNAMALAI ROAD",
  address: "Chetpet",
  description: "Well-developed gated residential layout.",
  aboutText: "Lakshmi Garden provides modern infrastructure with peaceful living.",
  plots: 64,
  totalArea: "8 Acres",
  plotSizes: "1500 - 3000 sq.ft",
  status: "Ongoing",
  image: "laxmi-garden",
  layoutImage: "laxmi-garden",
   video: lakshmigardern,
  galleryImages: ["project-3","project-1","project-2","project-4"],
  amenities: defaultAmenities,
  landmarks: ["On Main Road","Near Hospital","Scenic Area","Close to Town"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.967880285277!2d79.347049!3d12.45186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI3JzA2LjciTiA3OcKwMjAnNDkuNCJF!5e0!3m2!1sen!2sin!4v1774030826960!5m2!1sen!2sin"
},

{
  id: "balaji-nagar",
  name: "Balaji Nagar",
  road: "ARANI ROAD",
  address: "Chetpet",
  description: "Affordable residential plots.",
  aboutText: "Balaji Nagar provides quality plots at competitive pricing.",
  plots: 110,
  totalArea: "14 Acres",
  plotSizes: "800 - 1600 sq.ft",
  status: "Completed",
  image: "balaji-nagar",
  layoutImage: "balaji-nagar",
   video: balajjinagar,
  galleryImages: ["project-3","project-2","project-1","project-4"],
  amenities: defaultAmenities,
  landmarks: ["Near College","Market Nearby","Town Access","Highway Connectivity"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.333623094596!2d79.338398!3d12.494031999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI5JzM4LjUiTiA3OcKwMjAnMTguMiJF!5e0!3m2!1sen!2sin!4v1774029576718!5m2!1sen!2sin"
},

{
  id: "lakshmi-garden-3",
  name: "Lakshmi Garden - 3",
  road: "ARANI ROAD",
  address: "Chetpet",
  description: "Phase 3 extension layout.",
  aboutText: "Lakshmi Garden - 3 expands the successful Lakshmi Garden community.",
  plots: 50,
  totalArea: "5 Acres",
  plotSizes: "1000 - 1800 sq.ft",
  status: "Upcoming",
  image: "laxmi-garden-3",
  layoutImage: "laxmi-garden-3",
   video: lakshmigardern3,
  galleryImages: ["project-4","project-2","project-3","project-1"],
  amenities: defaultAmenities,
  landmarks: ["Near College","Highway Access","Bus Stop","Market Close"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.4636181712167!2d79.349255!3d12.4854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI5JzA3LjQiTiA3OcKwMjAnNTcuMyJF!5e0!3m2!1sen!2sin!4v1774029650063!5m2!1sen!2sin" 
},

// ===== POLUR ROAD =====
{
  id: "happy-home",
  name: "Happy Home",
  road: "POLUR ROAD",
  address: "Chetpet",
  description: "Affordable residential community.",
  aboutText: "Happy Home is designed for first-time homeowners seeking value and comfort.",
  plots: 80,
  totalArea: "9 Acres",
  plotSizes: "800 - 1500 sq.ft",
  status: "Ongoing",
  image: "happy-home",
  layoutImage: "happy-home",
   video: happyhome,
  galleryImages: ["project-1","project-3","project-2","project-4"],
  amenities: defaultAmenities,
  landmarks: ["On Main Road","Near Town","School Close","Hospital Nearby"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.6882202618663!2d79.336322!3d12.470472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI4JzEzLjciTiA3OcKwMjAnMTAuOCJF!5e0!3m2!1sen!2sin!4v1774030319007!5m2!1sen!2sin" 
},

{
  id: "shri-sivasakthi-nagar",
  name: "Shri Sivasakthi Nagar",
  road: "POLUR ROAD",
  address: "Chetpet",
  description: "Secure residential layout.",
  aboutText: "Shri Sivasakthi Nagar combines convenience and affordability.",
  plots: 70,
  totalArea: "8 Acres",
  plotSizes: "900 - 1700 sq.ft",
  status: "Completed",
  image: "sivasakthi-nagar",
  layoutImage: "sivasakthi-nagar",
   video: sivasakthinagar,
  galleryImages: ["project-1","project-2","project-3","project-4"],
  amenities: defaultAmenities,
  landmarks: ["Near School","Hospital Nearby","Main Road","Bus Stop Close"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.6917388487!2d79.341578!3d12.470238000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI4JzEyLjkiTiA3OcKwMjAnMjkuNyJF!5e0!3m2!1sen!2sin!4v1774030078525!5m2!1sen!2sin"},

{
  id: "pournami-nagar",
  name: "Pournami Nagar",
  road: "POLUR ROAD",
  address: "Chetpet",
  description: "Peaceful residential layout with quality infrastructure.",
  aboutText: "Pournami Nagar offers serene living with modern amenities.",
  plots: 60,
  totalArea: "6 Acres",
  plotSizes: "900 - 1800 sq.ft",
  status: "Completed",
  image: "pournami-nagar",
  layoutImage: "pournami-nagar",
   video: pournaminagar,
  galleryImages: ["project-1","project-2","project-3","project-4"],
  amenities: defaultAmenities,
  landmarks: ["Near Temple","Close to School","Bus Access","Hospital Nearby"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.7011665366936!2d79.341293!3d12.469610999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI4JzEwLjYiTiA3OcKwMjAnMjguNyJF!5e0!3m2!1sen!2sin!4v1774030263630!5m2!1sen!2sin" 
},

{
  id: "anandam-nagar",
  name: "Anandam Nagar",
  road: "POLUR ROAD",
  address: "Chetpet",
  description: "Family-friendly residential community.",
  aboutText: "Anandam Nagar blends comfort and connectivity.",
  plots: 72,
  totalArea: "9 Acres",
  plotSizes: "1000 - 1800 sq.ft",
  status: "Ongoing",
  image: "anandam-nagar",
  layoutImage: "anandam-nagar",
   video: aananthamnagar,
  galleryImages: ["project-2","project-4","project-1","project-3"],
  amenities: defaultAmenities,
  landmarks: ["Near PHC","Close to Town","Bus Stop Nearby","Main Road Access"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.5351863116025!2d79.27898787506815!3d12.480645187791433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI4JzUwLjMiTiA3OcKwMTYnNTMuNiJF!5e0!3m2!1sen!2sin!4v1774029425290!5m2!1sen!2sin"
},

{
  id: "udhayam-nagar",
  name: "Udhayam Nagar",
  road: "POLUR ROAD",
  address: "Chetpet",
  description: "Elite residential layout with modern facilities.",
  aboutText: "Udhayam Nagar offers spacious plots with strong connectivity.",
  plots: 150,
  totalArea: "20 Acres",
  plotSizes: "1200 - 2800 sq.ft",
  status: "Completed",
  image: "udhayam-nagar",
  layoutImage: "udhayam-nagar",
  video: projectVideo1,
  galleryImages: ["project-4","project-1","project-2","project-3"],
  amenities: defaultAmenities,
  landmarks: ["Near Temple","Close to Bus Stand","Medical College Nearby","Shops Nearby"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.6917388487!2d79.341578!3d12.470238000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI4JzEyLjkiTiA3OcKwMjAnMjkuNyJF!5e0!3m2!1sen!2sin!4v1774030142448!5m2!1sen!2sin"
},

{
  id: "lakshmi-nagar",
  name: "Lakshmi Nagar",
  road: "POLUR ROAD",
  address: "Chetpet",
  description: "Approved residential plots in prime location.",
  aboutText: "Lakshmi Nagar is ideal for families looking for secure and peaceful surroundings.",
  plots: 85,
  totalArea: "10 Acres",
  plotSizes: "1000 - 2000 sq.ft",
  status: "Completed",
  image: "laxmi-nagar",
  layoutImage: "laxmi-nagar",
   video: lakshminagar,
  galleryImages: ["project-2","project-3","project-4","project-1"],
  amenities: defaultAmenities,
  landmarks: ["Near Railway Station","Close to Market","College Nearby","8 km from Town"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.7569863300755!2d79.322983!3d12.465898000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI3JzU3LjIiTiA3OcKwMTknMjIuNyJF!5e0!3m2!1sen!2sin!4v1774029910131!5m2!1sen!2sin" 
},

// ===== VANDAVASI ROAD =====
{
  id: "shri-srinivasa-nagar",
  name: "Shri Srinivasa Nagar",
  road: "VANDAVASI ROAD",
  address: "Chetpet",
  description: "Upcoming premium development.",
  aboutText: "Shri Srinivasa Nagar is designed for modern residential needs.",
  plots: 48,
  totalArea: "7 Acres",
  plotSizes: "1500 - 3500 sq.ft",
  status: "Upcoming",
  image: "srinivasa-nagar",
  layoutImage: "srinivasa-nagar",
   video: srinivasanagar,
  galleryImages: ["project-4","project-2","project-3","project-1"],
  amenities: defaultAmenities,
  landmarks: ["On Highway","Near Hills View","5 km from Town","Developing Zone"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.955192400229!2d79.348022!3d12.452705000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI3JzA5LjciTiA3OcKwMjAnNTIuOSJF!5e0!3m2!1sen!2sin!4v1774030751654!5m2!1sen!2sin" 
},

// ===== GINGEE ROAD =====
{
  id: "shri-maruthi-nagar",
  name: "Shri Maruthi Nagar",
  road: "GINGEE ROAD",
  address: "Chetpet",
  description: "Well-planned residential development.",
  aboutText: "Shri Maruthi Nagar ensures comfortable family living.",
  plots: 75,
  totalArea: "9 Acres",
  plotSizes: "1000 - 2000 sq.ft",
  status: "Completed",
  image: "maruthi-nagar",
  layoutImage: "maruthi-nagar",
   video: marutinagar,
  galleryImages: ["project-2","project-3","project-4","project-1"],
  amenities: defaultAmenities,
  landmarks: ["Near Market","Bus Stop Nearby","Close to Town","Main Road Access"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3896.100069137779!2d79.35266299999999!3d12.443053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI2JzM1LjAiTiA3OcKwMjEnMDkuNiJF!5e0!3m2!1sen!2sin!4v1774030632964!5m2!1sen!2sin" 
},

{
  id: "thulasi-vanam",
  name: "Thulasi Vanam",
  road: "TIRUVANNAMALAI ROAD",
  address: "Chetpet",
  description: "Calm and peaceful residential plots.",
  aboutText: "Thulasi Nagar offers green surroundings with modern amenities.",
  plots: 62,
  totalArea: "7 Acres",
  plotSizes: "950 - 1900 sq.ft",
  status: "Completed",
  image: "tulasi-vanam",
  layoutImage: "tulasi-vanam",
   video: thulasivanam,
  galleryImages: ["project-3","project-1","project-2","project-4"],
  amenities: defaultAmenities,
  landmarks: ["Near Fort","Bus Stop","Hospital Nearby","Main Road"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.9690514319454!2d79.348502!3d12.451782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI3JzA2LjQiTiA3OcKwMjAnNTQuNiJF!5e0!3m2!1sen!2sin!4v1774030784524!5m2!1sen!2sin" 
},

{
  id: "shri-sai-ram-nagar",
  name: "Shri Sai Ram Nagar",
  road: "GINGEE ROAD",
  address: "Chetpet",
  description: "Premium plots with secure environment.",
  aboutText: "Shri Sai Ram Nagar offers excellent connectivity and amenities.",
  plots: 68,
  totalArea: "8 Acres",
  plotSizes: "1100 - 2100 sq.ft",
  status: "Ongoing",
  image: "sairam-nagar",
  layoutImage: "sairam-nagar",
   video: sairamnagar,
  galleryImages: ["project-3","project-4","project-1","project-2"],
  amenities: defaultAmenities,
  landmarks: ["Near College","Hospital Close","Market Area","Highway Access"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3896.0123787827433!2d79.354338!3d12.448896000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI2JzU2LjAiTiA3OcKwMjEnMTUuNiJF!5e0!3m2!1sen!2sin!4v1774030404279!5m2!1sen!2sin" },
{
  id: "shri-maruthi-nagar-2",
  name: "Shri Maruthi Nagar 2",
  road: "GINGEE ROAD",
  address: "Chetpet",
  description: "Extension phase with expanded plots.",
  aboutText: "Shri Maruthi Nagar 2 is the second phase with upgraded amenities.",
  plots: 54,
  totalArea: "6 Acres",
  plotSizes: "1200 - 2400 sq.ft",
  status: "Upcoming",
  image: "maruthi-nagar-extended",
  layoutImage: "maruthi-nagar-extended",
  galleryImages: ["project-4","project-1","project-2","project-3"],
  amenities: defaultAmenities,
  landmarks: ["On Main Road","Near Hills","Close to Bus Stop","Peaceful Area"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3896.084689111936!2d79.352535!3d12.444078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI2JzM4LjciTiA3OcKwMjEnMDkuMSJF!5e0!3m2!1sen!2sin!4v1774030490412!5m2!1sen!2sin" 
},

{
  id: "shri-renugambal-nagar",
  name: "Shri Renugambal Nagar Extension",
  road: "TIRUVANNAMALAI ROAD",
  address: "Chetpet",
  description: "Premium layout in growing locality.",
  aboutText: "Shri Renugambal Nagar offers safe and secure residential plots.",
  plots: 96,
  totalArea: "12 Acres",
  plotSizes: "1100 - 2200 sq.ft",
  status: "Completed",
  image: "renuka-nagar",
  layoutImage: "renuka-nagar",
   video: renugambalnagar,
  galleryImages: ["project-1","project-3","project-4","project-2"],
  amenities: defaultAmenities,
  landmarks: ["Near Bus Stop","Market Nearby","School Close","Hospital Nearby"],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.958841192438!2d79.342838!3d12.452461999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI3JzA4LjkiTiA3OcKwMjAnMzQuMiJF!5e0!3m2!1sen!2sin!4v1774030712983!5m2!1sen!2sin" 
},

];