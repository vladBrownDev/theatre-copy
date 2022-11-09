import CornerSVG from "public/assets/Corner.svg"
import {
  Corner,
  TCorner
} from "./styled"

type Props = {
  division: TCorner["division"]
  position: TCorner["position"]
}

const CurtainCorner = ({ division, position }: Props) => {
  return (
    <Corner
      alt=""
      division={division}
      height={139}
      position={position}
      src={CornerSVG}
      width={187}
    />
  )
}

export default CurtainCorner