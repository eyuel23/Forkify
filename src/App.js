import "./App.scss";
import Container from "./components/Container";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
    </Container>
  );
}

export default App;
