export const getRickandMorty = async (valueNumber:Number) => {
    try {
        const rickMorty = await fetch(`https://rickandmortyapi.com/api/character${valueNumber}`).then(res => res.json());
        return rickMorty;
    } catch (error) {
        console.error(error);
    }
}