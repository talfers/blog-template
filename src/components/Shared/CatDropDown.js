import React from 'react';
import styled from 'styled-components';

function CatDropDown({categories}){
  const cats = categories.map(cat => {
      return <div>{cat.title}</div>
  })
  return (
    <div>
      
    </div>
  )
}

const DropDownContainer = styled.div`
  height: 3rem;
  width: 100%;
  border: 2px black solid;
  padding: 0.5rem;
  display: flex;
  align-items: center;
`

export default CatDropDown
