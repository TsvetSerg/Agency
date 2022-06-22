import './Card.css';
import SOFA from '../../images/SOFA.png';

function Card() {
  return (
    <div className='card'>
      <div className='card__overlay'>
        <img className='card__img' src={SOFA} alt="" />
      </div>
      <h2 className='card__title'>SOFA</h2>
      <button className='card__category'>Design</button>
    </div>
  )
}

export default Card;
