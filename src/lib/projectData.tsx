/* eslint-disable no-unused-vars */

import { ReactNode } from "react";

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
    heading: "Guidance. ",
    start_color: "#00dfd8",
    end_color: "#007cf0",
  },
  {
    enum: ProjectTitles.designathon,
    heading: "Ideathon. ",
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
      "Participants will learn about the Tech industry, how to identify problems and provide solutions, and what it means to be an entrepreneur. The program is a one-day physical session that is divided into 2 main sessions: Inspiration and Design Thinking.",
    description:
      "Equip students with the knowledge and skills needed to succeed in the IT and entrepreneurship fields. Through a series of inspiring sessions, participants explore various career paths within the industry. They learn the fundamentals of design thinking (DT) and business management canvas (BMC) to identify problems, generate innovative solutions, and develop their ideas into startup-level concepts.",
    image: "/images/guidance.webp",
  },
  {
    name: "Ideathon",
    tagline:
      "Teams will be given a Business Canvas Model to help them develop their ideas into viable business plans. They will also be mentored by professionals in the industry who can help them refine their ideas and make them more marketable.",
    description:
      "Participants unleash their creativity and problem-solving abilities in the ideathon chapter, where they present their unique ideas. They then move into the designathon segment, where they enhance their designs by incorporating user-centric approaches, refining usability, aesthetics, and functionality.Their designs are evaluated by a panel of judges, showcasing their innovation and design skills.",
    image: "/images/designathon.webp",
  },
  {
    name: "Hackathon",
    tagline:
      "Teams will have two weeks to develop their ideas into fully functional products. The teams will then present their products to a panel of judges at the grand finale and the top 03 teams will receive cash prizes.",
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
  hide_date?: boolean;
  items: {
    name: string;
    des: ReactNode;
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
        time: new Date("2023-06-28").getTime(),
        items: [
          {
            name: "Inspiration Session",
            des: "A session for brainstorming, inspiration, and planning for upcoming events.",
          },
          {
            name: "Design Thinking Session",
            des: "Workshop on design thinking principles, user-centered innovation and problem-solving.",
          },
        ],
      },
      {
        time: new Date("2023-06-28").getTime(),
        items: [
          {
            name: "Registration Start",
            des: "Express your interest in participating in the event.",
          },
        ],
      },
      {
        time: new Date("2023-07-05").getTime(),
        items: [
          {
            name: "Registration End",
            des: "Registration deadline for participants to confirm intent to participate.",
          },
        ],
      },
    ],
  },
  {
    phrase: 2,
    name: "Ideathon",
    dates: [
      {
        time: new Date("2023-07-10").getTime(),
        items: [
          {
            name: "Announce Top 20 teams",
            des: "Reveal the top 20 teams selected for advancement in the competition.",
          },
        ],
      },
      {
        time: new Date("2023-07-11").getTime(),
        items: [
          {
            name: "BMC session",
            des: (
              <>
                Explore<b> Business Model Canvas</b>, a strategic management
                tool for defining and analyzing business models.
              </>
            ),
          },
        ],
      },
      {
        time: new Date("2023-07-14").getTime(),
        items: [
          {
            name: "Semi Finale",
            des: "Teams present ideas to judges, showcasing potential and value.",
          },
        ],
      },
      {
        time: new Date("2023-07-15").getTime(),
        items: [
          {
            name: "Announce Top 10 teams",
            des: "The top 10 teams or participants, who have successfully progressed to the next stage are announced.",
          },
        ],
      },
    ],
  },
  {
    phrase: 3,
    name: "Hackathon",
    dates: [
      {
        time: new Date("2023-07-15").getTime(),
        items: [
          {
            name: "Prototype submission start",
            des: "Teams have designated time to develop and submit prototypes.",
          },
        ],
      },
      {
        time: new Date("2023-08-11").getTime(),
        items: [
          {
            name: "Prototype submission deadline",
            des: "The final day for teams to submit their completed prototypes or working models.",
          },
        ],
      },

      {
        time: new Date("2023-08-15").getTime(),
        items: [
          {
            name: "Grand Finale",
            des: "The hackathon phase commences, allowing teams to collaborate, code, and build their solutions within a specified time frame.",
          },
          {
            name: "Award ceremony",
            des: "Unveiling Winners, Commending Achievements!",
          },
        ],
      },
    ],
  },
];

export const MAX_MEM_COUNT = 5;
export const MIN_MEM_COUNT = 3;
