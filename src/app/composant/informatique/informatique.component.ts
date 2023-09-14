import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from 'src/app/interface/article';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-informatique',
  templateUrl: './informatique.component.html',
  styleUrls: ['./informatique.component.css']
})
export class InformatiqueComponent implements OnInit {

  private informatique: Array<ArticleInterface> = []

  /**
   * 
   * @param blogService service permetant de manipuller le backend
   */
  constructor(private blogService : BlogService){}

  ngOnInit(): void {
   this.informatique= this.blogService.afficherUneRubrique('informatique')
    // console.table(this.informatique)
  }

  public get informatiqueListe() {
return this.informatique;
  }
}
