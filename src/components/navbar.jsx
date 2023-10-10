import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';
import logoW from '../assets/oneclick-white-logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({
            clicked:
                !this.state.clicked
        })
    }
    render() {
        return (
            <div>
                <nav>
                    <img src={logoW} style={{ width: "5.5rem" }} className='bas' />
                    <div>
                        <ul id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}>
                            <img src={logo} style={{ width: "8rem", margin: '1rem auto 4rem auto' }} className='bas' />
                            <li><a href='/'>Home</a></li>
                            <li>
                                <a> Takaful & Insurance ▾</a>
                                <ul class="dropdown" style={{backgroundColor: "white"}}>
                                    
                                    <li><NavLink end to={"insurance/."} style={{color: 'black'}}>Car Insurance</NavLink></li>
                                    <li><a href="/insurance/bike" style={{color: 'black'}}>Bike Insurance</a></li>
                                    <li><a href="/insurance/health" style={{color: 'black'}}>Health Insurance</a></li>
                                    <li><a href="#" style={{color: 'black'}}>Travel Insurance</a></li>
                                    <li><a href="/life" style={{color: 'black'}}>Life Insurance</a></li>
                                </ul>
                            </li>
                            <li><a href='/contact'>Contact Us</a></li>
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='#'>FAQs Us</a></li>
                            <li className='bas'><a href='/signIn'><button>Sign in</button></a></li>
                        </ul>
                    </div>
                    <div className='btn-navbar'>
                        <a href='/signIn'><button>Sign in</button></a>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id='bars' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;