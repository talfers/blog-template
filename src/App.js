import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NavBar from './components/Shared/NavBar';
import { PageContainer } from './components/Shared/StyledComponents';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <PageContainer>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </Switch>
      </PageContainer>
    </div>
  );
}

export default App;
