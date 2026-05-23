import { imagePath } from "./imagePath.js";

export const rooms = [
  {
    slug: "deep-cove",
    title: "Deep Cove Room",
    shortName: "Deep Cove",
    images: [
      {
        src: imagePath("/images/rooms/DeepCove-1.jpg"),
        alt: "Deep Cove Room bed with fresh white linens and folded towels",
      },
      {
        src: imagePath("/images/rooms/DeepCove-2.jpg"),
        alt: "Deep Cove Room window, dresser, wall TV, and bed details",
      },
    ],
    description:
      "A calm, compact room with crisp linens, soft grey tones, bedside lamps, and practical comforts for a quiet North Vancouver stay.",
    details: ["Queen bed", "Fresh towels", "Wall TV", "Quiet window light"],
    price: "From $159 / night",
  },
  {
    slug: "lynn-valley",
    title: "Lynn Valley Room",
    shortName: "Lynn Valley",
    images: [
      {
        src: imagePath("/images/rooms/LynnValley-1.jpg"),
        alt: "Lynn Valley Room bed with teal accent throw and sitting area",
      },
      {
        src: imagePath("/images/rooms/LynnValley-2.jpg"),
        alt: "Lynn Valley Room bed, sofa, and spacious floor area",
      },
    ],
    description:
      "A bright guest room with a generous bed, modern side tables, seating, and a relaxed layout for longer, slower mornings.",
    details: ["Queen bed", "Sitting area", "Natural light", "Extra floor space"],
    price: "From $159 / night",
  },
  {
    slug: "seymour",
    title: "Seymour Room",
    shortName: "Seymour",
    images: [
      {
        src: imagePath("/images/rooms/Seymour-1.jpg"),
        alt: "Seymour Room bed, lounge chair, standing lamp, and wall TV",
      },
    ],
    description:
      "A peaceful room with warm lamp light, a lounge chair, clean bedding, and a simple restful setup for unwinding after the trails.",
    details: ["Queen bed", "Lounge chair", "Wall TV", "Warm lighting"],
    price: "From $159 / night",
  },
];
