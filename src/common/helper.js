import { IMG_URL } from "./constants";

export const getRandomImage = (arr) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * 50);
    return IMG_URL.replace('%s', randomIndex);
}
