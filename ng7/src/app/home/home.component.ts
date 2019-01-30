import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style:boolean = false;

  users: Object;
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this._dataService.getUsers().subscribe(_dataService => { this.users = _dataService
    console.log(this.users)
    } );
    
  }

  firstClick()
  {    
    this.h1Style = true;    
  }

}
