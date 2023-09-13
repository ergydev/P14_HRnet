import { Container, Typography, TextField, Select, MenuItem, InputLabel, Button } from '@mui/material'
import React, { useState } from 'react';


import './App.css';
import Team from '../../assets/team_meeting.jpg'

function App() {

  const [employees, setEmployees] = useState([])
  const [firstName, setFirstName] = useState('Oscar');
  const [lastName, setLastName] = useState('Delavega');
  const [dateBirth, setDateBirth] = useState('20/10/1983');
  const [dateStart, setDateStart] = useState('22/01/2000');
  const [adress, setAdress] = useState('35 street Road');
  const [city, setCity] = useState('Atlanta');
  const [department, setDepartment] = useState('Sales');
  const [zipCode, setZipCode] = useState('35000');

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
  }
  const handleLastName = (event) => {
    setLastName(event.target.value)
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
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      state: selectedState,
      dateBirth,
      dateStart,
      city,
      zipCode,
      department,
    }

    console.log(newEmployee)
    setEmployees([...employees, newEmployee])
    
    setFirstName('')
    setLastName('')
    setSelectedState('')
    setDateBirth('')
    setDateStart('')
    setAdress('')
    setCity('')
    setZipCode('')
    setDepartment('')
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
              <TextField variant='outlined' label='First Name' required fullWidth value={firstName} onChange={handleFirstName} />

              <InputLabel className='inputLabel'>Last Name</InputLabel>
              <TextField variant='outlined' label='Last Name' required value={lastName} onChange={handleLastName} />

              <InputLabel className='inputLabel'>Date of Birth</InputLabel>
              <TextField type='date' name='date-birth' required id='date-birth' variant='outlined' value={dateBirth} onChange={handleDateBirth} />

              <InputLabel className='inputLabel'>Start Date</InputLabel>
              <TextField type='date' variant='outlined' required id='date-start' name='date-start' value={dateStart} onChange={handleDateStart} />

              <InputLabel className='inputLabel'>Adress</InputLabel>
              <TextField variant='outlined' label='Adress' required name='adress' id='adress' value={adress} onChange={handleAdress} />

              <InputLabel className='inputLabel'>City</InputLabel>
              <TextField variant='outlined' label='City' required id='firstname' value={city} onChange={handleCity} />

              <div className='form__state--div'>
                <div>
                  <InputLabel className='inputLabel'>State</InputLabel>
                  <Select id='state' value={selectedState} required onChange={handleChange}>
                    {stateOptions}
                  </Select>
                </div>

                <div>
                  <InputLabel className='inputLabel'>Zip Code</InputLabel>
                  <TextField type='number' required variant='outlined' id='zip-code' value={zipCode} onChange={handleZipCode} />
                </div>
              </div>

              <InputLabel className='inputLabel'>Department</InputLabel>
              <TextField variant='outlined' label='Department' id='department' required value={department} onChange={handleDepartment} />

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
