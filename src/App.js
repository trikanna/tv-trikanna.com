import React, { Component } from 'react';
import AllCourses from './screens/AllCourses';
import styled from 'styled-components';

import { colors } from './global.styles';

import ReactGA from 'react-ga';

import { GoTerminal } from 'react-icons/lib/go';


import {
  IoIosFilm,
  IoIosBookmarksOutline,
  IoIosGearOutline,
  IoIosUploadOutline
} from 'react-icons/lib/io';

const AppContainer = styled.div`
  background: ${colors.gray};

  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  height: 64px;
  padding: 1px 8pt 0 8pt;
  font-size: 17px;
  font-weight: 700;
  background: linear-gradient(20deg, ${colors.gradientFrom} 0%, ${colors.gradientTo} 100%);
  border-bottom: 0.5px solid ${colors.line};
`;

const HeaderWrapper = styled.div`
  height: 44px;
  margin-top: 20px;
`;

const HeaderButton = styled.div`
  font-weight: 400;
  height: 44px;
  line-height: 41px;
  font-size: 15px;
  color: ${colors.white};

  svg {
    margin-top: -1.5pt;
    color: ${colors.white};
    font-size: 18pt;
    margin-right: 7px;
  }
`;

const Tabs = styled.div`
  height: 49pt;
  background: ${colors.white};
  border-top: 0.5px solid ${colors.line};
  background: rgb(249, 249, 249);

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
      width: 25%;

      &:first-child a {
        border-left: none;
      }

      a {
        text-decoration: none;
        padding: 0 15px;
        display: block;
        // background: ${colors.white};
        //color: ${colors.primary};

        // border-left: 0.5px solid ${colors.line};
        height: 49pt;
        line-height: 83pt;
        font-size: 10pt;
        position: relative;
        color: rgb(141,141,141);

        &.active {
          color: ${colors.gradientFrom};
        }

        svg {
          margin-right: 5px;
          font-size: 33px;
          position: absolute;
          top: 7pt;
          left: calc(50% - 12pt);
          width:  24pt;
          height: 24pt;
        }
      }
    }
  }

`;

class App extends Component {
  constructor(props) {
    super(props);

    this.initializeAnalytics();
  }

  initializeAnalytics() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-92692542-1');
      ReactGA.pageview(window.location.pathname);
    }
  }

  render() {
    return (
      <AppContainer>

        <Header>
          <HeaderWrapper>
            <HeaderButton style={{ float: 'left' }}><GoTerminal />All Courses</HeaderButton>
            <HeaderButton style={{ float: 'right', display: 'none' }}>+</HeaderButton>
          </HeaderWrapper>
        </Header>

        <AllCourses />

        <Tabs>
          <ul>
            <li><a href="#" className="active"><IoIosFilm />Courses</a></li>
            <li><a href="#"><IoIosBookmarksOutline />Articles</a></li>
            <li><a href="#"><IoIosUploadOutline />Share</a></li>
            <li><a href="#"><IoIosGearOutline />Settings</a></li>
          </ul>
        </Tabs>

      </AppContainer >
    );
  }
}

export default App;
