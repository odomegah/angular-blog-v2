import { Component } from '@angular/core';

import { ArticleInterface } from 'src/app/interface/article';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
private listArticleAfficher: Array<ArticleInterface> = [];

constructor(service: BlogService){
  this.listArticleAfficher = service.afficherToutesLesArticles()
}
public get liste(){
    return this.listArticleAfficher;
}

}
