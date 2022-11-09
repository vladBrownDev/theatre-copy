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
      <source src="/assets/dust_particles.mp4" />
    </DustParticles>
    <LightSource flipped={flipped} src="/assets/light_source.png" alt="" width="384" height="216" />
  </>
)
  


export default Spotlight