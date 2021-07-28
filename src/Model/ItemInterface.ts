<<<<<<< HEAD


export default interface Item {
    item: string
=======
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
>>>>>>> ff05ca94ee99655713aa3a5c0d1256008ab629ba
}