import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
       <div className='container'>
        <nav>
          <a href ='../public/index.html'>
          <div className='logo'>
            <img src ={require('./media/robot logo.png')}></img>
            <p>Artificial Intelligence</p>
          </div> 
          </a>
          <input type="checkbox" id="check"/>
          <ul className='nav-links'>
            <label for='check' className='close'>x</label>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
          <div className='menu'>
            <label for ='check' className='menu-open'>=</label>
          <button className="btn">Sign In</button>
          </div>
        </nav>
       </div>
      </header>
      <div className='container'>
      <div className='showcase'>
        <div className='showcase-content'>
          <p>Next genaretion platform</p>
          <h1>Artificial intelligence & Syber security</h1>
          <h4>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</h4>
          <div className='buttons'>
            <button className='btn'>Get Started</button>
            <button className='btn'>Watch Video</button>
          </div>
        </div>
        <img src ={require('./media/showcase.png')}></img>
      </div>
      <div className='sponsor'>
      <img src ={require('./media/sp1.png')}></img>
      <img src ={require('./media/sp2.png')}></img>
      <img src ={require('./media/sp3.png')}></img>
      <img src ={require('./media/sp4.png')}></img>
      </div>
      <div className='section1'>
      <img src ={require('./media/brain.png')}></img>
      <div>
        <h1>Apply AI, Deep Learning and Data Sciece to solve</h1>
        <h4>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h4>
        <button className='btn'>Learn More</button>
      </div>
      </div>
      <div className='cards'>
        <div className='card'>
        <img src ={require('./media/f1.png')}></img>
        <h3>Naxly as the Winners in Global Agency Awards</h3>
        <h4>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</h4>
        </div>
        <div className='card'>
        <img src ={require('./media/f2.png')}></img>
        <h3>Expert Prespective Agency Awards</h3>
        <h4>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</h4>
        </div>
        <div className='card'>
        <img src ={require('./media/f3.png')}></img>
        <h3>Business Prespective Global Agency Awards</h3>
        <h4>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</h4>
        </div>
        <div className='card'>
        <img src ={require('./media/f4.png')}></img>
        <h3>Value for Results in Global Agency Awards</h3>
        <h4>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</h4>
        </div>
        <div className='card'>
        <img src ={require('./media/f5.png')}></img>
        <h3>Global Experience in Agency Awards</h3>
        <h4>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</h4>
        </div>
      </div>
      <div className='section2'>
        <div>
          <h1>What our clients say about our awesome solutions</h1>
          <br/>
          <h4>
          To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.
          <br/><br/>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.
          <br/><br/>
          Lorem ipsum is placeholder previewing layouts and visual mockups.
          <br/><br/>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </h4>
        </div>
        <img src ={require('./media/tel.png')}></img>
      </div>
      <footer>
        <div className='firstColumn'>
        <div className='logo footerlogo'>
            <img src ={require('./media/robot logo.png')}></img>
            <p>Artificial Intelligence</p>
            <h4>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</h4>
          </div>
          <ul className='address'>
            <li><i class="fa-solid fa-envelope"></i> Company@gmail.com.com</li>
            <li><i class="fa-solid fa-phone"></i> Phone: (064) 332-1233</li>
            <li><i class="fa-solid fa-location-dot"></i> 450 Wall Street, USA, New York</li>
          </ul>
        </div>
        <div className='column'>
          <h2><a href='#'>INFORMATION</a></h2>
          <h4><a href='#'>New Collection</a></h4>
          <h4><a href='#'>About Store</a></h4>
          <h4><a href='#'>Contact Us</a></h4>
          <h4><a href='#'>Latest News</a></h4>
          <h4><a href='#'>Our Sitemap</a></h4>
          <h4><a href='#'>Orders History</a></h4>
        </div>
        <div className='column'>
          <h2><a href='#'>FOOTER MENU</a></h2>
          <h4><a href='#'>Instagram profile</a></h4>
          <h4><a href='#'>New Collection</a></h4>
          <h4><a href='#'>Contact Us</a></h4>
          <h4><a href='#'>Latest News</a></h4>
          <h4><a href='#'>Terms & Conditions</a></h4>
          <h4><a href='#'>Purchase Theme</a></h4>
        </div>
        <div className='column'>
          <h2><a href='#'>USEFUL LINKS</a></h2>
          <h4><a href='#'>Instagram profile</a></h4>
          <h4><a href='#'>New Collection</a></h4>
          <h4><a href='#'>Contact Us</a></h4>
          <h4><a href='#'>Latest News</a></h4>
          <h4><a href='#'>Terms & Conditions</a></h4>
          <h4><a href='#'>Purchase Theme</a></h4>
        </div>
        <div className='lastColumn'>
        <h2><a href='#'>ABOUT THE STORE</a></h2>
        <h4>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</h4>
        <p>www.company.com</p>
        <div className='social'>
          <a href='#'><i class="fa-brands fa-facebook"></i></a>
          <a href='#'><i class="fa-brands fa-instagram"></i></a>
          <a href='#'><i class="fa-brands fa-twitter"></i></a>
          <a href='#'><i class="fa-brands fa-linkedin"></i></a>
          <a href='#'><i class="fa-brands fa-youtube"></i></a>
        </div>
        <select>
          <option>English</option>
          <option>Russian</option>
          <option>Uzbek</option>
        </select>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;





// const openMenu = document.querySelector(".menu-open");
// const navLinks = document.querySelector(".nav-links");

// openMenu.addEventListener("click", function(){
//   navLinks.style.transform = "translate(0)"
// })

// document.querySelector(".close").addEventListener("click", function() {
//   navLinks.style.transform = "translate(100%)"
// })