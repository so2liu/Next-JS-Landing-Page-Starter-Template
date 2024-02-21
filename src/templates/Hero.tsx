import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <span></span>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'An AI native communication tool for\n'}
            <span className="text-primary-500">
              high performance supporters
            </span>
          </>
        }
        description="The easiest way to build a custom AI native pipelines, with teamates."
        button={<Button xl>Comming soon</Button>}
      />
    </Section>
  </Background>
);

export { Hero };
