import {
    restoreIngredient1,
    restoreIngredient2,
    ingredientNoRestore, 
    ingredientNoRestore2
} from "./__mocks__/antidoteIngredients";
import Cauldron from "../potions/cauldron";
import Ingredients from "../potions/ingredients";
import Curses from "../potions/curses";
import { describe, expect, test } from "@jest/globals";

describe("Cuando todos los ingredientes llevan el efecto Restore", () => {
    describe("Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta se creeara el antidoto asociado a la enfermedad", () => {
        it('El nombre debera ser el correspondiente. Antidote of + "nombre de la enfermedad"', () => {
            // Arrange
            const fakeIngredients = require("./__mocks__/fake-ingredients.json");
            const fakeCurses = require("./__mocks__/fake-curses.json");

            const ingredients = Ingredients.load(fakeIngredients).ingredients;
            const curses = Curses.load(fakeCurses).curses;

            const ingredientsArray = [restoreIngredient1, restoreIngredient2];

            const cauldron = new Cauldron(ingredients, curses);

            // Act
            const potion = cauldron.createPotion(ingredientsArray);

            // Assert
            expect(potion.name).toBe("Antidote of Frostbane Fever");
        });

        it("Los atributos tendran el valor que aparece en la enfermedad pero cambiado de signo o, en su defecto, el rango de valores que se muestra en la tabla de creacion de pociones (si se ha empleado)", () => {
            // Arrange
            const fakeIngredients = require("./__mocks__/fake-ingredients.json");
            const fakeCurses = require("./__mocks__/fake-curses.json");

            const ingredients = Ingredients.load(fakeIngredients).ingredients;
            const curses = Curses.load(fakeCurses).curses;

            const ingredientsArray = [restoreIngredient1, restoreIngredient2];

            const cauldron = new Cauldron(ingredients, curses);

            // Act
            const potion = cauldron.createPotion(ingredientsArray);

            // Assert
            expect(potion.modifiers.constitution).toBeGreaterThan(9);
            expect(potion.modifiers.constitution).toBeLessThan(14);

            expect(potion.modifiers.charisma).toBeGreaterThan(5);
            expect(potion.modifiers.constitution).toBeLessThan(10);

        });
    });
});

describe('Si alguno de los ingredientes no tiene el nombre Restore', () => {

    it('No podremos crear un antidoto. El nombre de la pocion creada no llevara la palabra "Antidote"', () => {
        // Arrange
        const fakeIngredients = require("./__mocks__/fake-ingredients.json");
        const fakeCurses = require("./__mocks__/fake-curses.json");

        const ingredients = Ingredients.load(fakeIngredients).ingredients;
        const curses = Curses.load(fakeCurses).curses;

        const ingredientsArray = [ingredientNoRestore, ingredientNoRestore2];

        const cauldron = new Cauldron(ingredients, curses);

        // Act
        const potion = cauldron.createPotion(ingredientsArray);

        // Assert
        expect(potion.name).not.toContain('Antidote');
    });
});

