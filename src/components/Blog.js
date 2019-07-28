import React from 'react';
import CardList from './Shared/CardList';
import { ContentContainer, PageContent, Hero } from './Shared/StyledComponents';
import Aside from './Shared/Aside';


const Blog = () => {
  return (
    <React.Fragment>
      <Hero>
        <div className="header">You are Searching:</div>
        <div className="sub-text">All Categories</div>
      </Hero>
      <ContentContainer>
        <PageContent>

            <CardList />
        </PageContent>
        <Aside/>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Blog;
