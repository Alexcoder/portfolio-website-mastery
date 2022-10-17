import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The reason I am into web-development is to offer solutions to everyday problem as required.
      </SectionText>
      <Button onClick={()=> windows.location = "https://google.com"}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;