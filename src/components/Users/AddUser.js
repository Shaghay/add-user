import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <React.Fragment>
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username' >Username</label>
          <input id='username' type='text'value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor='age' value={enteredAge} onChange={ageChangeHandler} >Age (Years)</label>
          <input id='age' type='number'/>
          <Button type='submit'>Add User</Button>
        </form> 
      </Card>
    </React.Fragment>
  )
}

export default AddUser