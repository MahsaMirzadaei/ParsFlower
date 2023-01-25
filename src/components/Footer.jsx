import React from 'react'
import logo from '../img/mainlogo.png'

import {HiOutlinePhone} from 'react-icons/hi';
import {BsInstagram} from 'react-icons/bs';
import {HiOutlineLocationMarker} from 'react-icons/hi'

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "../styles/FooterStyles";

const Footer = () => {
return (
	<Box>
	{/* <h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
	</h1> */}
	<Container>
		<Row>
		<Column>
			<img style={{width: "200px"}} src={logo} alt="Logo" />
		</Column>
		<Column>
			<Heading>Contact Us</Heading>

			<FooterLink href="#">
                <HiOutlinePhone/>
                <p className='ps-2'>+90 539 626 7466</p>
            </FooterLink>

			<FooterLink href="#">
                <HiOutlineLocationMarker/>
                <p className='ps-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
            </FooterLink>

			<FooterLink href="#">
                <BsInstagram/>
                <p className='ps-2'>
					parsflowertr
				</p>
            </FooterLink>
		</Column>
		<Column>
			<Heading>About Us</Heading>
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
			</p>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
