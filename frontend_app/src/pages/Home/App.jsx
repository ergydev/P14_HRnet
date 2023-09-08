import { Container, Typography, FormControl, TextField, Select, MenuItem, InputLabel, Button } from '@mui/material'
import React, { useState } from 'react';


import './App.css';
import Team from '../../assets/team_meeting.jpg'

function App() {

  const EmployeeForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [state, setState] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [datestart, setDateStart] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [department, setDepartment] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleFirstName = (event) => {
      setFirstName(event.target.value)
    }
    const handleLastName = (event) => {
      setLastName(event.target.value)
    }
    const handleState = (event) => {
      setState(event.target.value)
    }
    const handleDateBirth = (event) => {
      setDateBirth(event.target.value)
    }
    const handleZipCode = (event) => {
      const value = event.target.value.replace(/\D/g, '')
      setZipCode(value)
    }
    const handleDateStart = (event) => {
      setDateStart(event.target.value)
    }
    const handleAdress = (event) => {
      setAdress(event.target.value)
    }
    const handleCity = (event) => {
      setCity(event.target.value)
    }
    const handleDepartment = (event) => {
      setDepartment(event.target.value)
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const [selectedState, setSelectedState] = useState('');
  const usStates = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  const stateOptions = usStates.map((state, index) => (
    <MenuItem key={index} value={state}>
      {state}
    </MenuItem>
  ))

  const handleChange = (event) => {
    setSelectedState(event.target.value)
  }

  return (
    <div className="App">
      <Container>
        <div>
          <Typography
            sx={{
              mt: 5,
              fontWeight: "bold",
              textAlign: "left",
              maxWidth: "560px"
            }}
            variant='h3'
            color="#000"
            className='home__title'
          >
            LET’S BUILD OUR TEAMS TOGETHER
          </Typography>
        </div>
        <div className='home__wrapper'>
          <div className='home__wrapper--form'>
            <Typography className='form__title' variant='h5' sx={{ mt: 5, fontWeight: "bold", }} >Create Employee</Typography>

            <form onSubmit={handleSubmit} id='form'>
              <InputLabel  className='inputLabel'>First Name</InputLabel>
              <TextField variant='outlined' label='First Name' required fullWidth />

              <InputLabel className='inputLabel'>Last Name</InputLabel>
              <TextField variant='outlined' label='Last Name' required />

              <InputLabel className='inputLabel'>Date of Birth</InputLabel>
              <TextField type='date' name='date-birth' required id='date-birth' variant='outlined' />

              <InputLabel className='inputLabel'>Start Date</InputLabel>
              <TextField type='date' variant='outlined' required id='date-start' name='date-start' />

              <InputLabel className='inputLabel'>Adress</InputLabel>
              <TextField variant='outlined' label='Adress' required name='adress' id='adress' />

              <InputLabel className='inputLabel'>City</InputLabel>
              <TextField variant='outlined' label='City' required id='firstname' />

              <div className='form__state--div'>
                <div>
                  <InputLabel className='inputLabel'>State</InputLabel>
                  <Select id='state' value={selectedState} required onChange={handleChange}>
                    {stateOptions}
                  </Select>
                </div>

                <div>
                  <InputLabel className='inputLabel'>Zip Code</InputLabel>
                  <TextField type='number' required variant='outlined' id='zip-code' />
                </div>
              </div>

              <InputLabel className='inputLabel'>Department</InputLabel>
              <TextField variant='outlined' label='Department' id='department' required />

              <Button type='submit' variant='contained' sx={{ mt: 1, mb: 2, bgcolor: '#000' }}>Save</Button>
            </form>
          </div>
          <img src={Team} alt="Team building" className='home__img' />
        </div>
      </Container>
    </div>
  );
}

export default App;
