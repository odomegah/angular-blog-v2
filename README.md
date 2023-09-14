# Angular | Blog

**Blog** est une application developpee avec le **FrameWork Angular** qui liste un ensemble d'article classes par rubrique.

Voir une demo sur [odomegah](https://odomegah.com/angular/blog)

## Pourquoi developper un blog avec angular ?
Dans l'intention de comprendre le fonctionnement des routes **d'Angular**, un blog d'article est le mieux adopte.

Ce blog affiche un article en fonction de son **id** et de son **titre=slug**.

Chaque article appartient a une rubrique et nous avons deux rubrique sur ce blog.

D'ou, le format de l'url suivant:
_site.com/rubrique/id/slug_

## Comment est gere l'etat de cette application ?
Pour cette application, j'ai decide de gerer l'etat par **un systeme de service** que fournit **Angular**.

**Le service** fournit les methodes ci-dessous a chaque composant ayant besoin.
1. afficherToutesLesArticles()
1. afficherUnArticleId(id,slug)
1. afficherUneRubrique(type)



## Le style CSS de cette application
Pour me concentrer que sur la partie Angular, j'ai decide de me faire aider par la librairie **pico.csss**.

## Me contacter
 **Portfolio** [odomegah.com](https://odomegah.com)