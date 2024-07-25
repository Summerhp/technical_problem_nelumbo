import React from 'react';

interface Brand {
  id: number;
  name: string;
}

interface FiltersProps {
  brands: Brand[];
}

const Filters: React.FC<FiltersProps> = ({brands}) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className="col text-start ms-3 me-3">
        <div className="mb-3">
          <h5>Marcas</h5>
          {brands.map((brand, index) => (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value={brand} id={index} />
              <label className="form-check-label">
                {brand}
              </label>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <h5>Precio</h5>
          <div className="row">
            <div className="col">
              <label htmlFor="minPrice" className="form-label">Mínimo</label>
              <input type="number" className="form-control" id="minPrice" placeholder="100" min="100" max="5000" />
            </div>
            <div className="col">
              <label htmlFor="maxPrice" className="form-label">Máximo</label>
              <input type="number" className="form-control" id="maxPrice" placeholder="5000" min="100" max="5000" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <h5>Reviews</h5>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="5" />
            <label className="form-check-label">5 estrellas</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="4" />
            <label className="form-check-label">4-4.9 estrellas</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="3" />
            <label className="form-check-label">3.3.9 estrellas</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="2" />
            <label className="form-check-label">2-2.9 estrellas</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="1" />
            <label className="form-check-label">1-1.9 estrellas</label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Filters;
