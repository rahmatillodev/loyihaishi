import { GoPulse } from "react-icons/go";
import Keresz from './Keresz'

const Services = ({keresz}) => {
  return (
    <section className="Service">
      <div className="service">
        <h1>
          Services
        </h1>
        <p>
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
        </p>
        <button>
          Available for Hire
        </button>
      </div>
      <Keresz keresz="Service"/>
      <div className="containerCards">
        <div className="ContainerCard">
          <GoPulse />
          <h3>Lorem Ipsum</h3>
          <p>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
          </p>
        </div>
        <div className="ContainerCard">
          <GoPulse />
          <h3>Lorem Ipsum</h3>
          <p>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
          </p>
        </div>
        <div className="ContainerCard">
          <GoPulse />
          <h3>Lorem Ipsum</h3>
          <p>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
          </p>
        </div>
        <div className="ContainerCard">
          <GoPulse />
          <h3>Lorem Ipsum</h3>
          <p>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services