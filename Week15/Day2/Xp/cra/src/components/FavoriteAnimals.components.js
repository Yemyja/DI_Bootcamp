import React from "react";
export const UserFavoriteAnimals = ({favorites}) => {
    return favorites.map ((favorites,i ) => <li key={i}>{favorites}</li>);
}