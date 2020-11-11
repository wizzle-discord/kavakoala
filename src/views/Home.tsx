import React from 'react';
import Container from 'react-bootstrap/Container';
import { TopNav, Footer } from 'components/Layout';
import Intro from 'components/Home/Intro';
import Bulletin from 'components/Home/Bulletin';
import Features from 'components/Home/Features';
import Product from 'components/Home/Product';
import Blog from 'components/Home/Blog';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface HomeProps extends RouteComponentProps<any> {
  history: any
}

const Home = (_props: HomeProps) => (
  <Container fluid className="home">
    <TopNav />
    <Intro />
    <Bulletin />
    <Features />
    <Product />
    <Blog />
    <Footer />
  </Container>
)

export default withRouter(Home);
