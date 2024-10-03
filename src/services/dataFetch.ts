export const getRickandMorty = async (numberOfCharacters:Number) => {
    try {
        const rickMorty = await fetch(`https://rickandmortyapi.com/api/character/${numberOfCharacters}`).then(res => res.json());
        return rickMorty;
    } catch (error) {
        console.error(error);
    }
}