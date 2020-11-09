import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { TopNav, Footer } from 'components/Layout';
import './App.scss';
import Intro from 'components/Home/Intro';
import Bulletin from 'components/Home/Bulletin';
import Features from 'components/Home/Features';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faExternalLinkAlt, faChevronCircleLeft, faLock, faCheck, faUserCog,
  faSignOutAlt, faUserPlus, faCog, faPlus, faMinus, faChevronDown, faChevronUp,
  faChevronLeft, faChevronRight, faTimes, faTrash, faQuestionCircle, faChartBar, faWallet, faPollH, faExclamation, faSave, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Product from 'components/Home/Product';
import Blog from 'components/Home/Blog';

  // Setup fontawesome so we can access icons via string instead of explicitly importing each
library.add(faSpinner, faLock, faExternalLinkAlt,faChevronCircleLeft, faCheck, faUserCog,
  faSignOutAlt, faUserPlus, faCog, faPlus, faMinus, faChevronDown, faChevronUp, faChevronLeft,
  faChevronRight, faTimes, faTrash, faQuestionCircle, faChartBar, faWallet, faPollH, faExclamation, faSave, faTrashAlt
  );

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  if (windowWidth < 600) {
    // do nothing
  }
  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);

  return (
    <Container fluid className="App">
      <TopNav />
      <Row className='border-top'></Row>
      <Intro />
      <Bulletin />
      <Features />
      <Product />
      <Blog />
      <Footer />
    </Container>
  );
}

export default App;
