import { Container, Typography, TextField, Select, MenuItem, InputLabel, Button } from '@mui/material'
import React, { useState, useEffect } from 'react';


import './App.css';
import Team from '../../assets/team_meeting.jpg'

function App() {

  const [employees, setEmployees] = useState([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateBirth: '',
    dateStart: '',
    address: '',
    city: '',
    department: '',
    zipCode: '',
    state: '',
  })

  
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
    const newState = event.target.value
    setSelectedState(newState)
    setFormData({
      ...formData,
      state: newState,
    })
    localStorage.setItem('state', newState)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const existingEmployees = employees || [];

    const newEmployee = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateBirth: formData.dateBirth,
      dateStart: formData.dateStart,
      department: formData.department,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
    };

    const updatedEmployees = [...existingEmployees, newEmployee];
    setEmployees(updatedEmployees);

    setFormData({
      firstName: '',
      lastName: '',
      dateBirth: '',
      dateStart: '',
      address: '',
      city: '',
      department: '',
      zipCode: '',
      state: '',
    })

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  }

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('formData');
      if (storedData) {
        setFormData(JSON.parse(storedData));
      }

      const storedEmployees = localStorage.getItem('employees');
      if (storedEmployees) {
        setEmployees(JSON.parse(storedEmployees));
      }

      const storedSelectedState = localStorage.getItem('state');
      if (storedSelectedState) {
        setSelectedState(storedSelectedState);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données depuis le localStorage :', error);
    }
  }, []);


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
              <TextField variant='outlined' label='First Name' name='firstName' required fullWidth value={formData.firstName} onChange={handleInputChange} />

              <InputLabel className='inputLabel'>Last Name</InputLabel>
              <TextField variant='outlined' label='Last Name' name='lastName' required value={formData.lastName} onChange={handleInputChange} />

              <InputLabel className='inputLabel'>Date of Birth</InputLabel>
              <TextField type='date' name='dateBirth' required id='dateBirth' variant='outlined' value={formData.dateBirth} onChange={handleInputChange} />

              <InputLabel className='inputLabel'>Start Date</InputLabel>
              <TextField type='date' variant='outlined' required id='dateStart' name='dateStart' value={formData.dateStart} onChange={handleInputChange} />

              <InputLabel className='inputLabel'>address</InputLabel>
              <TextField variant='outlined' label='address' required name='address' id='address' value={formData.address} onChange={handleInputChange} />

              <InputLabel className='inputLabel'>City</InputLabel>
              <TextField variant='outlined' label='City' name='city' required id='city' value={formData.city} onChange={handleInputChange} />

              <div className='form__state--div'>
                <div>
                  <InputLabel className='inputLabel'>State</InputLabel>
                  <Select id='state' value={selectedState} name='state' required onChange={handleChange}>
                    {stateOptions}
                  </Select>
                </div>

                <div>
                  <InputLabel className='inputLabel'>Zip Code</InputLabel>
                  <TextField type='number' required variant='outlined' name='zipCode' id='zipCode' value={formData.zipCode} onChange={handleInputChange} />
                </div>
              </div>

              <InputLabel className='inputLabel'>Department</InputLabel>
              <TextField variant='outlined' label='Department' id='department' name='department' required value={formData.department} onChange={handleInputChange} />

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
