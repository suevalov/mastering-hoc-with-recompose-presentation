import React from 'react';
import { Row, Col } from 'elemental';
import { Heading } from '../../src/spectacle';

export default class WebBrowser extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
    onUpdateStep: React.PropTypes.func.isRequired,
  };

  render() {
    const styles = {
      heading: {
        size: 2,
        textColor: 'darkPrimary',
        caps: true,
        style: {
          display: 'inline-block',
          position: 'relative',
          fontWeight: '700',
          lineHeight: '2em'
        }
      },
      spanLeft: {
        style: {
          position: 'absolute',
          left: '-180px',
          top: '-22px',
          fontSize: '240px'
        }
      },
      spanRight: {
        style: {
          position: 'absolute',
          right: '-180px',
          top: '-22px',
          fontSize: '240px'
        }
      }
    };

    return (
      <div>
        <Row>
          <Col>
            <Heading {...styles.heading}>
              <span {...styles.spanLeft}>&lt;</span>
              Web Browser
              <span {...styles.spanRight}>&gt;</span>
            </Heading>
          </Col>
        </Row>
      </div>
    );
  }

}
