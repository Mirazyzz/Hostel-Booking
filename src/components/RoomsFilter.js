import { React, useContext } from 'react';

import { RoomContext } from '../Context';
import Title from '../components/Title';

export default function RoomsFilter() {
  const context = useContext(RoomContext);
  console.log(context);

  return <div></div>;
}
