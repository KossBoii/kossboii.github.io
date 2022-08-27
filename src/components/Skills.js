import meter95 from "../assets/imgs/meter/meter95.svg";
import meter90 from "../assets/imgs/meter/meter90.svg";
import meter85 from "../assets/imgs/meter/meter85.svg";
import meter80 from "../assets/imgs/meter/meter80.svg";
// import meter75 from "../assets/imgs/meter/meter75.svg";
// import meter70 from "../assets/imgs/meter/meter70.svg";
import meter60 from "../assets/imgs/meter/meter60.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/imgs/arrow1.svg";
// import arrow2 from "../assets/imgs/arrow2.svg";
import colorSharp from "../assets/imgs/color-sharp.png"
import '../assets/css/Skills.css'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
                          What's in the basket? More than just fresh eggs and I'm always looking to learn more<br></br>
                          I stand on a sweet spot where Design & Code intersects
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter90} alt="meter90" />
                                <h5>Software Engineering & Design</h5>
                            </div> 
                            <div className="item">
                                <img src={meter85} alt="meter85" />
                                <h5>ML Algorithms</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="meter80" />
                                <h5>Big Data & Cloud Computing</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="meter90" />
                                <h5>Data Structures</h5>
                            </div>
                            <div className="item">
                                <img src={meter85} alt="meter85" />
                                <h5>Data Visualization</h5>
                            </div>
                            <div className="item">
                                <img src={meter85} alt="meter85" />
                                <h5>Data Analytics</h5>
                            </div>
                            <div className="item">
                                <img src={meter95} alt="meter95" />
                                <h5>Probability & Statistics</h5>
                            </div>
                            <div className="item">
                                <img src={meter60} alt="meter60" />
                                <h5>Web Development</h5>
                            </div> 
                            <div className="item">
                                <img src={meter90} alt="meter90" />
                                <h5>Databases</h5>
                            </div> 
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="colorSharp" />
    </section>
  )
}
