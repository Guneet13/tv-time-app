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
  network: {
    name: string
  },
  image: {
    original: string 
  },
  summary: string,
}
