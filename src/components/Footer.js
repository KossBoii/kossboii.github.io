import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/imgs/Long_personallogo.svg';
import fb_logo from '../assets/imgs/fb_logo.svg';
import ins_logo from '../assets/imgs/ins_logo.svg';
import linkedin_logo from '../assets/imgs/linkedin_logo.svg';
import '../assets/css/Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/kossboii/"><img src={fb_logo} alt="" /></a>
              <a href="https://www.instagram.com/tonyisme00/"><img src={ins_logo} alt="" /></a>
              <a href="https://www.linkedin.com/in/lntruong/"><img src={linkedin_logo} alt="" /></a>
            </div>
            <p>© 2022 Long Truong. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
