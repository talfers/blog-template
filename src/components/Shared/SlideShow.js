import React from 'react';
import styled from 'styled-components';

function SlideShow(props) {
  const slides = props.slides.map((slide) => {
    return (
      <div key={slide.id} style={{backgroundImage: `url(${slide.img})`}} className={`slide ${slide.showing ? 'current' : ''}`}>
        <div className="slide-content">
          <h1>{slide.title}</h1>
          <p>{slide.desc}</p>
        </div>
      </div>
    )
  })
    return (
        <Slider>
          {slides}
          <div className="buttons">
            <button className='prev'
              onClick={() => {
                props.prevSlide(props.slides);
                clearInterval(props.slideInterval)
              }}><i className="fas fa-arrow-left"></i></button>
            <button className='next' onClick={() => {props.nextSlide(props.slides)}}><i className="fas fa-arrow-right"></i></button>
          </div>
        </Slider>
    )
  }

const Slider = styled.div`
  position: relative;
  overflow: hidden;
  height: 60vh;
  width: 100%;

  .slide {
    background: no-repeat center center/cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;

    &:first-child {
      background: url('https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') no-repeat center center/cover;
    }

    .slide-content {
      position: absolute;
      bottom: 70px;
      left: -600px;
      opacity: 0;
      width: 600px;
      background: rgba(255,255,255,0.8);
      color: #333;
      padding: 35px;

      h1 {
        margin-bottom: 10px;
      }
    }
    &.current {
      opacity: 1;

      .slide-content {
        opacity: 1;
        transform: translateX(600px);
        transition: all 0.7s ease-in-out 0.3s;
      }
    }
  }

  .buttons {

    button {
      border: 2px solid #fff;
      border-radius: 50%;
      background: transparent;
      height: 40px;
      width: 40px;
      cursor: pointer;
      color: #fff;

      &:hover {
        background: #fff;
        color: #333;
      }

      &.next {
        position: absolute;
        top: 50%;
        right: 15px;
      }

      &.prev {
        position: absolute;
        top: 50%;
        left: 15px;
      }
    }


  }

  @media (max-width: 768px) {
    height: 90vh;

    .slide .slide-content {
      bottom: -300px;
      left: 0;
      width: 100%;
    }
    .slide.current .slide-content {
      transform: translateY(-300px)
    }
  }


`


export default SlideShow;
