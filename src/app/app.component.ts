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
    const userInput = searchValue.split(' ').map(s => s.trim());
    this.tvTimeService.getShowData(userInput[0]).subscribe(data => this.showData = data);
  }
}

//The Office
// TheOffice
// t1 - make it work with one word
// t2 - make it work with two word (multi string search)
//%20 ascii = space
//edit userInput to account for long titles
//possible -- 41 characters
//https://api.tvmaze.com/singlesearch/shows?q=the%20godfather
