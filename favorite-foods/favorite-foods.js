module.exports = { 
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList
};

function createFavoriteFood(dishObject) {
  return {name: dishObject.dish, ingredients: dishObject.ingredients, isSpicy: dishObject.isSpicy, timesOrdered: 0}
}

function commentOnSpiciness(dishObject) {
  if (dishObject.isSpicy) {
    return `Wow, this ${dishObject.name} is so spicy!`
  }
  return `Phew, this ${dishObject.name} is not very spicy.`
}

function orderFood(dishObject) {
  dishObject.timesOrdered = (dishObject.timesOrdered || 0) + 1
  return dishObject
}

function createShoppingList(ingredientsArray) {
 return ingredientsArray[0].ingredients.concat(ingredientsArray[1].ingredients)

 
}