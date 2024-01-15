// Import with a different name
import Meta from 'components/meta'
import HeroComponent from 'components/hero'
import Container from 'components/container'

// Use a different name for the constant
const CustomHero = () => {
  return (
    <Container>
      <Meta />
      <HeroComponent
        title='CUBE'
        subtitle='アウトプットしていくサイト'
        imageOn
      />
    </Container>
  )
}

export default CustomHero
