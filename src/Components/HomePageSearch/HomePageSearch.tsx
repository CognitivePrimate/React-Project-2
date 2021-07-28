import { useEffect, useState } from "react";
import { fetchAllRecipes } from "../../Services/RecipeServices";


function HomePageSearch(){

    const [search, setSearch] = useState({
        query:'test'
    })

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchAllRecipes().then((data) => {
            setRecipes(data);
        })
    }, []);

    return (
        <div>
        <h3>Home Page Search component</h3>
    
            <form action="#">
                <h3>What are ya lookin' for?</h3>
                <div>
                    <label htmlFor="search">Search</label>
                    <input type="text" name="search" id="search" placeholder="grabby paws" value={search.query} />
                </div>
                <div>
                    <label htmlFor="gluten-free">Gluten Free</label>
                    <input type="checkbox" id="gluten-free" name="health-labels" value="gluten-free"/>
                    <label htmlFor="vegetarian">Vegetarian</label>
                    <input type="checkbox" id="vegetarian" name="health-labels" value="vegetarian"/>
                </div>
            </form>
            <p>{search.query}</p>
            <p>{recipes}</p>
        </div>
    )

}

export default HomePageSearch;