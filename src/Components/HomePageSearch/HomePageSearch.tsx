import { FormEvent, useContext, useEffect, useState } from "react";
import { fetchAllRecipes } from "../../Services/RecipeServices";
import './HomePageSearchStyles.css';

// importing Item interface
// importing Item interface to use as props for component
import {Item} from "../../Model/ItemInterface";
import { ItemContext } from "../../Context/ItemContextProvider";

// this is a random change to test for Tami 

// interface Props {
//     onSubmit: () => void;
// }

function HomePageSearch(){

    // context provider //
    const {items, fetchRecipes} = useContext(ItemContext);
    
    // states for the HomeSearch Page only //
    const [searchData, setSearchData] = useState('')
    const [healthOptions, setHealthOptions] = useState(
        {
        gluten: false,
        vegetarian: false
        }
    );
    console.log(healthOptions);

    const [calorieCount, setCalorieCount] = useState('')
    console.log(calorieCount);

    const [dietaryOptions, setDietaryOptions] = useState({
        balanced: false,
        lowFat: false
    })
    console.log(dietaryOptions);

    // functions //
    function handleSubmit(e: FormEvent){
        e.preventDefault();
        // search data is a string
        console.log(searchData);
        // query is type Query
        fetchRecipes({query: searchData, health: healthOptions, calories: calorieCount, diet: dietaryOptions})
    }

    // when hitting the checkbox, start as false, when clicked, change to the opposite (true).
    function glutenCheck(){
        let glutenCheck = healthOptions.gluten;
        setHealthOptions({gluten: !glutenCheck, vegetarian: healthOptions.vegetarian})
    }

    function vegetarianCheck(){
        let vegetarianCheck = healthOptions.vegetarian;
        setHealthOptions({gluten: healthOptions.gluten, vegetarian: !vegetarianCheck})
    }

    function balancedCheck(){
        let balancedCheck = dietaryOptions.balanced;
        setDietaryOptions({balanced: !balancedCheck, lowFat: dietaryOptions.lowFat})
    }

    function lowFatCheck(){
        let lowFatCheck = dietaryOptions.lowFat;
        setDietaryOptions({balanced: dietaryOptions.balanced, lowFat: !lowFatCheck})
    }




    console.log("items:", items);
    console.log(searchData);

    return (
        <div className="SearchContainer">
            <div className="FormContainer">
                <form className="mainForm" action="submit" onSubmit={handleSubmit}>
                    <h3 className="fontTitles">Search A Recipe</h3>
                    <section className="SearchOptionSection">
                        <div className="SearchOptionsContainer">
                            <section className="healthOptions">
                                <p className="optionsTitles">Health Options</p>
                                <div className="checkboxContainer">
                                    <input type="checkbox" id="gluten-free" name="health-labels" value="gluten-free" checked={healthOptions.gluten} onClick={glutenCheck}/>
                                    <label className="fontLabels" htmlFor="gluten-free">Gluten Free</label>
                                </div>
                                <div className="checkboxContainer">
                                    <input type="checkbox" id="vegetarian" name="health-labels" value="vegetarian" checked={healthOptions.vegetarian} onClick={vegetarianCheck}/>
                                    <label className="fontLabels" htmlFor="vegetarian">Vegetarian</label>
                                </div>
                            </section>
                            <section className="healthOptions">
                                <p className="optionsTitles">Diet Options</p>
                                <div className="checkboxContainer">
                                    <input type="checkbox" id="balanced" name="health-labels" value="balanced" checked={dietaryOptions.balanced} onClick={balancedCheck}/>
                                    <label className="fontLabels" htmlFor="balanced">Balanced</label>
                                </div>
                                <div className="checkboxContainer">
                                    <input type="checkbox" id="low-fat" name="health-labels" value="low-fat" checked={dietaryOptions.lowFat} onClick={lowFatCheck}/>
                                    <label className="fontLabels" htmlFor="low-fat">Low-Fat</label>
                                </div>
                            </section>
                            <section className="healthOptions">
                                <div className="calorie-and-count optionsTitles">
                                    <label className="fontLabels calorieTitleLabel" htmlFor="calories">Calorie Limit:</label>
                                    <p className="calorieCountTrackerP">{calorieCount}</p>
                                </div>
                                <div>
                                    <input type="range" id="calories" name="calories" min="0" max="1000"  step="50" value={calorieCount} onChange= { (e) => setCalorieCount(e.target.value) }/>
                                </div>
                            </section>
                        </div>
                        <div className="searchButtonDiv">
                            <label className="searchLabel fontLabels" htmlFor="search">Search:</label>
                            <input type="text" name="search" id="search" value={searchData} onChange={ (e) => setSearchData(e.target.value) }/>
                        </div>
                    </section>
                    <div className="SubmitButtonContainer">
                        <button className="SubmitButton"type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <section className="SearchResultsContainer">
            </section>
        </div>
    )

}

export default HomePageSearch;