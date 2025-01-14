import Cauldron from "../potions/cauldron";
import Ingredients from "../potions/ingredients";
import { greaterBoostStrength } from "./__mocks__/elixirIngredients";
import { calm } from "./__mocks__/elixirIngredients";
import Curses from "../potions/curses";
import { describe, expect, test } from "@jest/globals";
import { restoreIngredient1, restoreIngredient2 } from "./__mocks__/antidoteIngredients";

describe('Si no se cumplen todos los requisitos no se crea ninguna pocion', () => {
    it('Crea la Tonic of Downfall', () => {

    // Arrange
        const fakeIngredients = require("./__mocks__/fake-ingredients.json");
        const fakeCurses = require("./__mocks__/fake-curses.json");

        const ingredients = Ingredients.load(fakeIngredients).ingredients;
        const curses = Curses.load(fakeCurses).curses;

        const ingredientsArray = [restoreIngredient1, greaterBoostStrength, calm];

        const cauldron = new Cauldron(ingredients, curses);

        // Act
        const potion = cauldron.createPotion(ingredientsArray);

        // Assert
        expect(potion.name).toBe("Tonic of Dawnfall");
    });
});