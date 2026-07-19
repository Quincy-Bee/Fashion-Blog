import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          image="/images/blog-image-1.jpg"
        />

        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          image="/images/blog-image-2.jpg"
        />
      </main>

      <Footer />
    </>
  );
}

export default App;