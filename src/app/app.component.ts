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
    genres: "",
    network: "" ,
    image: "",
    summary: "",
  }
  // userHasInput = false;

  constructor(private tvTimeService: TvTimeService) { }

  doSearch(searchValue: string){
      // this.userHasInput = true;

      const userInput = searchValue.replace(/\s+/g,"%20");
      if(userInput){
        this.tvTimeService.getShowData(userInput).subscribe(data=> this.showData = data);
      }
  }
}
