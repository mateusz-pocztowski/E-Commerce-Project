import React from 'react';
import searchIcon from 'assets/icons/search.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const Search = () => {
  return (
    <>
      <form>
        {/* <input type="search" placeholder="Search"> */}
        <ButtonIcon icon={searchIcon} />
      </form>
    </>
  );
};
export default Search;
