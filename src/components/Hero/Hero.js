import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there <br/>
        I am a FullStack Web Developer
      </SectionTitle>
      <SectionText>
        The reason I am into web-development is to offer solutions to everyday problem as required.
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;