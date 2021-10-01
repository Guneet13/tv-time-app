import { Component, OnInit } from '@angular/core';
import { ITvTime } from '../itv-time';

@Component({
  selector: 'app-tv-time',
  templateUrl: './tv-time.component.html',
  styleUrls: ['./tv-time.component.css']
})
export class TvTimeComponent implements OnInit {
  show: ITvTime
  constructor() {  
    this.show = {
      name: "Girls",
      status: "Ended",
      language: "English",
      genres: ["Comedy"," Family "," Romance"],
      network: {
        name: "HBO",
      },
      image: {
        original: "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
      },
      _links: {
        previousEpisode: {
          href: "https://api.tvmaze.com/episodes/1079686"
        }
      },
      summary: "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.",
      rating: "6.6",
      schedule: {
        time: "12:00",
        days: ["Sunday"," Monday"],
      }
    }//id, name, status,lang, networkName, image, previousEpisode
  }

  ngOnInit(): void {
  }

}