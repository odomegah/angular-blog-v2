import { Injectable } from '@angular/core';
import { ArticleInterface, touteLesArticles } from '../interface/article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  /**
   * declaration de la variable articles
   * un tabeau qui va prendre la forme de l'interface article
   */
  private tableauDarticle: Array<ArticleInterface> = [];

  constructor() {
    this.tableauDarticle = touteLesArticles;
   }

  public afficherToutesLesArticles(){
    return this.tableauDarticle;
  }

  public afficherUnArticleId(id:number){
    return this.tableauDarticle.find((e)=>e.id == id)
  }

  public afficherUneRubrique(rubrique:String){
    return this.tableauDarticle.filter((e)=>e.rubrique === rubrique);
  }

}
