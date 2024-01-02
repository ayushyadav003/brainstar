import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import './footer.scss'

export default function Footer() {
  return (
    <div className="footerWrapper">
      <div className="inner">
        <h3>Digital agency</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
          aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in
          volutpat ullamcorper amet adipiscing fermentum.
        </p>
        <div>
          <Twitter />
          <Facebook />
          <Instagram />
        </div>
      </div>
      <div className="inner2">
        <h3>Company</h3>
        <p>About</p>
        <p>Features</p>
        <p>Works</p>
        <p>Career</p>
      </div>
      <div className="inner2">
        <h3>Help</h3>
        <p>Customer Support</p>
        <p>Delivery Details</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="inner2">
        <h3>Resources</h3>
        <p>Free eBooksl</p>
        <p>How to - Blog</p>
      </div>
    </div>
  )
}
