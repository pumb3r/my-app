import React from 'react';

import TableOfUsers from './component/TableOfUsers';

const USERS = [
  {
    id: 1,
    firstName: 'David',
    lastName: 'Dubliakov',
    age: '19'
  },
  {
    id: 2,
    firstName: 'Dubliakov',
    lastName: 'David',
    age: '21'
  },
  {
    id: 3,
    firstName: 'Bohdan',
    lastName: 'Semenov',
    age: '19'
  },
  {
    id: 4,
    firstName: 'Semenov',
    lastName: 'Bohdan',
    age: '30'
  },
  {
    id: 5,
    firstName: 'Misha',
    lastName: 'Kvochko',
    age: '20'
  },
  {
    id: 6,
    firstName: 'Kvochko',
    lastName: 'Misha',
    age: '11'
  },
];

const Lesson2 = () => {

  const showMessage = (userId) => {
    alert(userId);
  };

  return (
    <div>
      <TableOfUsers users={USERS} showMessage={showMessage} />
    </div>
  );
};

export default Lesson2;
