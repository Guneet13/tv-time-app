import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.css']
})
export class TvSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(1)])
  /* By default it will show null in the text value & adding a validation of minimum length of 1 characters for a tv show name*/
  constructor() { }

  /* emit is taking whatever is coming from text box and passing it to @Output. Emit can go crazy with every time a value changes, it will trigger. Debounce time actually helps throttle(means control) with a lapse of 1 sec to let user finish typing and then trigger*/
  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue: string) => {
      if(!this.search.invalid ){
        this.searchEvent.emit(searchValue)
      }
    })
  }
}
