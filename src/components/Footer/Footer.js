import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
         <LinkTitle>Call</LinkTitle>
         <LinkItem href="tel: +234 703751 3234">+234 703 751 3234</LinkItem>
        </LinkColumn>
        <LinkColumn>
         <LinkTitle>Email</LinkTitle>
         <LinkItem href="mailto:agboalez@gmail.com">agboalez@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
         <Slogan>Innovating one project at a time</Slogan>
          </CompanyContainer>
         <SocialContainer>
         <SocialIcons href="https://github.com/Alexcoder?tab=repositories">
          <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedIn.com">
          <AiFillLinkedin size="3rem" />
          </SocialIcons>
         <SocialIcons href="https://twitter.com">
          <AiFillTwitterCircle size="3rem" />
         </SocialIcons>
          </SocialContainer> 
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
