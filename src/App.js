import React, { Component } from 'react';
import AllCourses from './screens/AllCourses';
import styled from 'styled-components';

import { colors } from './global.styles';

const AppContainer = styled.div`
  background: ${colors.gray};

  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  height: 44px;
  line-height: 41px;
  padding: 1px 10px 0 10px;
  font-size: 17px;
  font-weight: 700;
  background: ${colors.white};
  border-bottom: 0.5px solid ${colors.line};
`;

const HeaderButton = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${colors.primary};
`;

const Tabs = styled.div`
  height: 49px;
  background: ${colors.white};
  border-top: 0.5px solid ${colors.line};

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      width: auto;
      min-width: 60px;
      text-align: center;

      &:first-child a {
        border-left: none;
      }

      a {
        text-decoration: none;
        padding: 0 15px;
        display: block;
        background: ${colors.white};
        color: ${colors.primary};
        border-left: 0.5px solid ${colors.line};
        height: 48px;
        line-height: 46px;
      }
    }
  }

`;

class App extends Component {
  render() {
    return (
      <AppContainer>

        <Header>
          <HeaderButton style={{ float: 'left' }}>All Courses</HeaderButton>
          <HeaderButton style={{ float: 'right' }}>Let's Learn</HeaderButton>
        </Header>

        <AllCourses />

        <Tabs>
          <ul>
            <li><a href="#">All Courses</a></li>
            <li><a href="#">All Courses 2</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
          </ul>
        </Tabs>

      </AppContainer>
    );
  }
}

export default App;
