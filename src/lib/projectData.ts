/* eslint-disable no-unused-vars */
//TODO:: Change names
export enum ProjectTitles {
  ideathon,
  designathon,
  hackathon,
}

export interface projectStageInterface {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export const project_titles = [
  {
    enum: ProjectTitles.ideathon,
    heading: "Ideathon. ",
    start_color: "#00dfd8",
    end_color: "#007cf0",
  },
  {
    enum: ProjectTitles.designathon,
    heading: "Designathon. ",
    start_color: "#7928ca",
    end_color: "#ff0080",
  },
  {
    enum: ProjectTitles.hackathon,
    heading: "Hackathon. ",
    start_color: "#f45925",
    end_color: "#f9b11f",
  },
];

export const project_stages: projectStageInterface[] = [
  {
    name: "Guidance Sessions",
    tagline:
      "Empowering innovation and entrepreneurship through expert-led guidance and industry insights.",
    description:
      "Equip students with the knowledge and skills needed to succeed in the IT and entrepreneurship fields. Through a series of inspiring sessions, participants explore various career paths within the industry. They learn the fundamentals of design thinking (DT) and business management canvas (BMC) to identify problems, generate innovative solutions, and develop their ideas into startup-level concepts.",
    image: "/images/guidance.webp",
  },
  {
    name: "Ideathon & Designathon",
    tagline:
      "Unleashing creativity and problem-solving skills to shape innovative ideas and refine designs.",
    description:
      "Participants unleash their creativity and problem-solving abilities in the ideathon chapter, where they present their unique ideas. They then move into the designathon segment, where they enhance their designs by incorporating user-centric approaches, refining usability, aesthetics, and functionality.Their designs are evaluated by a panel of judges, showcasing their innovation and design skills.",
    image: "/images/designathon.webp",
  },
  {
    name: "Hackathon",
    tagline:
      "Collaborative coding marathon to transform ideas into functional prototypes and solutions.",
    description:
      "In the final phase, participants transform their ideas into tangible outcomes. Through an intensive hackathon, they develop functional prototypes or final products, overcoming technical challenges and incorporating cutting-edge technologies. Their final outputs are presented to the panel of judges, who assess the innovation, technical implementation, and viability of their solutions.",
    image: "/images/hackathon.webp",
  },
  {
    name: "TED Talks with Industry",
    tagline:
      "Inspiring talks by industry leaders to foster knowledge, networking, and career exploration.",
    description:
      "Expand your horizons and gain invaluable industry insights through engaging TED Talks with seasoned professionals. Explore the latest trends, technologies, and success stories, paving the way for your future in the dynamic world of IT and entrepreneurship.",
    image: "/images/ted.webp",
  },
];

export interface ProjectDateInterface {
  time: number;
  items: {
    name: string;
  }[];
}

export interface ProjectPhraseInterface {
  phrase: number;
  name: string;
  dates: ProjectDateInterface[];
}

export const project_timeline: ProjectPhraseInterface[] = [
  {
    phrase: 1,
    name: "Guidance Sessions",
    dates: [
      {
        time: new Date().getTime(),
        items: [
          { name: "Inspiration Session" },
          { name: "Design Thinking Session" },
        ],
      },
      {
        time: new Date().getTime(),
        items: [
          { name: "BMC Session" },
          { name: "Explanation about Competition" },
        ],
      },
    ],
  },
  {
    phrase: 2,
    name: "Ideathon & Designathon",
    dates: [
      {
        time: new Date().getTime(),
        items: [{ name: "Registration Period Starts" }],
      },
      {
        time: new Date().getTime(),
        items: [{ name: "Registration Period Ends" }],
      },
      {
        time: new Date().getTime(),
        items: [{ name: "Ideathon & Designthon Pitching" }],
      },
    ],
  },
  {
    phrase: 3,
    name: "Hackathon",
    dates: [
      {
        time: new Date().getTime(),
        items: [{ name: "Period for preparing for Hackathon" }],
      },
      {
        time: new Date().getTime(),
        items: [{ name: "Hackathon & Award Ceremony" }],
      },
    ],
  },
];
