import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { countries } from '../utils/countries';

type Props = {
  country: string,
  choiceCountry: (choice: string) => void
};

const StyledUl = styled.ul`
  list-style: none;
  width: 250px;
  border: 0.5px solid grey;

  li {
    cursor: pointer;
  }

  li:hover {
    background-color: #80808038;
  }
`

export default function Autocomplete({country, choiceCountry}: Props) {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const array = countries.filter((e) => e.toLocaleLowerCase().includes(country.toLocaleLowerCase()));
    setList(array);
  }, [country]);

  return (
    <StyledUl>
      {list.map((e) => <li onClick={(e) => choiceCountry(e.currentTarget.outerText)} key={e}>{e}</li>)}
    </StyledUl>
  );
};
