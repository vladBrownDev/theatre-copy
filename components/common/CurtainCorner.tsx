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
      src="/assets/Corner.svg"
      width={187}
    />
  )
}

export default CurtainCorner