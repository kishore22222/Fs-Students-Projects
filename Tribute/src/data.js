import sachin1 from './assets/sachin/sachin1.jpeg'
import sachin2 from './assets/sachin/sachin2.jpeg'
import sachin3 from './assets/sachin/sachin3.jpeg'
import ponting1 from './assets/ponting/ricky 1.jpeg'
import ponting2 from './assets/ponting/ricky 2.jpg.jpeg'
import ponting3 from './assets/ponting/ricky 3.avif'
import kohli1 from './assets/kholi/virat kohli.jpeg'
import kohli2 from './assets/kholi/virat kohli 3.jpeg'
import kohli3 from './assets/kholi/Virat Kohli 2.jpeg'
import kallis1 from './assets/kallis/kallis 1.jpg.jpeg'
import kallis2 from './assets/kallis/kallis 2.jpg.jpeg'
import kallis3 from './assets/kallis/kallis 3.jpeg'
import dhoni1 from './assets/dhoni/Dhoni 1.jpeg'
import dhoni2 from './assets/dhoni/Dhoni 2.jpeg'
import dhoni3 from './assets/dhoni/Dhoni 3.jpeg'
import bgdhoni from './assets/dhoni/background-dhoni.jpeg'
import bgvirat from './assets/kholi/bgvirat.jpeg'
import bgsachin from './assets/sachin/bgscahin.jpeg'
import bgponting from './assets/ponting/bg ponting.jpeg'
import bgkallis from './assets/ponting/bgponting.jpeg'
export const players = [
  {
    id: "sachin",
    name: "Sachin Tendulkar",
    role: "Batsman",
    country: "India",
    background:bgsachin,
    achievements: [
      "100 International Centuries",
      "Highest Run Scorer in International Cricket",
      "2011 ICC Cricket World Cup Winner",
      "Bharat Ratna Awardee"
    ],
    images: [sachin1,sachin2,sachin3]
     
  },

  {
    id: "kohli",
    name: "Virat Kohli",
    role: "Top Order Batsman",
    country: "India",
    background:bgvirat,
    achievements: [
      "2011 ICC Cricket World Cup Winner",
      "Fastest to 8000–13000 ODI Runs",
      "ICC Cricketer of the Decade (2010–2020)",
      "Former Indian Captain"
    ],
    images: [
      kohli1,kohli2,kohli3
    ]
  },

  {
    id: "dhoni",
    name: "MS Dhoni",
    role: "Wicketkeeper-Batsman",
    country: "India",
    background:bgdhoni,
    achievements: [
      "2007 ICC T20 World Cup Winner",
      "2011 ICC ODI World Cup Winner",
      "2013 ICC Champions Trophy Winner",
      "Only Captain to Win All ICC Trophies"
    ],
    images: [
      dhoni1,dhoni2,dhoni3
    ]
  },

  {
    id: "ponting",
    name: "Ricky Ponting",
    role: "Batsman",
    country: "Australia",
    background:bgponting,
    achievements: [
      "2003 ICC ODI World Cup Winner (Captain)",
      "2007 ICC ODI World Cup Winner (Captain)",
      "One of Australia’s Most Successful Captains",
      "13,000+ Test Runs"
    ],
    images: [ponting1,ponting2,ponting3]

  },

  {
    id: "kallis",
    name: "Jacques Kallis",
    role: "All-Rounder",
    country: "South Africa",
    background:bgkallis,
    achievements: [
      "10,000+ Runs in Tests and ODIs",
      "250+ International Wickets",
      "One of the Greatest All-Rounders",
      "ICC Hall of Fame Inductee"
    ],
    images: [kallis1,kallis2,kallis3]
  }
];