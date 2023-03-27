import axios from "axios";
import React, { useState } from "react";
import FilmCard from "../components/FilmCard";
import SearchFilm from "../components/SearchFilm";
import useMutation from "../hooks/useMutation";

const Home = ({ films, setFilms }) => {
  const { mutate, isError, isLoading } = useMutation(
    async (searchTerm) => {
      const result = await axios.get(
        "https://www.omdbapi.com/?apikey=63118199&s=" + searchTerm
      );
      return result.data;
    },
    [],
    {
      onSuccess: (result) => {
        setFilms(result.Search);
      },
    }
  );

  const handleSearch = async (searchTerm) => {
    mutate(searchTerm);
  };

  return (
    <>
      <SearchFilm searchHandler={handleSearch} />
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="films">
          {films?.map((film, i) => (
            <FilmCard key={i} data={film} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
