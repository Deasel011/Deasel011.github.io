### Question 1
Nous avons vu que la vue partielle peut être utile dans deux cas. Pouvez-vous en expliquer un?
### Question 2
À quoi devrait ressembler la structure d'une vue partielle?

A:
```html
<html>
    <head>
        <meta charset="utf-8" />
    </head>
<body>
    <h1>@ViewData["title"]</h1>
    <div class="main-container"></div>
</body>
</html>
```
B:
```html
@model ModelDeTableXYZ
<div>
    <table>
    @foreach (var row in Model.rows){
        <tr>
            @foreach(var colomn in row.columns){
                <td>@colomn.value</td>
            }
        </tr>
    }
    </table>
</div>
```

### Question 3
Nous avons une vue partielle dans le fichier *_ProductDetail.cshtml*.

Nous avons un modèle:
```csharp
public class Product{
    public string productName {get;set;}
    public string productDescription {get;set;}
    public string productRating {get;set;}
    public ProductDetail productDetail {get;set;}
}
```
Nous voulons utiliser la vue partielle *_ProductDetail* avec le modèle *Product* dans la vue suivante:
```html
...
<div class="Product">
    <h3>@Model.productName</h3>
    <ul>
        <li>Description : @Model.productDescription</li>
        <li>Rating : @Model.productRating</li>
    </ul>
    <!-- Inserer ici la vue partielle de détail du produit -->
</div>
...
```
Que devrons-nous écrire pour utiliser la vue *_ProductDetail* avec le modèle de la vue parent?

### Réponses
#### Réponse 1
Séparation d'une base de code en plus petits morceaux (**Single Responsability Principle**)(**KISS**)

Réutilisation de code qui se répète (**DRY**)
#### Réponse 2
B
#### Reponse 3
```csharp
@await Html.PartialAsync("_ProductDetail",Model.productDetail)
```
