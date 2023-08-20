import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import searchIcon from '../../assets/search.svg';

type searchType = {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
};

const Search = ({ placeholder, onSearch }: searchType) => {
  const [isClicked, setIsClicked] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
    console.log(searchTerm);
  };

  const handleWrapperClicked = () => {
    setIsClicked(!isClicked);
  };

  // 외부 클릭 시
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsClicked(false);
      }
    };
    // document - DOM 최상위 객체
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // event listentner 누적 방지
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Wrapper
        ref={wrapperRef}
        onClick={handleWrapperClicked}
        className={isClicked ? 'clicked' : ''}>
        <img src={searchIcon} className='search-icon' alt='Search' />
        <input
          type='text'
          placeholder={placeholder}
          onChange={handleInputChange}
        />
      </Wrapper>
      {isClicked ? (
        <SearchContent className='searchContent'>
          단체나 모집 공고를 검색해보세요 🔍
        </SearchContent>
      ) : (
        <SearchContent></SearchContent>
      )}
    </>
  );
};

export default Search;

const Wrapper = styled.div`
  width: 16rem;
  height: 1.875rem;
  border-radius: 0.5125rem;
  background: #f5f5f7;
  color: 'rgba(245, 245, 247, 1)';
  display: flex;
  align-items: center;
  position: absolute;
  top: 0.62rem;
  transition: all 0.3s ease-out;
  &.clicked {
    width: 48.5rem;
    background: #fff;
    box-shadow: 0px 0px 4px 0px rgba(0, 143, 213, 0.5);
    transition: all 0.3s ease-out;
  }

  img {
    fill: rgba(0, 0, 0, 0.5);
    width: 0.8125rem;
    height: 0.8125rem;
    margin-left: 0.94rem;
    margin-right: 0.96rem;
  }

  input {
    width: 90%;
    padding-left: 0.7rem;
    color: rgba(0, 0, 0, 0.5);

    font-family: Gmarket Sans TTF;
    font-size: 0.8125rem;
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

const SearchContent = styled.div`
  position: absolute;
  top: 2.8rem;
  width: 48.5rem;
  height: 8.625rem;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-out;

  &.searchContent {
    display: flex;
    visibility: visible;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 0.3s ease-out;
    color: #000000ae;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
