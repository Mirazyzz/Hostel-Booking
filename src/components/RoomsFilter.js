import { React, useContext } from 'react';
import 'react-day-picker/lib/style.css';

import { RoomContext } from '../Context';
import Title from './Title';
import DateTimePicker from './DatePicker';
import Slider from './SelectRange';
import NativeSelects from './Select';

// get unique values of rooms data
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

/*
const formatForSelectBox = (types) => {
  types.sort();
  return types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
};
*/

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const prices = [...new Set(rooms.map((room) => room.price))];

  const {
    handleChange,
    handleDayClick,
    handlePriceChange,
    selectedDate,
  } = context;

  let types = getUnique(rooms, 'type');
  // add 'all' type
  types = ['all', ...types].sort((a, b) => a.length - b.length);

  // get data in JSX format
  //types = formatForSelectBox(types);

  let guests = getUnique(rooms, 'capacity').sort();

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/*select type */}
        <form className="filter-form">
          <div className="form-group">
            <NativeSelects
              items={types}
              selectName="type"
              title="room types"
              handleChange={handleChange}
            />
          </div>
          {/*end select type */}

          {/*guests */}
          <div className="form-group">
            <NativeSelects
              items={guests}
              selectName="capacity"
              title="room capacity"
              handleChange={handleChange}
            />
          </div>
          {/*end guests */}
          {/* <Select items={types} /> */}

          {/*room price */}
          <div className="form-group">
            <Slider
              className="form-control"
              marks={prices}
              title="Choose price"
              handleChange={handlePriceChange}
            />
          </div>

          {/*end price */}

          {/* size
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
          </div> */}
          {/*end of size */}
          <div className="form-group">
            <DateTimePicker
              className="form-control"
              selectedDate={selectedDate}
              handleDateChange={handleDayClick}
            />
          </div>
          {/* extras 
          
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
          */}
          {/* end of extras */}
        </form>
      </form>
    </section>
  );
}
