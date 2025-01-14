import Cauldron from "../potions/cauldron";
import { calm, greaterBoostStrength, greaterCalm, leastBostIngredient, leastCalm1, lesserBoostIngredient2, lesserCalm, normalBoostConst2, normlBoostConst1 } from "./__mocks__/elixirIngredients";
import Ingredients from "../potions/ingredients";
import Curses from "../potions/curses";
import { describe, expect, test } from "@jest/globals";
import { restoreIngredient1, restoreIngredient2 } from "./__mocks__/antidoteIngredients";

describe('Cuando el número de ingredientes es de 2-4', () => {

    describe('Cuando todos los igredientes asociados llevaran los nombres: "Boost" ', () => {

        describe('Cuando todos los ingredientes tiene el mismo atributo INT, CONST', () => {
            describe('Cuando todos los efectos son tipo least', () => {

                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeara al múltiplo de 5 inmediatamente inferior', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [leastBostIngredient, leastBostIngredient];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfValuesIngredients = 9;
                    const multiploInferiorDirecto = 5;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert 
                    expect(potion.modifier_value).toBe(multiploInferiorDirecto);
                });

                it('la duracion sera la media de duraciones de los efectos de cada ingrediente redondeado para abajo', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [leastBostIngredient, leastBostIngredient];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfDurationIngredients = 1;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.duration).toBe(mediaOfDurationIngredients);
                });

            });

            describe('Cuando todos los efectos son tipo lesser', () => {

                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeara al múltiplo de 5 inmediatamente inferior', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [lesserBoostIngredient2, lesserBoostIngredient2];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfValuesIngredients = 32;
                    const multiploInferiorDirecto = 30;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);
                    console.log(potion);

                    // Assert 
                    expect(potion.modifier_value).toBe(multiploInferiorDirecto);
                });

                it('la duracion sera la media de duraciones de los efectos de cada ingrediente redondeado para abajo', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [lesserBoostIngredient2, lesserBoostIngredient2];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfDurationIngredients = 1;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.duration).toBe(mediaOfDurationIngredients);
                });

            });

            describe('Cuando todos los efectos son tipo normal', () => {

                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeara al múltiplo de 5 inmediatamente inferior', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [normlBoostConst1, normalBoostConst2];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfValuesIngredients = 65;
                    const multiploInferiorDirecto = 65;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);
                    console.log(potion);

                    // Assert 
                    expect(potion.modifier_value).toBe(multiploInferiorDirecto);
                });

                it('la duracion sera la media de duraciones de los efectos de cada ingrediente redondeado para abajo', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [normlBoostConst1, normalBoostConst2];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfDurationIngredients = 2;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.duration).toBe(mediaOfDurationIngredients);
                });

            });

            describe('Cuando todos los efectos son tipo greater', () => {

                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeara al múltiplo de 5 inmediatamente inferior', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [greaterBoostStrength, greaterBoostStrength];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfValuesIngredients = 275;
                    const multiploInferiorDirecto = 275;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);
                    console.log(potion);

                    // Assert 
                    expect(potion.modifier_value).toBe(multiploInferiorDirecto);
                });

                it('la duracion sera la media de duraciones de los efectos de cada ingrediente redondeado para abajo', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [greaterBoostStrength, greaterBoostStrength];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfDurationIngredients = 3;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.duration).toBe(mediaOfDurationIngredients);
                });

            });

            describe('Cuando todos los efectos son tipo diferente', () => {

                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeara al múltiplo de 5 inmediatamente inferior', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [lesserBoostIngredient2, normalBoostConst2];

                    const cauldron = new Cauldron(ingredients, curses);
                    const multiploInferiorDirecto = 35;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);
                    console.log(potion);

                    // Assert 
                    expect(potion.modifier_value).toBe(multiploInferiorDirecto);
                });

                it('la duracion sera la media de duraciones de los efectos de cada ingrediente redondeado para abajo', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [lesserBoostIngredient2, normalBoostConst2];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfDurationIngredients = 1;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.duration).toBe(mediaOfDurationIngredients);
                });


                it('El nombre de la pocíon sera: Modifier + Attribute + Elixir El modificador del nombre será el que corresponda con el values correspondiente segun la tabla', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [lesserBoostIngredient2, normalBoostConst2];

                    const cauldron = new Cauldron(ingredients, curses);

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.name).toBe('Greater Constitution Elixir');
                });
            });
        });

        describe('Cuando no todos los ingredientes llevan el mismo atributo', () => {
            it('No podremos crear elixir la pocion creada no llevara la palabra elixir', () => {

                // Arrange
                const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                const fakeCurses = require("./__mocks__/fake-curses.json");

                const ingredients = Ingredients.load(fakeIngredients).ingredients;
                const curses = Curses.load(fakeCurses).curses;

                const ingredientsArray = [greaterBoostStrength, normalBoostConst2];

                const cauldron = new Cauldron(ingredients, curses);

                // Act
                const potion = cauldron.createPotion(ingredientsArray);

                // Assert
                expect(potion.name).not.toContain('Elixir');
            });
        });
    });

    describe('Cuando todos los ingredientes llevaran asociados los nombres Calm', () => {
        describe('Cuando todos los ingredientes tiene el mismo atributo INT, CONST', () => {
            describe('Cuando todos los efectos son tipo least', () => {

                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeara al múltiplo de 5 inmediatamente inferior', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [leastCalm1, leastCalm1];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfValuesIngredients = 12;
                    const multiploInferiorDirecto = 10;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert 
                    expect(potion.modifier_value).toBe(multiploInferiorDirecto);
                });

                it('la duracion sera la media de duraciones de los efectos de cada ingrediente redondeado para abajo', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [leastCalm1, leastCalm1];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfDurationIngredients = 1;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.duration).toBe(mediaOfDurationIngredients);
                });

            });

            describe('Cuando todos los efectos son tipo lesser', () => {

                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeara al múltiplo de 5 inmediatamente inferior', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [lesserCalm, lesserCalm];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfValuesIngredients = 32;
                    const multiploInferiorDirecto = 30;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);
                    console.log(potion);

                    // Assert 
                    expect(potion.modifier_value).toBe(multiploInferiorDirecto);
                });

                it('la duracion sera la media de duraciones de los efectos de cada ingrediente redondeado para abajo', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [lesserCalm, lesserCalm];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfDurationIngredients = 1;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.duration).toBe(mediaOfDurationIngredients);
                });

            });

            describe('Cuando todos los efectos son tipo normal', () => {

                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeara al múltiplo de 5 inmediatamente inferior', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [calm, calm];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfValuesIngredients = 78;
                    const multiploInferiorDirecto = 75;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);
                    console.log(potion);

                    // Assert 
                    expect(potion.modifier_value).toBe(multiploInferiorDirecto);
                });

                it('la duracion sera la media de duraciones de los efectos de cada ingrediente redondeado para abajo', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [calm, calm];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfDurationIngredients = 2;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.duration).toBe(mediaOfDurationIngredients);
                });

            });

            describe('Cuando todos los efectos son tipo greater', () => {

                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeara al múltiplo de 5 inmediatamente inferior', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [greaterCalm, greaterCalm];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfValuesIngredients = 250;
                    const multiploInferiorDirecto = 250;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);
                    console.log(potion);

                    // Assert 
                    expect(potion.modifier_value).toBe(multiploInferiorDirecto);
                });

                it('la duracion sera la media de duraciones de los efectos de cada ingrediente redondeado para abajo', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [greaterCalm, greaterCalm];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfDurationIngredients = 3;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.duration).toBe(mediaOfDurationIngredients);
                });

            });

            describe('Cuando todos los efectos son tipo diferente', () => {

                it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeara al múltiplo de 5 inmediatamente inferior', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [lesserCalm, leastCalm1, greaterCalm, calm];

                    const cauldron = new Cauldron(ingredients, curses);
                    const multiploInferiorDirecto = 90;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);
                    console.log(potion);

                    // Assert 
                    expect(potion.modifier_value).toBe(multiploInferiorDirecto);
                });

                it('la duracion sera la media de duraciones de los efectos de cada ingrediente redondeado para abajo', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [lesserCalm, leastCalm1, greaterCalm, calm];

                    const cauldron = new Cauldron(ingredients, curses);
                    const mediaOfDurationIngredients = 1;

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.duration).toBe(mediaOfDurationIngredients);
                });


                it('El nombre de la pocíon sera: Modifier + Attribute + Elixir El modificador del nombre será el que corresponda con el values correspondiente segun la tabla', () => {
                    // Arrange
                    const fakeIngredients = require("./__mocks__/fake-ingredients.json");
                    const fakeCurses = require("./__mocks__/fake-curses.json");

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [lesserCalm, leastCalm1, greaterCalm, calm];

                    const cauldron = new Cauldron(ingredients, curses);

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    // Assert
                    expect(potion.name).toBe('Greater Calm Elixir');
                });
            });
        });
    });

    describe('Cuando alguno de los efectos de ingredientes no lleva Calm o Boost', () => {
        it('No podremos crear el Elixir', () => {
            // Arrange
            const fakeIngredients = require("./__mocks__/fake-ingredients.json");
            const fakeCurses = require("./__mocks__/fake-curses.json");

            const ingredients = Ingredients.load(fakeIngredients).ingredients;
            const curses = Curses.load(fakeCurses).curses;

            const ingredientsArray = [lesserCalm, restoreIngredient1, greaterBoostStrength, restoreIngredient2];

            const cauldron = new Cauldron(ingredients, curses);

            // Act
            const potion = cauldron.createPotion(ingredientsArray);

            // Assert
            expect(potion.name).not.toContain('Elixir');
        })
    });
});