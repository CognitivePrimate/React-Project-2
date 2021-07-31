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
    const [glutenFree, setGlutenFree] = useState(false);


    function handleSubmit(e: FormEvent){
        e.preventDefault();
        // search data is a string
        console.log(searchData);
        // query is type Query
        fetchRecipes({query: searchData, gluten: glutenFree})
    }

    // when hitting the checkbox, start as false, when clicked, change to the opposite (true).
    function glutenCheck(){
        setGlutenFree(!glutenFree);
        console.log(glutenFree);
    }


    console.log("items:", items);
    console.log(searchData);

    return (
        <div className="SearchContainer">
            <div className="FormContainer">
                <form action="submit" onSubmit={handleSubmit}>
                    <h3 className="fontTitles">What are ya lookin' for?</h3>
                    <section className="SearchOptionSection">
                        <div className="SearchOptionsContainer">
                            <label className="fontLabels" htmlFor="gluten-free">Gluten Free</label>
                            <input type="checkbox" id="gluten-free" name="health-labels" value="gluten-free" checked={glutenFree} onClick={glutenCheck}/>
                            <label className="fontLabels" htmlFor="vegetarian">Vegetarian</label>
                            <input type="checkbox" id="vegetarian" name="health-labels" value="vegetarian"/>
                        </div>
                        <div>
                            <label className="searchLabel fontLabels" htmlFor="search">Search</label>
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