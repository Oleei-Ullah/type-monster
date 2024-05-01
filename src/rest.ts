const fruitsCount = (...fruits : string[]) : string[] => {
    const upperFruits = fruits.map(( fr: string) : string => fr.toLocaleUpperCase())

    console.log(upperFruits);

    return upperFruits;
}

fruitsCount('banana', 'kola', 'mango', 'jam');