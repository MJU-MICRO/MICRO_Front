import React, { ChangeEvent } from 'react';
import { styled } from 'styled-components';
import searchIcon from '../assets/search.svg';

type searchType = {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
};

const Search = ({ placeholder, onSearch }: searchType) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
    console.log(searchTerm);
  };

  return (
    <Wrapper>
      <img src={searchIcon} className='search-icon' alt='Search' />
      <input
        type='text'
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  width: 16rem;
  height: 2.4375rem;
  border-radius: 0.9375rem;
  background: #f5f5f7;
  color: 'rgba(245, 245, 247, 1)';
  display: flex;
  align-items: center;

  img {
    fill: rgba(0, 0, 0, 0.5);
    width: 1.11113rem;
    height: 1.0785rem;
    margin-left: 0.94rem;
    margin-right: 0.3rem;
  }

  input {
    width: 70%;
    padding-left: 0.7rem;
    color: rgba(0, 0, 0, 0.5);
    font-family: Gmarket Sans TTF;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background-color: inherit;
    border: none;
    outline: none;
    &:focus {
      border: none;
    }
  }
`;
