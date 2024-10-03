export const getFirstEpisode = async (nameOfFirstEpisode:String) => {
    try {
        const firstEpisode = await fetch(`${nameOfFirstEpisode}`).then(res => res.json());
        return firstEpisode;
    } catch (error) {
        console.error(error);
    }
}