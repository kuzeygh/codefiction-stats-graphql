import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { EpisodesChart } from './EpisodesChart';
import { Header } from './Header';
import { Loading } from './Loading';
import { EpisodesTabView } from './tabs/EpisodesTabView';
import { TotalListensTabView } from './tabs/TotalListensTabView';
import { SocialMediaTabView } from './tabs/SocialMediaTabView';
import { OverallValuesTabView } from './tabs/OverallValuesTabView';

import './DashboardView.scss';
import { WhatsUpToday } from './WhatsUpToday';

export class DashboardView extends Component {
  constructor() {
    super();
    this.state = { activeTab: 1 };
    this.handleSelect = this.handleSelect.bind(this);
  }

  render() {
    const {
      results: { twitter, overallTimeSeries, podcasts, youtube },
    } = this.props;
    const whatsUpTodayContext = {
      twitter,
      overallTimeSeries,
      podcasts,
      youtube,
    };

    if (!podcasts) {
      return <Loading />;
    }
    return (
      <div>
        <Header />
        <WhatsUpToday results={whatsUpTodayContext} />
        <OverallValuesTabView
          overallTimeSeries={overallTimeSeries}
          youtube={youtube}
          twitter={twitter}
          podcasts={podcasts}
        />
        <SocialMediaTabView overallTimeSeries={overallTimeSeries} />
        <Grid>
          <Row>
            <Col md={12}>
              <Tabs
                activeKey={this.state.activeTab}
                onSelect={this.handleSelect}
                id="dashboard-tabs"
                className="dashboard-tabs"
              >
                <Tab eventKey={1} title="Dinlenme Detayları">
                  <TotalListensTabView
                    episodes={podcasts[0].episodes}
                    youtubeVideos={youtube.videos}
                  />
                </Tab>
                <Tab eventKey={2} title="Toplam Dinlenme">
                  <EpisodesTabView
                    episodes={podcasts[0].episodes}
                    videos={youtube.videos}
                  />
                </Tab>
                <Tab eventKey={3} title="Aylık Dinlenme">
                  <EpisodesChart podcast={podcasts[0]} />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  handleSelect(selectedTab) {
    this.setState({
      activeTab: selectedTab,
    });
  }
}

DashboardView.propTypes = {
  results: PropTypes.array,
};

export default DashboardView;
