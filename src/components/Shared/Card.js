import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Card extends React.Component {
  render () {
    const { title, img, dateCreated, tags, story } = this.props.blog;
    const parsedDate = dateCreated.split(":", 2);
    const parsedTags = tags.map((tag, i) => {
      tag = tag.charAt(0).toUpperCase() + tag.slice(1, tag.length);
      return (
        <span key={i}>{i===tags.length-1 ? (tag) : (tag + ",")} </span>
      )
    })
    return (
      <CardItem>
        <img src={img} alt="blog-img"/>
        <div className="card-footer">
          <div className="card-info">
            <p className="secondary">{parsedTags}</p>
            <h3>{title}</h3>
            <p className='muted emph'>{parsedDate}</p>
            <p>{story.slice(0, 25) + "..."}</p>
          </div>
        </div>

      </CardItem>
    )
  }
}


const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  /*border: lightgrey solid 1px;*/
  border-radius: 6px;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 6px 0px grey;
  }

  @media (max-width: 768px) {
    box-shadow: 0px 0px 6px 0px grey;
  }

  img {
    max-height: 70%;
    width: 100%;
    object-fit: cover;

  }
  .card-footer {
    min-height: 120px;
    width: 100%;
    position: relative;



    .card-info {
      position: absolute;
      bottom: 0px;
      left: 15%;
      width: 70%;
      padding: 16px;
      background: #fff;

      h3 {
        font-size: 1.75rem;
        margin: 0rem 0;
      }

      p {
        margin: 0.25rem 0;
      }
    }
  }


`

Card.propTypes = {
  blog:PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    dateCreated: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    story: PropTypes.string,
  }).isRequired
};

export default Card;
