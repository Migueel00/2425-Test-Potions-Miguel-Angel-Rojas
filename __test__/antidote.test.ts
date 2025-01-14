import { restoreIngredient1, restoreIngredient2 } from './__mocks__/antidoteIngredients';
import Cauldron from '../potions/cauldron';
import Ingredients from '../potions/ingredients';
import Curses from '../potions/curses';
import {describe, expect, test} from '@jest/globals';

describe('Cuando todos los ingredientes llevan el efecto Restore',  () => {

    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta se creeara el antidoto asociado a la enfermedad', () => {

        it('El nombre debera ser el correspondiente. Antidote of + "nombre de la enfermedad"', () => {
            // Arrange
            const fakeIngredients = require('./__mocks__/fake-ingredients.json');
            const fakeCurses = require('./__mocks__/fake-curses.json');

            const ingredients = Ingredients.load(fakeIngredients).ingredients;
            const curses = Curses.load(fakeCurses).curses;

            const ingredientsArray = [restoreIngredient1, restoreIngredient2];

            const cauldron = new Cauldron(ingredients, curses);

            // Act
            const potion = cauldron.createPotion(ingredientsArray);
            console.log(potion);

            // Assert
            expect(potion.name).toBe("Antidote of Frostbane Fever");
        });

        
    });
});