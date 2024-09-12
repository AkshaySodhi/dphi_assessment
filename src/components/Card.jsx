/* eslint-disable react/prop-types */
import "./style/Cards.css";

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={props.icon} alt="" className="w-11" />
      <h2 className='card-hTwo'>{props.title}</h2>
      <p className='card-para'>{props.description}</p>
    </div>
  )
}

export default Card