import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './composant/nav/nav.component';
import { ListComponent } from './composant/list/list.component';
import { FooterComponent } from './composant/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { InformatiqueComponent } from './composant/informatique/informatique.component';
import { HygeneComponent } from './composant/hygene/hygene.component';
import { BreadcrumbComponent } from './composant/breadcrumb/breadcrumb.component';
import { ArticleComponent } from './composant/article/article.component';

// Un tableau d'objet de route
const routes: Routes = [
  {path: 'hygene', component: HygeneComponent, title: "Blog - Liste des articles sur l'hygiene"},
  {path: 'informatique', component: InformatiqueComponent, title: "Blog - Liste des articles sur l'informatique"},
  {path: ':rubrique/:id/:slug', component: ArticleComponent},
  {path: '', component: ListComponent, title: "Blog - Article qui traitent de l'informatique et de l'hygiene"}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    FooterComponent,
    InformatiqueComponent,
    HygeneComponent,
    BreadcrumbComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
