import React from "react"
import Card from "../Card/Card"

const CardsList = () => {
  const cardsList = [
    {
      id: 1,
      image: "https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
      tittle: "3-D Man",
      description:
        "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!",
    },
    {
      id: 2,
      image: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
      tittle: "A-Bomb (HAS)",
      description:
        "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!",
    },
    {
      id: 3,
      image: "https://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg",
      tittle: "A.I.M.",
      description:
        "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!",
    },
    {
      id: 4,
      image: "https://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg",
      tittle: "Abomination (Emil Blonsky)",
      description:
        "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!",
    },
  ]
  const renderCards = cardsList.map((card) => {
    return (
      <Card
        key={card.id}
        image={card.image}
        tittle={card.tittle}
        description={card.description}
      />
    )
  })

  return (
    <div className="bg-stone-900 md:grid md:grid-cols-5 flex flex-col lg:grid-cols-4 ">
      {renderCards}
    </div>
  )
}

export default CardsList
