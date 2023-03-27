import CacheService from "./CacheService";

const PODCAST_LIST_URL =
  "https://api.allorigins.win/get?url=" +
  encodeURIComponent(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );

const cache = CacheService.getInstance().cache;

async function getAllPodcasts(setRawPodcasts) {
  const cachedData = cache.get(PODCAST_LIST_URL);
  if (cachedData) {
    setRawPodcasts(cachedData);
    return;
  }

  try {
    const response = await fetch(PODCAST_LIST_URL);
    const data = await response.json();
    cache.set(PODCAST_LIST_URL, data);
    setRawPodcasts(data);
  } catch (error) {
    console.error("Error fetching podcasts", error);
  }
}

async function getPodcastDetail(id, setPodcastInfo) {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
  )}`;

  if (cache.has(url)) {
    const data = cache.get(url);
    setPodcastInfo(data);
    localStorage.setItem("podcastInfo", JSON.stringify(data));
    return;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    const results = JSON.parse(data.contents).results.slice(1);
    setPodcastInfo(results);
    cache.set(url, results);
    localStorage.setItem("podcastInfo", JSON.stringify(results));
  } catch (error) {
    console.error("Error fetching podcast detail", error);
  }
}

export { getAllPodcasts, getPodcastDetail };
