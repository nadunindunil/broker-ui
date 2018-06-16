import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {Http, Response} from '@angular/http';
import {JoinServiceService} from '../../services/join-service.service';

@Component({selector: 'app-join', templateUrl: './join.component.html', styleUrls: ['./join.component.scss']})
export class JoinComponent implements OnInit {
  model : any = {};
  loading = false;
  returnUrl : string;
  joined : boolean = false;
  playerName : string = null;

  constructor(private route : ActivatedRoute, private router : Router, private http : Http, private joinService: JoinServiceService) {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  ngOnInit() {}

  async login() {
    try {
     await this.joinService.logIn(this.playerName);   
    } catch (error) {
      alert(error);
    }
  }

}
