import { FormEventHandler, useState } from 'react'
import './App.css'
import DetailedView from './DetailedView'

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
}

function App() {
  const [formData, setFormData] = useState<string>()
  const [payload, setPayload] = useState<Payload>()
  
  const flattenPayload = (o) => {
    return {
      name: o.name,
      types: [o.types.at(0).type.name, o.types.at(1)?.type.name].filter(Boolean),
      abilities: [o.abilities[0].ability.name, o.abilities[1].ability.name],
      sprite: o.sprites.front_default,
      stats: {
        hp: o.stats[0].base_stat,
        attack: o.stats[1].base_stat,
        defense: o.stats[2].base_stat,
        specialAttack: o.stats[3].base_stat,
        specialDefense: o.stats[4].base_stat,
        speed: o.stats[5].base_stat,
      }
    }
  }

  const handleSearch: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${formData}`)
    const json = await res.json()
    const flatPayload = flattenPayload(json)
    setPayload(flatPayload);
  }

  return (
    <div>
      <div className="item item-1">
        <form onSubmit={handleSearch}>
          <input onChange={e => {setFormData(e.target.value)
            console.log('formData :>> ', formData);
          }}></input>
          <button type='submit'>search</button>
        </form>
      </div>
      {payload && <DetailedView className="item item-2" {...payload}/>}
    </div>
  )
}

export default App
