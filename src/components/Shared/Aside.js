import React from 'react';
import { AsideContent } from './StyledComponents';
import styled from 'styled-components';
import CatDropDown from './CatDropDown';
import { ProductConsumer } from '../../context';

const Aside = () => {
  return (

      <ProductConsumer>
        {({parseCats, blogs}) => {
          const categories = parseCats(blogs);
          return (
            <AsideContent>
              <AsideItem>
                <CatDropDown categories={categories}  onClick={() => {}}/>
              </AsideItem>

              <AsideItem />
              <AsideItem />
            </AsideContent>
          )
        }}
      </ProductConsumer>

  )
}

const AsideItem = styled.div`
  width: 100%;
  min-height: 200px;
  border: 1px solid #000000;
  display: flex;
  align-items:center;
  justify-content:center;
`

export default Aside;
