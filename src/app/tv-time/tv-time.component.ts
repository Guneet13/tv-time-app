import { Component, Input, OnInit } from '@angular/core';
import { ITvTime } from '../itv-time';

@Component({
  selector: 'app-tv-time',
  templateUrl: './tv-time.component.html',
  styleUrls: ['./tv-time.component.css']
})
export class TvTimeComponent implements OnInit {
  @Input() show: ITvTime
  
  constructor() {  
    this.show = {
      name: "",
      language: "",
      status: "",
      time: "",
      days: [],
      rating: 0,
      genres: [],
      network: "",
      image: "",
      /*_links: {
        previousEpisode: {
          href: ""
        }
      },*/
      summary: "",
    }
  }
  /*constructor() {  
    this.show = {
      name: "Girls",
      status: "Ended",
      language: "English",
      genres: ["Comedy"," Family ", " Romance"],
      network: {
        name: "HBO",
      },
      image: {
        original: "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
      },
      _links: {
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1079686"
        }
      },
      summary: "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.",
      rating: "6.6",
      time: "12:00",
      days: ["Sunday"," Monday"],
    }
  }*/

  ngOnInit(): void {
    
  }
}