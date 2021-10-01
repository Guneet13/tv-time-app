export interface IdataFilter {
  name : string,
  language : string,
  status : string,
  schedule : {
    time: string,
    days: [string]  //is that right?
  },
  rating: {
    average: number
  },
  network : {
    name: string
  }
  image: {
    original: string //medium looks vague, so I choose to use original
  }
  summary: string


}
