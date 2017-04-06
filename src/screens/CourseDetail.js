import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import { colors } from '../global.styles';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: white;

  li {
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid ${colors.line};
    position: relative;

    &:first-child {
      font-size: 8pt;
      letter-spacing: 0.5;
      font-weight: 700;
      height: 28px;
      line-height: 28px;
      color: ${colors.gradientFrom};
      background: #f5f5f5;
      padding-left: 7pt;
      text-transform: uppercase;

      span {
        float: right;
        padding-right: 8pt;
        color: #555;
      }
    }

    a {
      padding-left: 30px;
      text-decoration: none;
      font-size: 11pt;
      color: ${colors.black};

      span {
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: silver;
        position: absolute;
        top: 20px;
        left: 11px;
      }

      &.completed {
        color: #999;

        span {
          background: limegreen;
        }
      }

      &.current {
        color: ${colors.primary};
        font-weight: 600;

        span {
          display: none;
        }
      }
    }
  }
`;

class CourseDetail extends Component {

  render() {

    console.warn(this.props.match.params)

    return (
      <div>

        <Header label="hola" expanded withImage={this.props.match.params.id == 2} progress={this.props.match.params.id == 2 ? 63 : 26} />

        <div className='scrollable-area' style={{ height: "calc(100vh - 352px)" }}>
          <List>
            <li>Course Overview<span>1:38</span></li>
            <li><a href="#" className="completed"><span />Course Overview</a></li>
          </List>

          <List>
            <li>Introduction<span>20:29</span></li>
            <li><a href="#" className="completed"><span />Introduction</a></li>
            <li><a href="#" className="completed"><span />Your First Component</a></li>
            <li><a href="#" className="current"><span />Reusable Components</a></li>
            <li><a href="#">Summary</a></li>
          </List>

          <List>
            <li>Working with Data<span>12:00</span></li>
            <li><a href="#">Introduction</a></li>
            <li><a href="#">Build a Girhub Card Component</a></li>
            <li><a href="#">Taking Input from the User</a></li>
            <li><a href="#">Summary</a></li>
          </List>

          <List>
            <li>Building the Game Interface<span>15:29</span></li>
            <li><a href="#">Introduction</a></li>
            <li><a href="#">The Main Game Component</a></li>
            <li><a href="#">The Stars, Button, and Answer Frames</a></li>
            <li><a href="#">Random Number of Stars</a></li>
            <li><a href="#">The Numbers Frame</a></li>
            <li><a href="#">Summary</a></li>
          </List>

          <List>
            <li>Numbers Selection<span>15:05</span></li>
            <li><a href="#">Introduction</a></li>
            <li><a href="#">The State of Selected Numbers</a></li>
            <li><a href="#">Selecting a Number</a></li>
            <li><a href="#">Changing The Answer</a></li>
            <li><a href="#">Enhancing the UI</a></li>
            <li><a href="#">Summary</a></li>
          </List>

          <List>
            <li>Game State<span>26:35</span></li>
            <li><a href="#">Introduction</a></li>
            <li><a href="#">Verifying an Answer</a></li>
            <li><a href="#">Accepting an Answer</a></li>
            <li><a href="#">Redraws</a></li>
            <li><a href="#">The Done Status</a></li>
            <li><a href="#">Winning and Losing the Game</a></li>
            <li><a href="#">Summary</a></li>
          </List>


        </div>
      </div>
    );
  }
}

CourseDetail.propTypes = {

};

export default CourseDetail;
