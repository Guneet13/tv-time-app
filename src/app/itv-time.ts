export interface ITvTime {
  name: string,
  language: string,
  status: string,
  schedule: {
    time: string,
    days: string[],
  },
  rating: string,
  genres: string[],
  network: {
    name:string
  },
  image: {
    original: string,
  },
  _links: {
    previousEpisode: {
      href: string,
    }
  },
  summary: string,
  
  
}
