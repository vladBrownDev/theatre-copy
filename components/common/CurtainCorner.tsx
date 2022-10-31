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
      src="/Corner.svg"
      style={{ position: "absolute" }}
      width={187}
    />
  )
}

export default CurtainCorner