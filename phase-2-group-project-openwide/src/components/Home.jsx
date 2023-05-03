import listening from '../assets/listening.jpg'
import casssette from '../assets/cassette.jpg'
import headphones from '../assets/headphones.jpg'
import instruments from '../assets/instruments.jpg'
import musiclibrary from '../assets/musiclibrary.jpg'

const Home = () => {

  return (
    <>
    <header>
      <div className='image-side'>
        <img src={listening} alt="" />
      </div>
      <div className='text-side'>
        <h2>'Where words fail <br /> <span>Music speaks</span>'</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas non consectetur ratione totam praesentium. Dolore placeat reiciendis eaque possimus hic dolorem obcaecati sapiente debitis quas, tempora ea nesciunt eos aspernatur.</p>
          <button id="text-side-button">Discover</button>
      </div>
    </header>
    <div className="body-section">
      <div className="body-section-items cassette">
        <div>
        <img src={casssette} alt="" />
        <button class="image-button">Click Me</button>
        </div>
        <blockquote>“A painter paints pictures on canvas. <br /> But musicians paint their pictures on silence.” <br /> <span> – Leopold Stokowski </span> </blockquote>
      </div>
      <div className="body-section-items headphones">
        <blockquote>"Music is a language that doesn’t speak in particular words. <br /> It speaks in emotions, and if it’s in the bones, <br /> it’s in the bones.” <br /> <span> – Keith Richards</span> </blockquote>
        <img src={headphones} alt="" />
      </div>
      <div className="body-section-items instruments">
        <img src={instruments} alt="" />
        <blockquote>“After silence, that which comes <br /> nearest to expressing the inexpressible is music.” <br /> <span> – Aldous Huxley </span> </blockquote>
      </div>
      <div className="body-section-items music-library">
        <blockquote>"Music can name the unnameable <br /> and communicate the unknowable.” <br /> <span> – Leonard Bernstein </span></blockquote>
        <img src={musiclibrary} alt="" />
      </div>
    </div>
    </>
  )
}

export default Home