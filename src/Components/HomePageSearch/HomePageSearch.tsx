import { useEffect, useState } from "react";
import { fetchAllRecipes } from "../../Services/RecipeServices";
import './HomePageSearchStyles.css';



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
        <div className="SearchContainer">
        <h3>Home Page Search component</h3>
            <div className="FormContainer">
                <form action="#">
                    <h3>What are ya lookin' for?</h3>
                    <div>
                        <label htmlFor="search">Search</label>
                        <input type="text" name="search" id="search" placeholder="grabby paws" />
                    </div>
                    <div className="SearchOptionsContainer">
                        <label htmlFor="gluten-free">Gluten Free</label>
                        <input type="checkbox" id="gluten-free" name="health-labels" value="gluten-free"/>
                        <label htmlFor="vegetarian">Vegetarian</label>
                        <input type="checkbox" id="vegetarian" name="health-labels" value="vegetarian"/>
                    </div>
                </form>
            </div>
            <section className="SearchResultsContainer">
                <p>{search.query}</p>
                <p>{recipes}</p>
            </section>
        </div>
    )

}

export default HomePageSearch;