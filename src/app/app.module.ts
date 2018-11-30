import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StarWarsSearchComponent } from './star-wars-search/star-wars-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './database.service';
import { StarWarsDisplayComponent } from './star-wars-display/star-wars-display.component';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsSearchComponent,
    StarWarsDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [HttpClient, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
