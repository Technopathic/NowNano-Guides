import styled from "@emotion/styled"
import './App.css';

import Header from './components/Header'

const Gallery = styled.section`
  display:flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

const GalleryItem = styled.img`
  width: 100%;
`

const App = () => {
  return (
    <div className="App">
      <Header />
      <Gallery>
        <GalleryItem src="/images/gallery/1.jpg" />
        <GalleryItem src="/images/gallery/2.jpg" />
        <GalleryItem src="/images/gallery/3.jpg" />
        <GalleryItem src="/images/gallery/4.jpg" />
        <GalleryItem src="/images/gallery/5.jpg" />
      </Gallery>

    </div>
  );
}

export default App;
