export interface Project {
  id: string;
  name: string;
  road: string;
  description: string;
  plots: number;
  status: "Completed" | "Ongoing" | "Upcoming";
  image: string;
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

export const projects: Project[] = [
  {
    id: "rsp-golden-avenue",
    name: "RSP Golden Avenue",
    road: "VANDAVASI ROAD",
    description: "Premium residential plots with world-class infrastructure and lush green surroundings.",
    plots: 120,
    status: "Completed",
    image: "project-1",
  },
  {
    id: "rsp-emerald-gardens",
    name: "RSP Emerald Gardens",
    road: "ARANI ROAD",
    description: "Strategically located plots perfect for investment and dream home construction.",
    plots: 85,
    status: "Completed",
    image: "project-2",
  },
  {
    id: "rsp-royal-enclave",
    name: "RSP Royal Enclave",
    road: "POLUR ROAD",
    description: "Exclusive gated community plots with premium amenities and scenic views.",
    plots: 64,
    status: "Ongoing",
    image: "project-3",
  },
  {
    id: "rsp-imperial-heights",
    name: "RSP Imperial Heights",
    road: "TIRUVANNAMALAI ROAD",
    description: "Elite residential layout with modern infrastructure near Tiruvannamalai.",
    plots: 150,
    status: "Completed",
    image: "project-4",
  },
  {
    id: "rsp-crown-city",
    name: "RSP Crown City",
    road: "GINGEE ROAD",
    description: "A landmark development offering premium plots in a prime location.",
    plots: 96,
    status: "Completed",
    image: "project-1",
  },
  {
    id: "rsp-heritage-park",
    name: "RSP Heritage Park",
    road: "VANDAVASI ROAD",
    description: "Heritage-inspired layout blending modern living with traditional charm.",
    plots: 72,
    status: "Ongoing",
    image: "project-2",
  },
  {
    id: "rsp-sapphire-nagar",
    name: "RSP Sapphire Nagar",
    road: "ARANI ROAD",
    description: "Affordable premium plots designed for families seeking quality living.",
    plots: 110,
    status: "Completed",
    image: "project-3",
  },
  {
    id: "rsp-platinum-gardens",
    name: "RSP Platinum Gardens",
    road: "POLUR ROAD",
    description: "Ultra-premium plots with platinum-grade amenities and infrastructure.",
    plots: 48,
    status: "Upcoming",
    image: "project-4",
  },
];
