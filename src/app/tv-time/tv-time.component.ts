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
      name: "you",
      language: "",
      status: "",
      time: "",
      days: [],
      rating: 0,
      genres: [],
      network: "",
      image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13812849648%2F1000.jpg&imgrefurl=https%3A%2F%2Fsunnews.cc%2Fentertainment%2F333051.html&tbnid=YJCNrEHgpPAJLM&vet=12ahUKEwjloK6fyL7zAhWKr54KHYijASsQMygFegUIARC0AQ..i&docid=J2uhNDxebBHXEM&w=735&h=818&itg=1&q=%E4%BD%A0%E6%98%AF%E6%88%91%E7%9A%84%E8%8D%A3%E8%80%80&ved=2ahUKEwjloK6fyL7zAhWKr54KHYijASsQMygFegUIARC0AQ",
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
