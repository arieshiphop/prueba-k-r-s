import CacheService from "./CacheService";

const PODCAST_LIST_URL =
  "https://api.allorigins.win/get?url=" +
  encodeURIComponent(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
const cache = CacheService.getInstance().cache;

const getAllPodcasts = async (setRawPodcasts) => {
  const cachedData = cache.get(PODCAST_LIST_URL);
  if (cachedData) {
    setRawPodcasts(cachedData);
  } else {
    const response = await fetch(PODCAST_LIST_URL);
    const data = await response.json();
    cache.set(PODCAST_LIST_URL, data);
    setRawPodcasts(data);
  }
};
const getPodcastDetail = async (id, setPodcastInfo) => {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
  )}`;
  if (cache.has(url)) {
    const data = cache.get(url);
    setPodcastInfo(data);
    localStorage.setItem("podcastInfo", JSON.stringify(data));
  } else {
    const res = await fetch(url);
    const data = await res.json();
    console.log(JSON.parse(data.contents).results.slice(1));
    setPodcastInfo(JSON.parse(data.contents).results.slice(1));
    cache.set(url, JSON.parse(data.contents).results.slice(1));
    localStorage.setItem(
      "podcastInfo",
      JSON.stringify(JSON.parse(data.contents).results.slice(1))
    );
  }
};
export { getAllPodcasts, getPodcastDetail };
