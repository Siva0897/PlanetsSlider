// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  console.log(planetDetails)
  return (
    <div className="planet-details-container" data-testid="planets">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-text">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
