import dayjs from "dayjs";
export const DEFAULT_POINT = {
  type: "taxi",
  dateFrom: dayjs().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
  dateTo: dayjs().add(1, "d").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
  destination: {
    name: "Vien",
    description:
      "Vien, with a beautiful old town, for those who value comfort and coziness.",
    pictures: [
      {
        src: "http://picsum.photos/300/200?r=0.5412670453673534",
        description: "Vien kindergarten",
      },
      {
        src: "http://picsum.photos/300/200?r=0.36596614020896934",
        description: "Vien kindergarten",
      },
      {
        src: "http://picsum.photos/300/200?r=0.28776549788984784",
        description: "Vien street market",
      },
      {
        src: "http://picsum.photos/300/200?r=0.8929543419148447",
        description: "Vien city centre",
      },
      {
        src: "http://picsum.photos/300/200?r=0.6689640853270427",
        description: "Vien central station",
      },
      {
        src: "http://picsum.photos/300/200?r=0.7353420830349409",
        description: "Vien embankment",
      },
      {
        src: "http://picsum.photos/300/200?r=0.986801325065336",
        description: "Vien embankment",
      },
    ],
  },
  basePrice: 1,
  isFavorite: false,
  offers: [],
};

export const DEFAULT_OFFERS = [
  {
    type: "taxi",
    offers: [
      { id: 1, title: "Upgrade to a business class", price: 190 },
      { id: 2, title: "Choose the radio station", price: 30 },
      { id: 3, title: "Choose temperature", price: 170 },
      { id: 4, title: "Drive quickly, I'm in a hurry", price: 100 },
      { id: 5, title: "Drive slowly", price: 110 },
    ],
  },
];

export const DEFAULT_DESTINATION = [
  {
    name: "Vien",
    description:
      "Vien, with a beautiful old town, for those who value comfort and coziness.",
    pictures: [
      {
        src: "http://picsum.photos/300/200?r=0.5412670453673534",
        description: "Vien kindergarten",
      },
      {
        src: "http://picsum.photos/300/200?r=0.36596614020896934",
        description: "Vien kindergarten",
      },
      {
        src: "http://picsum.photos/300/200?r=0.28776549788984784",
        description: "Vien street market",
      },
      {
        src: "http://picsum.photos/300/200?r=0.8929543419148447",
        description: "Vien city centre",
      },
      {
        src: "http://picsum.photos/300/200?r=0.6689640853270427",
        description: "Vien central station",
      },
      {
        src: "http://picsum.photos/300/200?r=0.7353420830349409",
        description: "Vien embankment",
      },
      {
        src: "http://picsum.photos/300/200?r=0.986801325065336",
        description: "Vien embankment",
      },
    ],
  },
];
