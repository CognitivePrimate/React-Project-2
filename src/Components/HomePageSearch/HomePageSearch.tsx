import { FormEvent, useContext, useEffect, useState } from "react";
import { fetchAllRecipes } from "../../Services/RecipeServices";
import './HomePageSearchStyles.css';

// importing Item interface
// importing Item interface to use as props for component
import {Item} from "../../Model/ItemInterface";
import { ItemContext } from "../../Context/ItemContextProvider";


// interface Props {
//     onSubmit: () => void;
// }

function HomePageSearch(){
    const {items, favorites, fetchRecipes, addFavorite, removeFavorite} = useContext(ItemContext);
    
    const [searchData, setSearchData] = useState('')


    function handleSubmit(e: FormEvent){

        // prevent default
        e.preventDefault();

// attempt 1
        console.log(searchData);
        fetchRecipes({query: searchData})


// attempt 2

        // fetchAllRecipes({query: searchData}).then((data) => {
        //     fetchRecipes(data)
        // }

// attempt 3
        // fetchRecipes(testSearchItem);

// attempt 4
        // attempt 1
        // console.log(searchData);
        // let NewData = fetchRecipes({search: searchData})
        // console.log(NewData);


        // on submit, get value entered
        // set parameters variable as an object && add params into this function (not as interface)
        // only needs actual search parameters ^^
        // push results into Params object
        // conditionally add k/v pairs (not required) to narrow down Params object
        // make new request to fetch recipe --- use fetch recipe callback but pass Params object
    }


    
    console.log("items:", items);
    console.log(searchData);

    return (
        <div className="SearchContainer">
            <div className="FormContainer">
                <form action="submit" onSubmit={handleSubmit}>
                    <h3>What are ya lookin' for?</h3>
                    <section className="SearchOptionSection">
                        <div className="SearchOptionsContainer">
                            <label htmlFor="gluten-free">Gluten Free</label>
                            <input type="checkbox" id="gluten-free" name="health-labels" value="gluten-free"/>
                            <label htmlFor="vegetarian">Vegetarian</label>
                            <input type="checkbox" id="vegetarian" name="health-labels" value="vegetarian"/>
                        </div>
                        <div>
                            <label htmlFor="search">Search</label>
                            <input type="text" name="search" id="search" value={searchData} onChange={ (e) => setSearchData(e.target.value) }/>
                        </div>
                    </section>
                    <div className="SubmitButtonContainer">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <section className="SearchResultsContainer">
            </section>
        </div>
    )

}

export default HomePageSearch;