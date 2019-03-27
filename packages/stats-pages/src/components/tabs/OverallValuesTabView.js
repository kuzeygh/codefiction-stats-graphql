import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { OverallValue } from '../OverallValue';

export class OverallValuesTabView extends Component {
  render() {
    const { overallTimeSeries } = this.props;
    const { twitter } = this.props;
    const { youtube } = this.props;
    const { podcasts } = this.props;
    return (
      <Grid>
        <Row md={12}>
          <Col md={4}>
            <Panel>
              <Panel.Body className="bg-primary text-white">
                <OverallValue
                  valueKey="twitter"
                  text="Twitter Takipci Sayisi"
                  series={overallTimeSeries}
                  value={twitter ? twitter.followersCount : null}
                />
              </Panel.Body>
            </Panel>
          </Col>
          <Col md={4}>
            <Panel>
              <Panel.Body className="bg-success text-white">
                <OverallValue
                  valueKey="youtube"
                  text="Toplam Youtube Takipcisi"
                  series={overallTimeSeries}
                  value={
                    youtube.statistics
                      ? youtube.statistics.subscriberCount
                      : null
                  }
                />
              </Panel.Body>
            </Panel>
          </Col>
          <Col md={4}>
            <Panel>
              <Panel.Body className="bg-info text-white">
                <OverallValue
                  valueKey="podcast"
                  text="Toplam Podcast Dinleme"
                  series={overallTimeSeries}
                  value={
                    podcasts ? podcasts[0].overallStats.total_listens : null
                  }
                />
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

OverallValuesTabView.propTypes = {
  twitter: PropTypes.array,
  youtube: PropTypes.array,
  podcasts: PropTypes.array,
  overallTimeSeries: PropTypes.array,
};

export default OverallValuesTabView;
