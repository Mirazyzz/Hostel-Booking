import { React, useContext } from 'react';

import { RoomContext } from '../Context';
import Title from '../components/Title';

// get unique values of rooms data
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const formatForSelectBox = (types) => {
  return types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  console.log(`filter: ${breakfast} ${pets}`);

  let types = getUnique(rooms, 'type');
  // add 'all' type
  types = ['all', ...types];

  // get data in JSX format
  types = formatForSelectBox(types);

  let guests = getUnique(rooms, 'capacity');

  // get data in JSX format
  guests = formatForSelectBox(guests);

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type */}
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>

          {/*end select type */}

          {/*guests */}
          <div className="form-group">
            <label htmlFor="capacitly">guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {guests}
            </select>
          </div>
          {/*end guests */}

          {/*room price */}
          <div className="form-group">
            <label htmlFor="price">room price {price} pln</label>
            <input
              className="form-control"
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
            />
          </div>

          {/*end price */}

          {/* size */}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          {/*end of size */}

          {/* extras */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
          {/* end of extras */}
        </form>
      </form>
    </section>
  );
}
