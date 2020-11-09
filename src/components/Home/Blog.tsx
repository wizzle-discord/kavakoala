import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Card} from 'components/shared';

const Blog = () => (
  <Row className='features pt-5 pb-5'>
    <Col className={ 'm-auto align-self-center text-center' }>
      <h1>Blog</h1>
      <Row className='mt-5 mb-5'>
        <Col className='m-auto'>
        <span className='d-block'>Insights and news straight from the team.</span>
        <a href='#blog' className='d-block'>See all posts <img alt='chevron' src={`/img/chevron_blue.svg`} /></a>
        </Col>
      </Row>
      <Row className='justify-content-center mt-5 m-auto features-card-body'>
        <Card title='News Item Title goes here' subtitle='Author - 9 August 2020' icon='blog_avatar'>
          <p>
            News intro content goes here! Lorem
            ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation...
            <a href='#blog1'>Read <img alt='chevron' src={`/img/chevron_blue.svg`} /></a>
          </p>
        </Card>
        <Card title='News Item Title goes here' subtitle='Author - 9 August 2020' icon='blog_avatar'>
          <p>
            News intro content goes here! Lorem
            ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation...
            <a href='#blog1'>Read <img alt='chevron' src={`/img/chevron_blue.svg`} /></a>
          </p>
        </Card>
        <Card title='News Item Title goes here' subtitle='Author - 9 August 2020' icon='blog_avatar'>
          <p>
            News intro content goes here! Lorem
            ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation...
            <a href='#blog1'>Read <img alt='chevron' src={`/img/chevron_blue.svg`} /></a>
          </p>
        </Card>
      </Row>
    </Col>
  </Row>
)

export default Blog;