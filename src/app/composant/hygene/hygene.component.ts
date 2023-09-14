import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/interface/article';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-hygene',
  templateUrl: './hygene.component.html',
  styleUrls: ['./hygene.component.css']
})
export class HygeneComponent implements OnInit {
  private hygene: Array<ArticleInterface> = []

  constructor(private blogService : BlogService){}

  ngOnInit(): void {
   this.hygene= this.blogService.afficherUneRubrique('hygene')
    // console.table(this.hygene)
  }

  public get hygeneListe() {
return this.hygene;
  }
}
