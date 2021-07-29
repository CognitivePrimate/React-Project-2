import { useContext, useEffect, useState } from "react";
import { fetchAllRecipes } from "../../Services/RecipeServices";
import './HomePageSearchStyles.css';

// importing Item interface
// importing Item interface to use as props for component
import Item from "../../Model/ItemInterface";
import { ItemContext } from "../../Context/ItemContextProvider";



function HomePageSearch(){

    const [search, setSearch] = useState({
        query:'test'
    })

    const {items, favorites, addItem, addFavorite, removeFavorite} = useContext(ItemContext)

    const handleSubmit = () => {
        // prevent default
        // on submit, get value entered
        // set parameters variable as an object && add params into this function (not as interface)
        // only needs actual search parameters ^^
        // push results into Params object
        // conditionally add k/v pairs (not required) to narrow down Params object
        // make new request to fetch recipe --- use fetch recipe callback but pass Params object
    }

    useEffect(() => {
        fetchAllRecipes({query: "chicken"}).then((data) => {
            console.log(data);
            addItem(data);
            
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
                {/* <p>{recipes}</p> */}
            </section>
        </div>
    )

}

export default HomePageSearch;