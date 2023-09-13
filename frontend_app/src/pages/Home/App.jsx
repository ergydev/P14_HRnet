import { Container, Typography, TextField, Select, MenuItem, InputLabel, Button } from '@mui/material'
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux'




import './App.css';
import Team from '../../assets/team_meeting.jpg'
import { updateFormField } from '../../services/hooks/formulaireActions'

function App(props) {


  const {
    firstName,
    lastName,
    dateBirth,
    dateStart,
    adress,
    city,
    department,
    zipCode,
    selectedState,
    dispatch,
  } = props



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

    dispatch(updateFormField('firstName', ''))
    dispatch(updateFormField('lastName', ''))
    dispatch(updateFormField('selectedState', ''))
    dispatch(updateFormField('dateBirth', ''))
    dispatch(updateFormField('dateStart', ''))
    dispatch(updateFormField('city', ''))
    dispatch(updateFormField('zipCode', ''))
    dispatch(updateFormField('department', ''))
  }


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
    // setSelectedState(event.target.value)
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
              <InputLabel className='inputLabel'>First Name</InputLabel>
              <TextField variant='outlined' label='First Name' required fullWidth value={firstName} />

              <InputLabel className='inputLabel'>Last Name</InputLabel>
              <TextField variant='outlined' label='Last Name' required value={lastName} />

              <InputLabel className='inputLabel'>Date of Birth</InputLabel>
              <TextField type='date' name='date-birth' required id='date-birth' variant='outlined' value={dateBirth} />

              <InputLabel className='inputLabel'>Start Date</InputLabel>
              <TextField type='date' variant='outlined' required id='date-start' name='date-start' value={dateStart} />

              <InputLabel className='inputLabel'>Adress</InputLabel>
              <TextField variant='outlined' label='Adress' required name='adress' id='adress' value={adress} />

              <InputLabel className='inputLabel'>City</InputLabel>
              <TextField variant='outlined' label='City' required id='firstname' value={city} />

              <div className='form__state--div'>
                <div>
                  <InputLabel className='inputLabel'>State</InputLabel>
                  <Select id='state' value={selectedState} required onChange={handleChange}>
                    {stateOptions}
                  </Select>
                </div>

                <div>
                  <InputLabel className='inputLabel'>Zip Code</InputLabel>
                  <TextField type='number' required variant='outlined' id='zip-code' value={zipCode} />
                </div>
              </div>

              <InputLabel className='inputLabel'>Department</InputLabel>
              <TextField variant='outlined' label='Department' id='department' required value={department} />

              <Button type='submit' variant='contained' sx={{ mt: 1, mb: 2, bgcolor: '#000' }}>Save</Button>
            </form>
          </div>
          <img src={Team} alt="Team building" className='home__img' />
        </div>
      </Container>
    </div>
  );


}

const mapStateToProps = (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
  state: state.state,
  dateBirth: state.dateBirth,
  dateStart: state.dateStart,
  city: state.city,
  zipCode: state.zipCode,
  department: state.department,
})


export default connect(mapStateToProps)(App);
