// blueprint for individual recipe searched and returned item or items
export default interface Item {
    label: string;
    image: string;
    url: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    ingredientLines: string[];
    calories: number;
    totalTime: number;
    favorite: boolean;
}