import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataFilter } from './idata-filter';
import { ITvTime } from './itv-time';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TvTimeService {

  constructor(private httpClient: HttpClient) { }

  /*make a call to api url with http request. Gets the observable of IdataFilter, unwrap it(using library called map) and pass it to transform function using pipe function(pipe the data to map to unwrap it from observable around it and then send it over to transform function)*/
  getShowData(name:string){
    return this.httpClient.get<IDataFilter>(`https://api.tvmaze.com/singlesearch/shows?q=${name}`).pipe(map(data=> this.transformToITvTime(data)));
  }
  private transformToITvTime(data: IDataFilter): ITvTime{
    return{
      name: data.name,
      language: data.language,
      status: data.status,
      time: data.schedule.time,
      days: data.schedule.days,
      rating: data.rating.average,
      genres: data.genres,
      network: data.network?  data.network.name : data.webChannel?.name,
      image: data.image.original,
      summary: data.summary
    }
  }
}
