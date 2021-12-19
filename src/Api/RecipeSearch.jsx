import React, { useState } from "react";

const SearchBar = ( { onSearch } ) => {
    const [query, setQuery] = useState("");
    
    return (
        <div style={{display: "flex", width: "50%", margin: "2rem auto"}}>
            <input type="text" style={{width: "70%", fontSize: "2rem"}} value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="name of recipe to search..."/>
            <button style={{width: "20%", marginLeft:"10%"}} onClick={()=>onSearch({query})}>Search</button>
        </div>
    )
}


const RecipeCard = ({recipe}) => {
    return (
        <div style={{display: "flex", gap:"1rem", flexDirection:"column", width:"30%", border:"1px solid gray", margin:"2% 0%"}}>
            <img style={{width:"100%"}} src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div style={{display:"flex", gap:"2rem", justifyContent:"center", width:"80%"}}>
                <div>{recipe.strMeal}</div>
                <div>{recipe.strCategory}</div>
            </div>
        </div>
    )
}
const RecipeSearch = () => {
    const [res, setRes] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async ({query}) => {
        try {
            setIsLoading(true)
            let url = process.env.REACT_APP_URL;
            url += query;
            let data = await fetch(url);
            data = await data.json();
            setRes(data.meals);
        } catch ( err ) {
            console.log(err);
            setIsError(false);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div style={{display: "flex", flexDirection:"column", width: "90%", margin: "auto"}}>
            <h1>Search Recipes</h1>
            <SearchBar onSearch={handleSearch} />
            <div style={{display: "flex", justifyContent:"space-around", flexWrap:"wrap"}}>
                { 
                    isLoading ? (
                        <div>Loading...</div>
                    ) : isError ? (
                        <div>Error....</div>
                    ) : (
                        res?.map(data => (
                            <RecipeCard key={data.idMeal} recipe={data} />
                        ))
                    )
                }
            </div>
        </div>
    )

    
}

export default RecipeSearch;