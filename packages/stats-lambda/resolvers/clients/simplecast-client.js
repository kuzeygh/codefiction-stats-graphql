const SimpleCastAPIClient = require('simplecast-api-client');
const { InMemoryCache } = require('./cache');

const CACHE_KEYS = {
  PODCASTS: 'CACHE:PODCASTS',
  EPISODES: 'CACHE:EPISODES::',
  OVERALL_PODCAST_STATS: 'CACHE:STATS:PODCAST::',
  OVERALL_EPISODE_STATS: 'CACHE:STATS:EPISODE::',
};

class SimpleCastClient {
  constructor() {
    this.client = new SimpleCastAPIClient({ apikey: process.env.SECRET });
    this.cache = new InMemoryCache();
  }

  getPodcasts() {
    return this.cache.getOrUpdate(CACHE_KEYS.PODCASTS, () =>
      this.client.podcasts.getPodcasts()
    );
  }

  getEpisodes(podcastId) {
    return this.cache.getOrUpdate(`${CACHE_KEYS.EPISODES}::${podcastId}`, () =>
      this.client.episodes.getEpisodes(podcastId)
    );
  }

  getOverallStats(podcastId, { timeframe, startDate, endDate }) {
    return this.cache.getOrUpdate(
      `${CACHE_KEYS.OVERALL_PODCAST_STATS}::${podcastId}`,
      () =>
        this.client.statistics.getOverallStats(podcastId, {
          timeframe,
          startDate,
          endDate,
        })
    );
  }

  getEpisodeStats(podcastId, episodeId, { timeframe, startDate, endDate }) {
    return this.cache.getOrUpdate(
      `${CACHE_KEYS.OVERALL_EPISODE_STATS}::${episodeId}`,
      () =>
        this.client.statistics.getEpisodeStats(podcastId, episodeId, {
          timeframe,
          startDate,
          endDate,
        })
    );
  }
}

module.exports = { SimpleCastClient };
