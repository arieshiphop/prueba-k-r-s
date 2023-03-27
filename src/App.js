import { Route } from "wouter";
import Header from "./components/Header";
import Home from "./pages/Home";
import PodcastDetailPage from "./pages/PodcastDetail";
import Episode from "./pages/Episode";
function App() {
  return (
    <div className="App">
      <Header />
      <Route component={Home} path="/" />
      <Route component={PodcastDetailPage} path="/podcast/:id" />
      <Route component={Episode} path="/podcast/:id/episode/:episodeId" />
    </div>
  );
}

export default App;
