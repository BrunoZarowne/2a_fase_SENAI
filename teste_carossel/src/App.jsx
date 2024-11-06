import Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
  
export default function App() {
  
  function DynamicCarousel() {
    // Estado para armazenar os itens do carousel
    const [carouselItems, setCarouselItems] = useState([
      {
        src: 'https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png',
        alt: 'Image One',
        link: 'https://github.com/BrunoZarowne/2a_fase_SENAI'
      },
      {
        src: 'https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png',
        alt: 'Image Two'
      }
    ]);
  
    // Função para adicionar um novo item ao carousel
    const addNewItem = () => {
      const newItem = {
        src: '',
        alt: Image [carouselItems.length + 1],
        link: ''
      };
      setCarouselItems([...carouselItems, newItem]);
    };

  return (
    <div>
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            {item.link ? (
              <a href={item.link}>
                <img src={item.src} alt={item.alt} />
              </a>
            ) : (
              <img src={item.src} alt={item.alt} />
            )}
          </Carousel.Item>
        ))}
      </Carousel>
      <button onClick={addNewItem}>Adicionar Novo Item</button>
    </div>
  );
  }
}


// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement

// site para ter uma base pro createElement no carousel

{/* <div id='div1' className='carousel'>
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel>
        <Carousel.Item>
          <a href="https://github.com/BrunoZarowne/2a_fase_SENAI">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/BrunoZarowne/2a_fase_SENAI">
          <img
            src=""
            alt="Image Tree"
          />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/BrunoZarowne/2a_fase_SENAI">
          <img
            src=""
            alt="Image Four"
          />
          </a>
        </Carousel.Item>
      </Carousel>
      <div id='root'>

      </div>
    </div> */}