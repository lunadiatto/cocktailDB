// HOMEPAGE //
//HOME INPUTS
export interface homeInputs {
  inputDrink: string;
  inputIngr: string;
}

// COCKTAILS BY NAME SEARCH
export interface RestApiCocktailByName {
  drinks: RestApidrinksByName[];
}

export interface RestApidrinksByName {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
}

export interface CocktailByName {
  id: string;
  name: string;
  category: string;
  image: string;
  selected: boolean;
}

// SPECIFIC DRINK PAGE //
//COCKTAIL DETAILS BY ID DRINK
//response
export interface RestApiCocktailById {
  drinks: RestApiDrinkById[];
}

export interface RestApiDrinkById {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strGlass: string;
  strDrinkThumb: string;
  strInstructions?: string | null;
  strInstructionsES?: string | null;
  strInstructionsDE?: string | null;
  strInstructionsIT?: string | null;
  strIngredient1?: string | null;
  strIngredient2?: string | null;
  strIngredient3?: string | null;
  strIngredient4?: string | null;
  strIngredient5?: string | null;
  strIngredient6?: string | null;
  strIngredient7?: string | null;
  strIngredient8?: string | null;
  strIngredient9?: string | null;
  strIngredient10?: string | null;
  strIngredient11?: string | null;
  strIngredient12?: string | null;
  strIngredient13?: string | null;
  strIngredient14?: string | null;
  strIngredient15?: string | null;
  strMeasure1?: string | null;
  strMeasure2?: string | null;
  strMeasure3?: string | null;
  strMeasure4?: string | null;
  strMeasure5?: string | null;
  strMeasure6?: string | null;
  strMeasure7?: string | null;
  strMeasure8?: string | null;
  strMeasure9?: string | null;
  strMeasure10?: string | null;
  strMeasure11?: string | null;
  strMeasure12?: string | null;
  strMeasure13?: string | null;
  strMeasure14?: string | null;
  strMeasure15?: string | null;
}

interface drinkIngr {
  name?: string | null;
  measure?: string | null;
}

interface drinkInstruction {
  name?: string;
  lang?: string;
}

export interface DrinkById {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strGlass: string;
  strDrinkThumb: string;
  ingredients: {
    name: string;
    measure: string;
  }[];
  instructions: any;
}
