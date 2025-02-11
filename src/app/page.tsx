import Container from "./components/Container";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-vibrantBlue to-deepBlue">
        <Container>
          <Navbar />
        </Container>
      </div>
    </div>
  );
}
