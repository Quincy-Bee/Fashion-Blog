import Header from "./Header.jsx";
import Article from "./Article.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          image="/blog-image-1.jpg"
        />

        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          image="/blog-image-2.jpg"
        />
      </main>

      <Footer />
    </>
  );
}

export default App;