import {
  DustParticles,
  LightSource
} from "./styled"

type Props = {
  flipped?: boolean
}

const Spotlight = ({ flipped = false }: Props) => (
  <>
    <DustParticles flipped={flipped} autoPlay loop muted>
      <source src="/assets/Comp 4.mp4" />
    </DustParticles>
    <LightSource flipped={flipped} src="/assets/Comp 3 2022-10-30 06.54.13 PM.png" alt="" width="384" height="216" />
  </>
)
  


export default Spotlight