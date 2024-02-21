import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Intelegent chat with teamates and AI agents"
    description="
  simple but powerful"
  >
    <VerticalFeatureRow
      title="Natural"
      description="Chat naturally and effortlessly with multiple users."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Intuitive"
      description="Enjoy an intuitive user interface for seamless interactions."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Fast"
      description="Experience lightning-fast response times for real-time communication."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
