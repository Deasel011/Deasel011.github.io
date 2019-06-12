# Test Unitaires
*Exécuter des tests imparfaits régulièrement est de loin supérieur à des tests parfaits qui ne sont pas écrits.* - [Martin Fowler](https://martinfowler.com/articles/continuousIntegration.html)

## Pourquoi faire des tests unitaires?
- Permet de refactoriser le code avec plus d'assurance
- Permet de mieux comprendre l'architecture d'une base de code
- Permet de réduire considérablement la documentation associée a une base de code
- Permet de simplifié la base de code en favorisant avec des patrons de conceptions compatible avec les méthodes de tests

## FakeItEasy

EN COURS DE RÉDACTION

## Atelier
Comme exercice, nous allons télécharger le [projet d'atelier](https://github.com/Deasel011/UnitTestsWorkshop/archive/master.zip)
(on peut aussi le cloner a partir de la branche master avec ce <a href="https://github.com/Deasel011/UnitTestsWorkshop.git">lien</a>).

### La machine à jus
Le but de cet atelier est d'introduire des bonnes pratiques provenant du [TDD](https://martinfowler.com/bliki/TestDrivenDevelopment.html).
Ainsi, dans le projet que nous allons ouvrir, il y a plusieurs définitions de tests que nous allons devoir écrire puis faire passer!
La librairie de test choisie est [XUnit](https://xunit.net/#documentation) et nous allons utiliser une librairie qui nous permet
de faire des mocks, des fakes, des assertions complexes, et bien d'autres fonctionnalitées pour alléger les tests : [FakeItEasy](https://fakeiteasy.readthedocs.io/en/stable/).

La machine a jus fonctionne avec une interface *IJuiceService* et possède une méthode *Create* qui prend en parametre une recette!

Puisqu'il existe plusieurs sources d'ingrédients (fruits et ingrédients communs), nous allons cacher la source des ingrédients
à l'aide du patron Repository. 
Nous donnerons à cette classe une seule responsabilité; gérer l'aiguillage vers le bon réfrigérateur!

Nous n'implémenterons pas les Interfaces Gateway dans cet atelier, nous allons plutôt préférer Mocké ceux-ci afin de démontrer
qu'il n'est pas nécessaire d'avoir tout en place avant de commencer les tests. (Nous ne devrions jamais attendre que tout soit 
prêt avant d'écrire les tests)

Une branche result est disponible afin de voir un exemple de comment s'y prendre!

## Est-ce que les Test Unitaires en valent l'effort?
Anecdote provenant de [Stack Overflow](https://stackoverflow.com/questions/67299/is-unit-testing-worth-the-effort/69263#69263) :

----
*Faire des tests unitaires ressemble étrangement à aller au gym.*
*On sait tous très bien qu'on devrait aller au gym pour s'entrainer car les bienfaits sont prouvés.*
*Au tout début, lorsqu'on commence à s'entrainer, il est très facile de trouver de la motivation.*
*Par contre, après quelques jours d'entrainement, la plupart d'entre nous se requestionnent : est-ce que ça en vaut vraiment la peine?*
*On perd littéralement une heure et plus par jour pour aller au gym et s'entrainer, qu'est-ce que cela nous apporte-t'il autre que des bras et des jambes endolorit.*

*Après plusieurs semaines, au moment où l'on commence à se sentir mieux et plus en forme, une énorme date de livraison se fait sentir.*
*Bien sur, les priorités se mettant en place, c'est le gym qui saute. Aussi bêtement qu'il puisse être, lorsque la date de livraison est passée,*
*nous avons perdu la bonne habitude qu'on avait réussi à établir durant les dernières semaines... Le retour est tout aussi douloureux que la première fois.*

*C'est à ce moment qu'on se questionne pour savoir si l'on fait les choses de travers.*
*Autour de nous, tout le monde en forme à l'air si heureux de profiter des vertus de l'exercice physique.*
*On réalise alors qu'on est différent... Les autres n'ont pas besoin de déroger de leur trajet quotidien pour aller au gym.*
*Lui a un gym dans son emplacement de travail, l'autre a un gym 24h à côté de son domicile...*
*Ces gens-là n'ont pas besoin d'expliquer à leur entourage tous les bienfaits de l'activité physique.*
*Leur entourage complet est considère l'activité physique et le gym comme un fait accompli.*
*Lorsqu'un empêchement prône à l'horizon, leur entourage à eux comprend exactement pourquoi ils vont devoir se lever 1h plus tôt pendant le voyage de camping afin d'aller courir.*
*Pas de questions... Pas de commentaires... Rien de plus normal...*
*Lorsque les dates de livraisons arrivent, personne dans leur entourage ne leur dit que les tests unitaires ne sont pas nécessaires, qu'ils ralentissent la livraison.*
*Tous connaissent exactement les vertus des tests unitaires.*
 
*Bref, est-ce que les tests unitaires en valent l'effort?*
*Absolument. Et comme avec l'activité physique, le degré d'effort à mettre est différent d'une personne à l'autre.*

**...**

----
