interface Stats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

type Payload = {
  name: string;
  types: string[];
  stats: Stats;
  abilities: string[];
  sprite: string;
  className?: string;
}

const DetailedView = ({name, types, stats, abilities, sprite, className}:Payload) => {
  console.log(types);
  return (
    <div className={className}>
      <h1>{name}</h1>
      <img src={sprite}></img>
      <p>types: {types.join(` / `)}</p>
      <p>abilities: {abilities[0]}, {abilities[1]}</p>
      <p>hp: {stats.hp}</p>
      <p>atk: {stats.attack}</p>
      <p>def: {stats.defense}</p>
      <p>SpAtk: {stats.specialAttack}</p>
      <p>SpDef: {stats.specialDefense}</p>
      <p>Spe: {stats.speed}</p>
    </div>
  )
}

export default DetailedView