import React, { Component } from 'react';

//import items from './data';
import Client from './Contentful';

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
      price: 0,
      minPrice: 500,
      maxPrice: 600,
      minSize: 0,
      maxSize: 1000,
      breakfast: false,
      pets: false,
      selectedDate: undefined,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'hostelRoom',
        order: 'fields.price',
      });

      const rooms = this.formatData(response.items);
      const featuredRooms = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((el) => el.price));

      this.setState({
        rooms: rooms,
        sortedRooms: rooms,
        featuredRooms: featuredRooms,
        loading: false,
        price: maxPrice,
        maxPrice,
      });
    } catch (err) {
      console.log(err);
    }
  };

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

  handleDayClick = (day) => {
    this.setState({ selectedDate: day }, this.filterRooms);
  };

  filterRooms = () => {
    let { rooms, type, capacity, price, selectedDate } = this.state;
    // all the rooms
    let tempRooms = [...rooms];
    //console.log(tempRooms);
    // transform values
    capacity = Number(capacity);
    // price
    price = Number(price);
    // filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    //console.log(tempRooms);
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    //console.log(tempRooms);
    /*
    tempRooms.forEach((el) =>
      console.log(`rooms price: ${el.price} - ${price}`)
    );
    */

    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    //console.log(tempRooms);

    // filter by Date

    //tempRooms = tempRooms.filter((room) => room.avialableFrom <= selectedDate);

    /*
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    */
    //console.log(tempRooms);
    // filter by breakfast
    /*
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    //console.log(tempRooms);
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    //console.log(tempRooms);
    */

    // update state
    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    const date = this.state.selectedDate;
    console.log(date);
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
          handleDayClick: this.handleDayClick,
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
