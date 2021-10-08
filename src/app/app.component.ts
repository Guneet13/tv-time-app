import { Component } from '@angular/core';
import { ITvTime } from './itv-time';
import { TvTimeService } from './tv-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-time-app';
  showData: ITvTime = {
    name: "",
    language: "",
    status: "",
    time: "",
    days: [],
    rating: 0,
    genres: [],
    network: "",
    image: "",
    summary: "",
  }

  constructor(private tvTimeService: TvTimeService){}

  doSearch(searchValue: string){
    const userInput = searchValue.split(',')
                .map(string => string.trim());
    this.tvTimeService.getShowData(userInput[0], 
      userInput.length > 41 ? userInput[41] : undefined ).subscribe(data => this.showData = data);
  }
}
