import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  console.log("Pokemon array:", pokemon);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {pokemon && pokemon.length > 0 ? (
            <div className="left-content">
              <div className="card-container">
                {pokemon.map((item) => (
                  <div key={item?.id} className="card" onClick={() => infoPokemon(item)}>
                    <h2>{item?.id ? `#${item.id}` : 'No ID'}</h2>
                    {item?.sprites?.front_default && (
                      <img src={item.sprites.front_default} alt="" />
                    )}
                    <h2>{item?.name ? capitalizeFirstLetter(item.name) : 'No Name'}</h2>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <h1>No Pokemon data available</h1>
          )}
        </>
      )}
    </>
  );
};

export default Card;




