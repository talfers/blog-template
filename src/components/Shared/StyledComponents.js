import styled from 'styled-components';


export const PageContainer = styled.div`
  max-width: 100%;
  margin: 20px 15%;

`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
`

export const PageContent = styled.div`
  width: 100%;

  flex: 1 1 70%;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 0px 4px 0px lightgrey;
`
export const AsideContent = styled.div`
  flex: 1 1 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
`

export const Hero = styled.div`
  width: 100%;
  height: 150px;
  background: #232323;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    font-size: 1.5rem;
  }

  .sub-text {
    font-size: 1.2;
    font-style: italic;
  }
`;

export const SectParagraph = styled.div`
  text-align: left;
  padding: 0 20px;
  line-height: 1.6;
  font-family: Open-Sans, 'sans-serif';

  .break {
    margin: 0.5rem 0;
  }
`
