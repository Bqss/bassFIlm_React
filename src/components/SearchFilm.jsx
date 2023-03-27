import React, { useState } from 'react'


const SearchFilm = ({searchHandler}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <form className='searchFilm' onSubmit={(ev) => {
        ev.preventDefault();
        searchHandler(searchTerm)
      }}>
        <input type="text" value={searchTerm} onChange={(ev) => setSearchTerm(ev.target.value)} className='searchFilm__input'  name="title" placeholder='Cari judul film...' />
        <button title='search' type='submit' className='button btn-1'>Search</button>
      </form>
    </>
  )
}

export default SearchFilm