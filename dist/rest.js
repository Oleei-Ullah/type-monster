"use strict";
const fruitsCount = (...fruits) => {
    const upperFruits = fruits.map((fr) => fr.toLocaleUpperCase());
    console.log(upperFruits);
    return upperFruits;
};
fruitsCount('banana', 'kola', 'mango', 'jam');
