import React, { Component } from 'react';

import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      type: 'all',
      capacity: '1',
      price: 100,
      minPrice: 100,
      maxPrice: 600,
      minSize: 0,
      maxSize: 1000,
      breakfast: false,
      pets: false,
    };
  }

  componentDidMount() {
    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured === true);

    this.setState({
      rooms: rooms,
      sortedRooms: rooms,
      featuredRooms: featuredRooms,
      loading: false,
    });
  }

  formatData(items) {
    let formattedItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };

      return room;
    });

    return formattedItems;
  }

  getRoom = (slug) => {
    let tempRooms = Array.from(this.state.rooms);
    const room = tempRooms.find((el) => el.slug === slug);

    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;

    this.setState({ [name]: value }, this.filterRooms);
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    // all the rooms
    let tempRooms = [...rooms];

    // transform values
    capacity = Number(capacity);

    // price
    price = Number(price);

    // filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    // update state
    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function WithRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
