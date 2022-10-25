import "./App.scss";
import Container from "./components/Container";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation";
import Recipe from "./components/Recipe";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <SearchResults />
      <Recipe />
    </Container>
  );
}

export default App;
