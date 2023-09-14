import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @Input()
  title = 'blog';
  breadcrumb: boolean = false;
  url: String = " "
  constructor(private route: Router){

  }

  ngOnInit(): void {

    this.route.events.subscribe(event => {
      if(event instanceof Scroll) {
       this.url = event.routerEvent.url.split('/')[1]
      }
      // console.table(this.url)
    })
    

    
  }
  
}
