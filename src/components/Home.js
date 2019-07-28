import React from 'react';
import CardList from './Shared/CardList';
import { ContentContainer, PageContent } from './Shared/StyledComponents';
import { ProductConsumer } from '../context';
import SlideShow from './Shared/SlideShow';
import Aside from './Shared/Aside';


const Home = () => {
  return (
    <React.Fragment>
      <ProductConsumer>
        {(value) => {
          return (
            <SlideShow slideInterval={value.slideInterval} prevSlide={value.prevSlide} nextSlide={value.nextSlide} slides={value.slides} />
          )
        }}
      </ProductConsumer>
      <ContentContainer>
        <PageContent>
          <CardList />
        </PageContent>
        <Aside/>
      </ContentContainer>
  </React.Fragment>




  )
}

export default Home;
