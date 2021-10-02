export interface IdataFilter {
  name: string,
  language: string,
  status: string,
  schedule: {
    time: string,
    days: string[]  //is that right?
  },
  rating: {
    average: number
  },
  genres: string[],
  network: {
    name: string
  },
  image: {
    original: string //medium looks vague, so I choose to use original
  },
  summary: string,
  _links: {
    previousepisode: {  /*TVmaze Api does not use camel case for this property name.
                          Please keep it all lower case to match the TVmaze api data.
                          If you want to double-check, here is a link to TVmaze's example data.
                          "previousepisode" is on the last line.
                          https://api.tvmaze.com/singlesearch/shows?q=girls */
      href: string
    }
  }
}
