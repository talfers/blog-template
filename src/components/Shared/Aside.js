import React from 'react';
import { AsideContent } from './StyledComponents';
import styled from 'styled-components';

const Aside = () => {
  return (
    <AsideContent>
      <AsideItem />
      <AsideItem />
      <AsideItem />
    </AsideContent>
  )
}

const AsideItem = styled.div`
  width: 100%;
  min-height: 200px;
  border: 1px solid #000000;
`

export default Aside;
