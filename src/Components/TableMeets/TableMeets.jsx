import React, { useState } from 'react';
import styled from 'styled-components';

let Table = styled.div({
  width: 1520,
  border: '1px solid black'
});

let List = styled.div({
  display: 'flex',
  // justifyContent: 'center'
});

let Date = styled.span({
  marginRight: 100
});
let Time = styled.span({
  marginRight: 100
});
let Name = styled.span({
    marginRight: 100
  });

const TableMeets = ({ events }) => {
  const [isOpenMap, setIsOpenMap] = useState({});

  const toggleDropdown = (eventId) => {
    setIsOpenMap((prevIsOpenMap) => ({
      ...prevIsOpenMap,
      [eventId]: !prevIsOpenMap[eventId]
    }));
  };

  return (
    <Table>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <div>
              <Date>{event.date}</Date>
              <Time>{event.time}</Time>
              <Name>{event.title}</Name>
              <span>
                <button onClick={() => toggleDropdown(event.id)}>Показать список мероприятий</button>
              </span>
              {isOpenMap[event.id] && (
                <div>
                  <span>{event.speaker}</span>
                  <img src={event.avatar} alt={event.speaker} />
                  <p>{event.description}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Table>
  );
};

export default TableMeets;