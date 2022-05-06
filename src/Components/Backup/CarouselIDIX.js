import React from "./node_modules/react";
import { UncontrolledCarousel } from "./node_modules/reactstrap";
import Nobel from '../../Images/nobel.png';
import ElectionsUs from '../../Images/electionsus.png';
import Galaxie from '../../Images/galaxie.png';
import DemandeursAsile from '../../Images/idix-ex1.jpeg';

const itemsIdix = [
  {
    src:`${DemandeursAsile}`,
   // altText: 'Slide 1',
    // caption: 'Slide 1',
    // header: 'Slide 1 Header',
    key: "1"
  },
  {
    src:`${Galaxie}`,
    key: "2"
  },
  {
    src:`${ElectionsUs}`,
    key: "3"
  },
  {
    src:`${Nobel}`,
    key: "4"
  }
];

const CarouselIDIX = () => <UncontrolledCarousel items={itemsIdix} />;

export default CarouselIDIX;
