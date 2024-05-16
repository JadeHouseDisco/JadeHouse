"use client"

import React from 'react';
import ImageMapper from 'react-img-mapper';

interface FamilyIntroProps {
  familyIntroProps: {
    test: string;
  }
}

const FamilyIntro: React.FC<FamilyIntroProps> = ({ familyIntroProps }) => {
  const URL = "/family_photo.jpg"
  const MAP = {
    name: 'my-map',
    areas: [
      {
        id: "id1",
        title: "mom",
        shape: "poly",
        name: "mom",
        fillColor: "white",
        strokeColor: "black",
        coords: [2, 539, 42, 515, 80, 457, 149, 406, 229, 361, 303, 366, 396, 385, 457, 446, 472, 492, 519, 510, 552, 562, 579, 637, 573, 727, 539, 785, 501, 851, 472, 918, 435, 992, 428, 1096, 370, 1145, 301, 1194, 227, 1266, 160, 1330, 109, 1382, 2, 1362],
        polygon: [
          [2, 539],
          [42, 515],
          [80, 457],
          [149, 406],
          [229, 361],
          [303, 366],
          [396, 385],
          [457, 446],
          [472, 492],
          [519, 510],
          [552, 562],
          [579, 637],
          [573, 727],
          [539, 785],
          [501, 851],
          [472, 918],
          [435, 992],
          [428, 1096],
          [370, 1145],
          [301, 1194],
          [227, 1266],
          [160, 1330],
          [109, 1382],
          [2, 1362]
        ]
      }
    ]
  };

  return (
    <ImageMapper src={URL} map={MAP} />
  )
};

export default FamilyIntro;