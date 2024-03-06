import React from 'react'

function Card({character}) {
  console.log(character)
  // const {name} = character.location
  const nameloc = character?.location?.name || 'Sin ubicación';

  return (
    <>
      <div>aca va la tarjeta</div>
      <img src={character.image} alt="" />
      <p>Name: {character.name}</p>
      <p>ID: {character.id}</p>
      <p>Status: {character.status}</p>
      <p>Type: {character.type}</p>
      <p>Species: {character.species}</p>
      <p>Location: {nameloc}</p>
      {/* <p>Location: {name}</p> */}
      <div>aca va la tarjeta</div>
    </>

  )
}

export default Card