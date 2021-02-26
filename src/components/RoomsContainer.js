import React from 'react';

import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { WithRoomConsumer } from '../Context';
import Loading from './Loading';

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default WithRoomConsumer(RoomsContainer);
