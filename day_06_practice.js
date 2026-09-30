// fetch practice
const pokemonNames = ["pikachu", "charizard", "bulbasaur"]

fetchData();

async function fetchData (){
    try{
            const pokemonData = await Promise.all(pokemonNames.map(async(pokemonName) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

            if(!response.ok){
            throw new Error("Could not fetch resource");
        }

            const data = await response.json()
            return {
                name: data.name,
                height: data.height,
                weight: data.weight
            }
            }))
            console.log(pokemonData)
            
    }

    catch(error){
        console.error(error)
    }
    
}