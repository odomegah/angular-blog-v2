import { Component, OnInit } from '@angular/core';
// Ce service pour avoir access au titre de la page HTML
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArticleInterface } from 'src/app/interface/article';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  /**
   * Variable qui ne peut pas etre null
   * A optenir par injection de dependance
   * et a initialiser a l'initialisation du composant.
   */
  private articleId!:number;


  /**
   * 
   * @param blogService service permetant de manipuller le backend
   * @param route la route active de l'application. qui fournir les parametre de l'URL.
   * @param titreDeLaPage service qui nous fournit deux methode:
   * geTitle() et setTitle()
   */
  constructor(private blogService:BlogService, private route:ActivatedRoute, private titreDeLaPage: Title){}


  ngOnInit(): void {
    // Obtenir le paramettre ID depuis l'URL
    this.articleId = Number(this.route.snapshot.paramMap.get('id'))
  }

  public get articleUnique(): ArticleInterface| undefined{
    const a =  this.blogService.afficherUnArticleId(this.articleId);
    if (a != undefined) {
      this.titreDeLaPage.setTitle(`Blog - ${a.titre}`)
      return a
    }
    this.titreDeLaPage.setTitle(`Blog - Page introuvable`)
    return undefined
  }

}
