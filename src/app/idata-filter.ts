export interface IDataFilter {
  name: string,
  language: string,
  status: string,
  schedule: {
    time: string,
    days: string[]
  },
  rating: {
    average: number,
  },
  genres: string[],
  network?: {
    name: string //according to search test, network may be null for some TV shows. They may have webChannel instead.
  },
  webChannel?:{
    name: string
  },
  image: {
    original: string
  },
  summary: string,
}
