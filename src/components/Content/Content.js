import './Content.css';
import Card from '../Card/Card';

function Content() {

  return (
    <section className='content'>
      <div className='content__list'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <button className='content__button'>LOAD MORE</button>
    </section>
  )
}

export default Content;
