"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface Person {
  id: string;
  description: string;
  cords: string;
}

const FamilyIntro: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const zoomLevel = 0.73;
  const xOffset = 3;
  const yOffset = 0;

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
  };

  const scaleCoordinates = (coords: string, scale: number, xOffset: number, yOffset: number): string => {
    return coords
      .split(',')
      .map((coord, index) => {
        const value = parseInt(coord);
        if (index % 2 === 0) {
          return Math.round(value * scale) + xOffset;
        } else {
          return Math.round(value * scale) + yOffset;
        }
      })
      .join(',');
  };

  const personData: Person[] = [
    { id: 'person1', description: 'Description of Person 1', cords: "0,537,44,517,85,455,156,403,227,365,334,366,399,385,463,443,475,486,508,497,539,541,559,580,573,629,581,686,564,746,526,791,501,842,477,907,439,965,359,1005,287,1012,263,980,192,1001,152,1021,198,1032,252,1043,287,1072,327,1099,377,1116,405,1119,308,1188,229,1260,100,1383,0,1365" },
    { id: 'person2', description: 'Description of Person 2', cords: "2,1371,103,1386,151,1344,187,1308,223,1266,341,1165,414,1110,481,1061,543,1081,684,1030,726,1034,775,1001,856,936,871,936,875,831,838,769,820,704,813,648,762,528,737,432,737,398,746,319,766,270,838,223,907,190,982,164,1025,164,1080,154,1129,174,1170,186,1210,219,1254,248,1296,279,1335,317,1354,348,1352,397,1335,447,1323,495,1310,538,1299,583,1288,619,1286,642,1274,669,1261,698,1236,755,1212,809,1208,860,1212,921,1234,951,1256,996,1292,1030,1355,1054,1408,1073,1441,1100,1481,1122,1501,1132,1539,1103,1575,1109,1586,1151,1606,1187,1628,1221,1658,1258,1702,1288,1736,1316,1773,1348,1818,1391,1854,1411,1894,1449,1916,1485,1940,1510,1978,1525,2018,1536,2,1538" },
    { id: 'person3', description: 'Description of Person 3', cords: "2049,365,2032,388,1981,390,1945,394,1894,383,1853,388,1800,379,1746,379,1704,390,1675,415,1637,439,1602,470,1573,501,1535,539,1506,577,1481,617,1475,655,1488,700,1499,744,1511,787,1519,829,1524,865,1524,887,1519,914,1535,956,1557,978,1562,1019,1564,1062,1582,1108,1591,1158,1628,1217,1655,1253,1700,1284,1746,1322,1791,1358,1836,1400,1876,1425,1907,1456,1942,1496,1985,1519,2050,1538" },
  ];

  return (
    <div>
      <Image src="/family_photo.jpg" alt="Family Photo" useMap="#family-map" width="2054" height="1540" />
      <map name="family-map">
        {personData.map((person) => (
          <area
            key={person.id}
            shape="poly"
            coords={scaleCoordinates(person.cords, zoomLevel, xOffset, yOffset)}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePersonClick(person);
            }}
          />
        ))}
      </map>
      {selectedPerson && (
        <div>
          <h3>Description of {selectedPerson.id}</h3>
          <p>{selectedPerson.description}</p>
        </div>
      )}
    </div>
  );
};

export default FamilyIntro;