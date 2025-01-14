import { poisonIngredient, poisonIngredient2 } from "./__mocks__/poisonIngredient";
import Cauldron from "../potions/cauldron";
import { restoreIngredient1 } from "./__mocks__/antidoteIngredients";
import Ingredients from "../potions/ingredients";
import Curses from "../potions/curses";
import { describe, expect, test } from "@jest/globals";

describe('Cuando todos los ingredientes llevan el efecto Damage', () => {

    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta, se creera el poison asociado a esa enfermedad', () => {

        it('El nombre deberá ser el correspondiente. Poison of + "Nombre de la enfermedad" ', () => {
            // Arrange
            const fakeIngredients = require("./__mocks__/fake-ingredients.json");
            const fakeCurses = require("./__mocks__/fake-curses.json");

            const ingredients = Ingredients.load(fakeIngredients).ingredients;
            const curses = Curses.load(fakeCurses).curses;

            const ingredientsArray = [poisonIngredient, poisonIngredient2];

            const cauldron = new Cauldron(ingredients, curses);

            // Act
            const potion = cauldron.createPotion(ingredientsArray);

            // Assert
            expect(potion.name).toBe("Poison of Frostbane Fever");
        });
    });

    it("Los atributos tendran el valor que aparece en la enfermedad pero cambiado de signo o, en su defecto, el rango de valores que se muestra en la tabla de creacion de pociones (si se ha empleado)", () => {
        // Arrange
        const fakeIngredients = require("./__mocks__/fake-ingredients.json");
        const fakeCurses = require("./__mocks__/fake-curses.json");

        const ingredients = Ingredients.load(fakeIngredients).ingredients;
        const curses = Curses.load(fakeCurses).curses;

        const ingredientsArray = [poisonIngredient, poisonIngredient2];

        const cauldron = new Cauldron(ingredients, curses);

        // Act
        const potion = cauldron.createPotion(ingredientsArray);

        // Assert
        expect(potion.modifiers.constitution).toBeGreaterThan(-9);
        expect(potion.modifiers.constitution).toBeLessThan(-14);

        expect(potion.modifiers.charisma).toBeGreaterThan(-5);
        expect(potion.modifiers.constitution).toBeLessThan(-10);


    });
});

describe('Si alguno de los ingredientes no tiene el nombre "Damage"', () => {
    it('No podremos crear un poison. El nombre de la pocion creada no llevara la palabra poison', () => {

        // Arrange
        const fakeIngredients = require("./__mocks__/fake-ingredients.json");
        const fakeCurses = require("./__mocks__/fake-curses.json");

        const ingredients = Ingredients.load(fakeIngredients).ingredients;
        const curses = Curses.load(fakeCurses).curses;

        const ingredientsArray = [poisonIngredient, restoreIngredient1];

        const cauldron = new Cauldron(ingredients, curses);

        // Act
        const potion = cauldron.createPotion(ingredientsArray);

        expect(potion.name).not.toContain('Poison');
    });
});