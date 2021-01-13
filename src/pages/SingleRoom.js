import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import defualtBcg from '../images/room-1.jpeg';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
  static contextType = RoomContext;

  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defualtBcg,
    };
  }

  //componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found :(</h3>
          <Link to="/rooms" className="btn-primary">
            Back home
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    return (
      <StyledHero img={images[0]}>
        <Banner title={name}>
          <Link to="/rooms" className="btn-primary">
            Back to home
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}
