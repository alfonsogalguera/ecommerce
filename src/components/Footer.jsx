import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div `
display: flex;
${mobile({ flexDirection: "column" })}
`
const Left= styled.div`
flex:1;
displat flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display:flex;

`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items:center;
justify-content: center;
margin-right: 20px;

`
const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display: "none" })}
`
const Title = styled.h1`
margin-botton: 30px;

`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display:flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right = styled.div`
flex:1;
padding: 20px;
${mobile({ backgroundColor: "#fff8f8" })}
`   
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
      <Container>
       <Left>
           <Logo>MAEL</Logo>
           <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum obcaecati quia minus magni eius perspiciatis repellendus illum nisi accusantium ad rerum minima quaerat, sed fugiat dicta eum ut ex eaque!</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999"> <Facebook/> </SocialIcon>
                <SocialIcon color="E4405F"> <Instagram/> </SocialIcon>
                <SocialIcon color="55ACEE"> <Twitter/> </SocialIcon>
                <SocialIcon color="E60023"> <LinkedIn/> </SocialIcon>
            </SocialContainer>
       </Left>
       <Center>
        <Title>Useful links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>

       </Center>
       <Right>
        <Title>Contacto</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>Puebla, Puebla, México. 56897</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>+52 222 564 12 36</ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}}/>mael@contacto.com</ContactItem>
        
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>   
        </Right>     
      </Container>
  )
}

export default Footer
