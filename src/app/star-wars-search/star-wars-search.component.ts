import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {DatabaseService} from '../database.service'


@Component({
  selector: 'app-star-wars-search',
  templateUrl: './star-wars-search.component.html',
  styleUrls: ['./star-wars-search.component.css']
})
export class StarWarsSearchComponent implements OnInit {

  useBtn = false;
  searchWar: FormGroup;
  usersearches = [
    {value: 'starships', view: 'Starships'},
    {value: 'people', view: 'People'},
    {value: 'films', view: 'Films'}
  ]

  userInput = [];
  public _wars: any[] = []

  constructor(private _dbService: DatabaseService, private _fb: FormBuilder) {
      setTimeout(() => {
        this.useBtn = true
      }, 3000)
   }; 

  ngOnInit() {
    this.searchWar = this._fb.group({
      usersearch: new FormControl(),
      userInput: new FormControl(),
    })
  };

  onFetch(): void {
    this._dbService.getData(this.searchWar.controls['usersearch'].value, 
    this.searchWar.controls['userInput'].value)
    .subscribe((res: any) => (this._wars = res))
    console.log(this._wars);
  }
}
