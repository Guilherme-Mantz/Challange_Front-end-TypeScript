import { CreditData, Actor } from '../../types/Types';

interface Props {
  persons: CreditData
}

function CardActor({persons}: Props) {
  return (
    <>
    {persons.cast.map((person: Actor) => {
        return (
          <div className="card-actor shadow" key={person.id}>
            <img src={'https://image.tmdb.org/t/p/w500' + person.profile_path} id="actor-image" className="rounded image-fluid" alt={person.name} width="175" height="222" />
            <div id="personageActor">
              <p>{person.name}</p>
              <p className="text-left" style={{ fontWeight: 300 }}>{person.character}</p>
            </div>
          </div>
        )
    })
    }
    </>
  )
}

export default CardActor;