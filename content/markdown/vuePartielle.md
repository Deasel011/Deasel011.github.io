## À quoi sert une vue partielle
Une vue partielle sert à définir des éléments visuels simples souvent redondants à travers un site web.
En l'utilisant, nous sommes implicitement entrain d'appliquer la bonne pratique de programmation dénommée **DRY** (**D**on't **R**epeat **Y**ourself).
On peut, par exemple, penser tout de suite à une bannière informative que l'on voudrait répéter dans plusieurs vues de notre site web.

On peut aussi créer des vues partielles pour séparer une vue en plusieurs éléments afin de rendre le code de la vue principale beaucoup plus léger.
Lorsque l'on sépare le code en plusieurs petits morceaux séparés, nous appliquons le principe de responsabilité unique (**S**OLID) et aussi **KISS** (**K**eep **I**t **S**imple **S**tupid).

Tout comme une vue, une vue partielle peut être couplée à un modèle que nous allons transmettre à partir de la vue appelante.
Le rôle de la vue partielle est ainsi de faire un bout du formatage d'un modèle (si une donnée lui est passée), de montrer un élément redondant ou encore de formatter une petite partie d'une vue!

## Comment créer une vue partielle
À la base, une vue partielle se crée de la même façon qu’une vue traditionnelle, c'est-à-dire que nous allons créer un fichier Razor (.cshtml).
Avec Visuel Studio, on peut ajouter un nouvel objet de vue dans un des répertoires prévus à cet effet.

![Right Click on the folder where you want to add the partial view then add item then select MVC Partial View](https://raw.githubusercontent.com/Deasel011/Deasel011.github.io/master/content/CreatePartial.png)

Dans le cas standard, nous allons les créer sous le même répertoire que la vue appelante.
(voir comment fonctionne la découverte des vues partielles en annexe si c’est une vue partagée)
Une vue partielle n'aura pas la structure d'une vue complète ou d'un gabarit (*_Layout*).
Sa racine devrait être une balise de contenu comme un **div**, **table**, **ul**, etc..., car on veut y définir des éléments visuels plus granulaires.
```html
<div>
    <h1>À propos</h1>
    <p>Ceci est une vue partielle</p>
</div>
```
Nous pouvons lui rajouter un modèle de données fortement typé qui correspond au format de la donnée que nous allons lui passer.
```html
@model DemoMVC_framework.Models.Auteur

<div>
    <h1>À propos</h1>
    <p>Ceci est une vue partielle créée par @Model.nom</p>
</div>
```
Il est aussi possible d'utiliser des données provenant d'une source non typée (Viewbag/Viewdata).
Dans ce cas, exactement comme une vue, nous rajoutons des données dans le dictionnaire de la vue en amont et nous aurons accès à ce dictionnaire au travers de notre vue partielle.
Nous n'aurons donc pas à lui passé explicitement de données à l'appel puisque la vue partielle a accès au ViewBag/ViewData de son parent.
```html
<div>
    <h1>À propos</h1>
    <p>Ceci est une vue partielle créée par @ViewData["NomAuteur"]</p>
</div>
```
Enfin, une vue partielle se préfixe par un souligner afin de la différencier d'une vue standard : ```_NomDeVuePartielle```.

## Comment utiliser une vue partielle
Il y a plusieurs méthodes à notre disposition afin d'invoquer une vue partielle.
Si nous avons besoin de remplir un modèle de la vue partielle avec des données fortement typées, nous utiliserons les méthodes C# évaluées à travers le code Razor.
```html
<div>
	@await Html.PartialAsync("_VueAvecModele",Model.product)
...
```
Il est aussi possible d'invoquer cette méthode sans données en paramètres.
```html
<div>
	@await Html.PartialAsync("_VueSansModele")
...
```
<sub>Avec l'utilisation de .Net Core, l'utilisation de méthodes asynchrones (async) est préféré et souvent obligatoire pour des raisons de performances du code.
Pour plus de détails concernant la programmation asynchrone voir ce [lien](https://docs.microsoft.com/fr-ca/dotnet/csharp/programming-guide/concepts/async/).</sub>

**Rappel** : une vue partielle hérite du dictionnaire de données de la vue parent.
C'est-à-dire qu'une vue partielle peut appeler directement le ViewBag/ViewData avec les données provenant du contexte parent.

Une nouvelle façon d'invoquer des vues partielles a été ajoutée avec .Net Core.
Le code Razor supporte désormais une balise ***partial*** qui réfère à la vue en question.
```html
<div>
	<partial name="_VueSansModele"/>
...
```

Lorsqu'on réfère à la vue partielle par son nom, si elle se trouve dans le même répertoire que la vue parent, nous n'avons pas besoin de mettre le chemin ni l'extension de la vue partielle.
Par contre, si la structure du projet n'est pas standard, il est possible que l'on doit spécifier l'emplacement et l'extension de la vue partielle.
```html
<div>
	<partial name="../_VueDansUnRepertoireParent.cshtml"/>
	<partial name="~/RepertoireBidon/_VueDansUnRepertoireBidonAPartirDeLaRacideDuProjet.cshtml"/>
...
```


### Mise en garde
Il n’est pas bonne pratique de passer trop de données à une vue partielle, car les modifications faites à l’intérieur de celle-ci ne sont pas transmises à la vue supérieure.
Lorsqu’il y aura des données à modifier, nous allons plutôt privilégier ce qu’on appelle des composants de vues, qui eux existent explicitement pour être appelées par des vues parentes.
Ces types de vues sont montées de façon à ce qu'elles soient agnostiques du contexte et des données de la vue l’appelant.