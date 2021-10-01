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
      id: 139,
      name: "Girls",
      status: "Ended",
      lang: "English",
      networkName: "HBO",
      // image: "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
      image: "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg",
      previousEpisode: "",
    }//id, name, status,lang, networkName, image, previousEpisode
  }

  ngOnInit(): void {
  }

}
