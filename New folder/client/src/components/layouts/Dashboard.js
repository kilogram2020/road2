//Dashboard Page which contains side bar code
import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//For the icons used in side menu 
import { faBars, faTimes, faQrcode,faRoad,faStream,faAddressCard,faQuestionCircle,faSlidersH,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'//To use top menu 
export default class Dashboard  extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
    return (
      // <Sidebar
      //   sidebar={<div>
      //   <b>Sidebar content</b>
      //   <Link to="/Form"  className="navbarItems">
      //       <li>
      //       <FontAwesomeIcon icon={faCoffee} />
      //       </li>
      //      </Link>
      //       </div>        }
      //   open={this.state.sidebarOpen}
      //   onSetOpen={this.onSetSidebarOpen}
      //   styles={{ sidebar: { background: "white" } }}
      // >
          
      //   <button onClick={() => this.onSetSidebarOpen(true)}>
      //     Open sidebar
      //   </button>
      // </Sidebar>
    
    
      <body>
          <Menu />
    <input type="checkbox" id="check" />
    <label for="check">
    <i id="btn"><FontAwesomeIcon icon={faBars} /></i>
      <i id="cancel"><FontAwesomeIcon icon ={faTimes} ></FontAwesomeIcon></i>
    </label>
    <div className="sidebar">
    <header className="gg">Menu</header>
  <ul>
    <li><a href="/"><i><FontAwesomeIcon icon={faQrcode} /></i>Dashboard</a></li>
    {/* <li><a Link to="/form"><FontAwesomeIcon icon={faRoad} /><i></i>Road Cutting</a></li> */}
    <Link to="Search"  className="navbarItems">
            <li>
            <FontAwesomeIcon icon={faRoad} />
    &nbsp;&nbsp;Road Cutting
            </li>
           </Link>
    <li><a href="/"><i><FontAwesomeIcon icon={faStream} /></i>Overview</a></li>
    <li><a href="/"><i><FontAwesomeIcon icon={faAddressCard} /></i>Profile</a></li>
    <li><a href="/"><i><FontAwesomeIcon icon={faQuestionCircle} /></i>About</a></li>
    <li><a href="/"><i><FontAwesomeIcon icon={faSlidersH} /></i>Services</a></li>
    <li><a href="/"><i><FontAwesomeIcon icon={faEnvelope} /></i>Contact</a></li>
  </ul>
</div>
 <section></section>

  </body>
    );
  }
}