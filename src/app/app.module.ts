import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvTimeService } from './tv-time.service';
import { TvTimeComponent } from './tv-time/tv-time.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { TvSearchComponent } from './tv-search/tv-search.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
>>>>>>> 4f8f6a44d7dacf129dc39d9bd97ed53112281ea4

@NgModule({
  declarations: [
    AppComponent,
    TvTimeComponent,
    TvSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
>>>>>>> 4f8f6a44d7dacf129dc39d9bd97ed53112281ea4
  ],
  providers: [TvTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
