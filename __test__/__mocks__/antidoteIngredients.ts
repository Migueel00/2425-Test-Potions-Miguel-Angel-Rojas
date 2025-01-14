export const restoreIngredient1 = {
    _id: "6702b44f76863c206a48cce6",
    name: "Courageous Bloom",
    description:
        "A bloom that invigorates the constitution and instills bravery.",
    value: 105,
    effects: ["restore_constitution"],
    image: "/images/ingredients/restore/restore_17.webp",
    type: "ingredient",
    key: "a",
    qty: 1,
};

export const restoreIngredient2 = {
    _id: "6702b44f76863c206a48cce7",
    name: "Silver Petal",
    description:
        "A delicate petal that enhances charisma, making interactions smoother.",
    value: 30,
    effects: ["lesser_restore_charisma"],
    image: "/images/ingredients/restore/restore_18.webp",
    type: "ingredient",
    key: "b",
    qty: 1,
};
export const curse = {
    modifiers: {
        hit_points: 0,
        intelligence: 0,
        dexterity: 0,
        insanity: 0,
        charisma: -8,
        constitution: -12,
        strength: 0,
    },
    _id: "6693fd5846527d0df5f0efe8",
    name: "Frostbane Fever",
    description:
        "A chilling illness that lowers the body temperature drastically, causing frost to form on the skin and organs to freeze.",
    type: "illness",
    antidote_effects: ["restore_constitution", "lesser_restore_charisma"],
    poison_effects: ["damage_constitution", "lesser_damage_charisma"],
};

export const ingredientNoRestore = {
    _id: "6702b46b76863c206a48ccfd",
    name: "Crippling Bloom",
    description:
        "A flower that weakens constitution and breaks the will of its user.",
    value: 60,
    effects: ["damage_constitution"],
    image: "/images/ingredients/damage/damage_11.webp",
    type: "ingredient",
};

export const ingredientNoRestore2 = {
    "_id": "6702b46b76863c206a48cd05",
    "name": "Gloom Petal",
    "description": "A petal that shrouds charisma in shadows, making one unlikable.",
    "value": 160,
    "effects": [
    "greater_damage_charisma"
    ],
    "image": "/images/ingredients/damage/damage_19.webp",
    "type": "ingredient"
}