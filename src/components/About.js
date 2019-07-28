import React from 'react';
import styled from 'styled-components';
import Header from './Shared/Header';
import { SectParagraph } from './Shared/StyledComponents';
import Aside from './Shared/Aside';
import { ContentContainer, PageContent } from './Shared/StyledComponents';

const About = () => {
  return (
    <ContentContainer>
      <PageContent>
        <Header title={"about"} />
        <SectParagraph>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          <div className="break" />
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </SectParagraph>
        <AboutCard>
          <div className="about-img">
            <img src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} alt="selfie" />
          </div>
          <div className="about-desc">
            <div className="bold">Sara Gunning</div>
            <div>Webgirl - Designer - Entrepreneur</div>
            <div className="emph muted">Always looking to make others better</div>
          </div>
        </AboutCard>
      </PageContent>
      <Aside/>
    </ContentContainer>
  )
}

const AboutCard = styled.div`
  display: grid;
  grid-template-columns: 175px auto;
  grid-gap: 2rem;
  padding: 20px 0;
  margin: 0;

  img {
    width: 100%;
    height: 175px;
    border-radius: 50%;
    object-fit: cover;

  }

  .about-desc {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: left;
    justify-content: center;
    border-left: solid black 2px;
    box-sizing: border-box;
    font-size: 0.75rem;
    padding: 0 2rem;
  }
`

export default About;
