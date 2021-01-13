import React from 'react';

import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomList';

export default function RoomsContainer() {
  return (
    <div>
      Hello from rooms Rooms Container
      <RoomsFilter />
      <RoomsList />
    </div>
  );
}
