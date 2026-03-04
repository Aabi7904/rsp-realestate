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
  {
    id: "rsp-golden-avenue",
    name: "RSP Golden Avenue",
    road: "VANDAVASI ROAD",
    address: "Vandavasi Road, Chetpet, Near Tiruvannamalai, Tamil Nadu",
    description: "Premium residential plots with world-class infrastructure and lush green surroundings.",
    aboutText:
      "RSP Golden Avenue is a flagship development offering premium residential plots set amidst lush greenery. With world-class infrastructure including wide tar roads, underground drainage, and 24/7 water supply, this project is designed for families who value quality living and long-term investment.",
    plots: 120,
    totalArea: "15 Acres",
    plotSizes: "1200 - 2400 sq.ft",
    status: "Completed",
    reraNumber: "TN/01/Layout/0123/2021",
    image: "project-1",
    galleryImages: ["project-1", "project-2", "project-3", "project-4"],
    amenities: defaultAmenities,
    landmarks: [
      "5 km from Chetpet Bus Stand",
      "2 km from NH-66",
      "10 km from Tiruvannamalai Temple",
      "Near Government School & Hospital",
    ],
    mapEmbedUrl: defaultMapUrl,
  },
  {
    id: "rsp-emerald-gardens",
    name: "RSP Emerald Gardens",
    road: "ARANI ROAD",
    address: "Arani Road, Chetpet, Near Tiruvannamalai, Tamil Nadu",
    description: "Strategically located plots perfect for investment and dream home construction.",
    aboutText:
      "RSP Emerald Gardens offers strategically positioned residential plots on the fast-developing Arani Road corridor. Ideal for both investment and building your dream home, this project features approved layouts, clear titles, and all essential amenities.",
    plots: 85,
    totalArea: "10 Acres",
    plotSizes: "1000 - 2000 sq.ft",
    status: "Completed",
    image: "project-2",
    galleryImages: ["project-2", "project-3", "project-4", "project-1"],
    amenities: defaultAmenities,
    landmarks: [
      "3 km from Arani Main Road",
      "Near Arani Railway Station",
      "Close to Schools & Colleges",
      "8 km from Chetpet Town",
    ],
    mapEmbedUrl: defaultMapUrl,
  },
  {
    id: "rsp-royal-enclave",
    name: "RSP Royal Enclave",
    road: "POLUR ROAD",
    address: "Polur Road, Chetpet, Near Tiruvannamalai, Tamil Nadu",
    description: "Exclusive gated community plots with premium amenities and scenic views.",
    aboutText:
      "RSP Royal Enclave is an exclusive gated community featuring premium plots surrounded by scenic natural beauty. With top-tier security, lush avenue plantations, and modern infrastructure, this is the perfect address for discerning homeowners.",
    plots: 64,
    totalArea: "8 Acres",
    plotSizes: "1500 - 3000 sq.ft",
    status: "Ongoing",
    image: "project-3",
    galleryImages: ["project-3", "project-1", "project-2", "project-4"],
    amenities: defaultAmenities,
    landmarks: [
      "On Polur Main Road",
      "4 km from Polur Town",
      "Near Government Hospital",
      "Close to Jawadhu Hills",
    ],
    mapEmbedUrl: defaultMapUrl,
  },
  {
    id: "rsp-imperial-heights",
    name: "RSP Imperial Heights",
    road: "TIRUVANNAMALAI ROAD",
    address: "Tiruvannamalai Road, Chetpet, Near Tiruvannamalai, Tamil Nadu",
    description: "Elite residential layout with modern infrastructure near Tiruvannamalai.",
    aboutText:
      "RSP Imperial Heights is an elite residential layout situated on the prestigious Tiruvannamalai Road. With expansive plot sizes, modern infrastructure, and proximity to the holy city, this project offers a unique blend of spiritual living and modern comfort.",
    plots: 150,
    totalArea: "20 Acres",
    plotSizes: "1200 - 2800 sq.ft",
    status: "Completed",
    reraNumber: "TN/01/Layout/0456/2020",
    image: "project-4",
    galleryImages: ["project-4", "project-1", "project-2", "project-3"],
    amenities: defaultAmenities,
    landmarks: [
      "2 km from Tiruvannamalai",
      "Near Arunachaleswarar Temple",
      "5 km from Bus Terminus",
      "Close to Medical College",
    ],
    mapEmbedUrl: defaultMapUrl,
  },
  {
    id: "rsp-crown-city",
    name: "RSP Crown City",
    road: "GINGEE ROAD",
    address: "Gingee Road, Chetpet, Near Tiruvannamalai, Tamil Nadu",
    description: "A landmark development offering premium plots in a prime location.",
    aboutText:
      "RSP Crown City is a landmark development on the historically significant Gingee Road. Offering premium residential plots in a prime location, this project combines heritage charm with modern amenities for a truly distinguished living experience.",
    plots: 96,
    totalArea: "12 Acres",
    plotSizes: "1100 - 2200 sq.ft",
    status: "Completed",
    image: "project-1",
    galleryImages: ["project-1", "project-3", "project-4", "project-2"],
    amenities: defaultAmenities,
    landmarks: [
      "On Gingee Main Road",
      "Near Gingee Fort",
      "3 km from Gingee Bus Stand",
      "Close to Government Hospital",
    ],
    mapEmbedUrl: defaultMapUrl,
  },
  {
    id: "rsp-heritage-park",
    name: "RSP Heritage Park",
    road: "VANDAVASI ROAD",
    address: "Vandavasi Road, Chetpet, Near Tiruvannamalai, Tamil Nadu",
    description: "Heritage-inspired layout blending modern living with traditional charm.",
    aboutText:
      "RSP Heritage Park is a heritage-inspired residential layout that beautifully blends traditional Tamil architectural sensibilities with modern living standards. Wide roads, community spaces, and thoughtful planning make this an ideal family destination.",
    plots: 72,
    totalArea: "9 Acres",
    plotSizes: "1000 - 1800 sq.ft",
    status: "Ongoing",
    image: "project-2",
    galleryImages: ["project-2", "project-4", "project-1", "project-3"],
    amenities: defaultAmenities,
    landmarks: [
      "On Vandavasi Main Road",
      "6 km from Chetpet",
      "Near Primary Health Centre",
      "Close to Bus Stop",
    ],
    mapEmbedUrl: defaultMapUrl,
  },
  {
    id: "rsp-sapphire-nagar",
    name: "RSP Sapphire Nagar",
    road: "ARANI ROAD",
    address: "Arani Road, Chetpet, Near Tiruvannamalai, Tamil Nadu",
    description: "Affordable premium plots designed for families seeking quality living.",
    aboutText:
      "RSP Sapphire Nagar brings affordable luxury to the Arani Road corridor. Designed specifically for families seeking quality living without compromise, this project offers well-planned plots with all modern amenities at competitive prices.",
    plots: 110,
    totalArea: "14 Acres",
    plotSizes: "800 - 1600 sq.ft",
    status: "Completed",
    image: "project-3",
    galleryImages: ["project-3", "project-2", "project-1", "project-4"],
    amenities: defaultAmenities,
    landmarks: [
      "4 km from Arani Town",
      "Near Polytechnic College",
      "Close to Market Area",
      "Easy access to NH-66",
    ],
    mapEmbedUrl: defaultMapUrl,
  },
  {
    id: "rsp-platinum-gardens",
    name: "RSP Platinum Gardens",
    road: "POLUR ROAD",
    address: "Polur Road, Chetpet, Near Tiruvannamalai, Tamil Nadu",
    description: "Ultra-premium plots with platinum-grade amenities and infrastructure.",
    aboutText:
      "RSP Platinum Gardens is our upcoming ultra-premium development on Polur Road. Featuring the finest infrastructure, platinum-grade amenities, and expansive plot sizes, this project is set to redefine luxury land living in the region.",
    plots: 48,
    totalArea: "7 Acres",
    plotSizes: "1500 - 3500 sq.ft",
    status: "Upcoming",
    image: "project-4",
    galleryImages: ["project-4", "project-2", "project-3", "project-1"],
    amenities: defaultAmenities,
    landmarks: [
      "On Polur Highway",
      "Near Jawadhu Hills Viewpoint",
      "5 km from Polur Town",
      "Close to Upcoming IT Corridor",
    ],
    mapEmbedUrl: defaultMapUrl,
  },
];
