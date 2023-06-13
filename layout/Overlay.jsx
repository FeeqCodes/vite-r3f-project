import { Container, TopLeft, BottomLeft, BottomRight, Hamburger} from './styles'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          MONEY SPREE
          <br />
          FRENZY —
        </h1>
        <p>`Embrace the Money Spree Obsession: Unleash Your Wealth Potential!` —</p>
      </TopLeft>
      <BottomLeft>
        Pay a visit to my Portfolio <a href="https://mohhportfolio.netlify.app">feeq.codes</a>
      </BottomLeft>
      <BottomRight>
        Get Addicted to Abundance:
        <br />
         Dive into the Money Spree Craze!
        <br />
        Hooked on Success.
        <br />
        Revolutionize Your Finances
        <br />
        Get Ready for a Cash Blitz
        <br />
        Unleash Your Money Magnet
        <br />
       Surrender to the Allure of the Money Spree!
        <br />
         Experience Endless Financial Thrills!
        <br />
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      {/* <VelvetBanana /> */}
    </Container>
  )
}
