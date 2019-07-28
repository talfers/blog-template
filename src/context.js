import React from 'react';
import { blogList, blogDetails } from './data';
import { slidesData } from './slidesData'

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    blogs: [],
    blogDetails: blogDetails,
    slides: slidesData,
  };

  componentDidMount() {
    this.setStories();
    this.slideInterval();
  }

  setStories = () => {
    let tempStories = [];
    blogList.forEach(story => {
      const singleItem = {...story};
      tempStories = [...tempStories, singleItem]
    });
    this.setState({blogs: tempStories});
  }

  getItem = (id) => {
    const blog = this.state.blogs.find(item => item.id === id);
    return blog;
  }

  handleDetail = (id) => {
    const blog = this.getItem(id);
    this.setState({blogDetails: blog});
  }

  prevSlide = (slides) => {
    const currentSlide = slides.filter(slide => slide.showing === true);
    const currentId = currentSlide[0].id
    let nextId = currentId - 1;
    if(currentId <= 0){
      nextId = slides.length - 1;
    }
    const newSlides = slides.map(slide => {
      if(slide.id === currentId){
        slide.showing = false;
      }
      if(slide.id === nextId){
        slide.showing = true;
      }
      return slide;
    })
    this.setState({slides: newSlides});
  }

  nextSlide = (slides) => {
    const currentSlide = slides.filter(slide => slide.showing === true);
    const currentId = currentSlide[0].id;
    let nextId = currentId + 1;
    if(currentId === slides.length - 1){
      nextId = 0;
    }
    const newSlides = slides.map(slide => {
      if(slide.id === currentId){
        slide.showing = false;
      }
      if(slide.id === nextId){
        slide.showing = true;
      }
      return slide;
    })
    this.setState({slides: newSlides});
  }

  slideCounter = () => {
    let slides = [...this.state.slides];
    const current = slides.filter(slide => slide.showing === true);
    const currentId = current[0].id;
    let nextId = currentId + 1;
    if(currentId === slides.length - 1) {
      nextId = 0;
    }
    slides = slides.map(slide => {
      if(nextId === slide.id) {
        slide.showing = true;
      }
      if(currentId === slide.id) {
        slide.showing = false;
      }
      return slide;
    })
    this.setState({slides})
  }

  slideInterval = () => {
    setInterval(this.slideCounter, 6000);
  };

  render () {
    return(
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail,
          nextSlide: this.nextSlide,
          prevSlide: this.prevSlide,
          slideInterval: this.slideInterval

        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
