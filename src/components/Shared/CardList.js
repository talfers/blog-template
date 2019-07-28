import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import Card from './Card';

function CardList() {
  return (
    <CardGrid>
        <ProductConsumer>
          {value => {
            return value.blogs.map((blog) => {
              return (
                <Link onClick={() => value.handleDetail(blog.id)} key={blog.id} to="/details">
                  <Card key={blog.id} blog={blog} />
                </Link>
              )
            })
          }}
        </ProductConsumer>
    </CardGrid>
  )
}

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 2fr));
  grid-gap: 1rem;
`

export default CardList;
