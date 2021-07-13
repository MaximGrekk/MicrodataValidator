const types = {
    "http://schema.org/Recipe": [
      "name",
      "image",
      "author",
      "description",
      "recipeIngredient",
      "recipeInstructions",
      "repTime",
      "cookTime",
      "totalTime",
      "recipeYield",
      "nutrition",
    ],
    "http://schema.org/Product": [
      "brand",
      "name",
      "image",
      "description",
      "productID",
      "offers",
    ],
    "http://schema.org/Offer": ["priceCurrency", "price", "itemCondition"],
    "http://schema.org/Restaurant": [
      "name",
      "acceptsReservations",
      "menu",
      "servesCuisine",
      "priceRange",
      "address",
    ],
    "http://schema.org/PostalAddress": [
      "streetAddress",
      "addressLocality",
      "addressRegion",
      "postalCode",
      "telephone",
    ],
    "http://schema.org/Review": ["itemReviewed"],
    "http://schema.org/Thing": ["name", "author"],
    "http://schema.org/Person": [
      "name",
      "reviewRating",
      "description",
      "ratingValue",
    ],
    "http://schema.org/Rating": [
      "author",
      "bestRating",
      "ratingExplanation",
      "ratingValue",
      "reviewAspect",
      "worstRating",
    ],
    "http://schema.org/NutritionInformation": [
      "calories",
      "carbohydrateContent",
      "cholesterolContent",
      "fatContent",
      "fiberContent",
      "proteinContent",
      "saturatedFatContent",
      "servingSize",
      "sodiumContent",
      "sugarContent",
      "transFatContent",
      "unsaturatedFatContent",
    ],
    "http://schema.org/AggregateRating": [],
  };
//   function Validator(html, typeList = false, obj = false) {
//     //   console.log(Array.from(html.children))
//     let elements = Array.from(html.children);
//     if (html.getAttribute("itemtype")) {
//       let typeList = types[html.getAttribute("itemtype")];
//     //   console.log(typeList)
//       let obj = {};
//       typeList.forEach((itemprop) => {
//         obj[itemprop] = [];
//         // console.log(obj[itemprop])
//       });
  
//       elements.map((el) => Validator(el, typeList, obj));
//       obj = false;
//       typeList = false;
//     }
//     if (typeList && obj) {
//       let attr = html.getAttribute("itemprop");
//       if (attr) {
//         // console.log(obj)
//         // obj[attr].push(html.innerHTML)
//       }
//       elements.map((el) => Validator(el, typeList, obj));
//     }
  
//     elements.map(Validator);
//   }

const Validator = (html) => {
    console.log(html);
    let childrenAll = Array.from(html.children);
    console.log(childrenAll)
}
  
  export { Validator, types };