## À quoi sert une vue partielle
Une vue partielle sert à définir des éléments visuels simples souvent redondants à travers un site web.
On peut penser tout de suite à une bannière informative.
On peut aussi créer des vues partielles pour séparer une vue en plusieurs éléments afin de rentre le code de la vue principale beaucoup plus léger.
Tout comme une vue, une vue partielle peut être couplée à un modèle auquel nous allons passer des données à partir de la vue appelante.
Le rôle de la vue partielle est ainsi de faire le formatage du modèle (si une donnée lui est passée),de montré un élément redondant ou encore de formatter un sous-partie d'une vue!

## Comment créer une vue partielle
À la base, une vue partielle se crée de la même façon qu’une vue traditionnelle, c'est à dire un fichier Razor (.cshtml).
Avec Visuel Studio, on va ajouter un nouvel objet de vue dans un des répertoires prévus à cet effet.

![Right Click on the folder where you want to add the partial view then add item then select MVC Partial View](https://raw.githubusercontent.com/Deasel011/Deasel011.github.io/master/content/CreatePartial.png)

Dans le cas standard, nous allons les créées sous le même répertoire que la vue appelante.
(voir comment fonctionne la découverte des vue partielles en annexe si c’est une vue partagée)
Une vue partielle n'aura pas la structure d'une vue complète, elle sera vide car on veut y définir des éléments plus granulaires.
```html
<div>
    <h1>À propos</h1>
    <p>Ceci est une vue partielle</p>
</div>
```
Nous pouvons lui rajouter un modèle qui correspond au format de la donnée qu'elle va recevoir.
(dans un cas où elle recoit des données)
```html

<div>
    <h1>À propos</h1>
    <p>Ceci est une vue partielle</p>
</div>
```
Une vue partielle se préfixe par un souligner afin de la différencié d'une vue : ```_NomDeVuePartielle```.

## Comment utiliser une vue partielle
Il y a plusieurs méthodes disponible pour invoqué une vue partielle.
Si nous avons besoin de remplir un modèle de la vue partielle avec des données, nous utiliserons les méthodes C# évaluées à travers le code Razor.
```html
<div>
	@await Html.PartialAsync("_VueAvecModele",Model.product)
...
```
Il est aussi possible d'invoquer cette méthode sans donnée.
```html
<div>
	@await Html.PartialAsync("_VueSansModele")
...
```
<sub>Avec l'utilisation de .Net Core, l'utilisation de méthodes asynchrones (async) est préféré et souvent obligatoire pour des raisons de performances du code.
Pour plus de détails concernant la programmation asynchrone voir ce [lien](https://docs.microsoft.com/fr-ca/dotnet/csharp/programming-guide/concepts/async/).</sub>

Une nouvelle façon d'invoqué des vue partielles à été ajoutée avec .Net Core.
Le code Razor supporte désormais une balise "partial" qui réfère à la vue en question.
```html
<div>
	<partial name="_VueSansModele"/>
...
```

Lorsqu'on mentionne le nom de la vue partielle, si elle se trouve dans le même répertoire que la vue parent, nous n'avons pas besoin de mettre le chemin ni l'extension de la vue partielle.
Par contre, si la structure du projet n'est pas standard, il est possible que l'on doivent spécifier l'emplacement et l'extension de la vue partielle.
```html
<div>
	<partial name="../_VueDansUnRepertoireParent.cshtml"/>
	<partial name="~/RepertoireBidon/_VueDansUnRepertoireBidonAPartirDeLaRacideDuProjet.cshtml"/>
...
```

### Attention
Il n’est pas bonne pratique de passer trop de données à une vue partielle car les modifications faites à l’intérieur de celle-ci ne sont pas transmises à la vue supérieure. Lorsqu’il y aura des données à modifié, nous allons plutôt privilégier ce qu’on appelle des composants de vues, qui eux existent explicitement pour être appelées par des vue parentes et on va les construire pour qu’elles soient agnostiques du contexte de l’appelant.