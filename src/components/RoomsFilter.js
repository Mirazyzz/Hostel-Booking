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

  let pricesFor = ['1 day', '1 week', '1 month', '6 months'];

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
              items={pricesFor}
              selectName="capacity"
              title="Price for"
              handleChange={handleChange}
            />
          </div>
          {/*end guests */}

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

          <div className="form-group">
            <DateTimePicker
              className="form-control"
              selectedDate={selectedDate}
              handleDateChange={handleDayClick}
            />
          </div>
        </form>
      </form>
    </section>
  );
}
