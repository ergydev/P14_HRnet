import { Container, Typography, TextField, Select, MenuItem, InputLabel, Button } from '@mui/material'
import React, { useState, useEffect } from 'react';


import './App.css';
import Team from '../../assets/team_meeting.jpg'

function App() {

  const [employees, setEmployees] = useState([])
  const [formData, setFormData] = useState({
    firstName: 'Oscar',
    lastName: 'Delavega',
    dateBirth: '',
    dateStart: '',
    adress: '35 street Roa',
    city: 'Atlanta',
    department: 'Sales',
    zipCode: '35000',
  })

  const updateLocalStorage = () => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }

  useEffect(() => {
    const storedData = localStorage.getItem('formData')
    if (storedData) {
      setFormData(JSON.parse(storedData))
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {...formData}
    setEmployees([...employees, newEmployee])

    console.log(newEmployee)

    setFormData({
      firstName: '',
      lastName: '',
      dateBirth: '',
      dateStart: '',
      adress: '',
      city: '',
      department: '',
      zipCode: '',
    })

    updateLocalStorage()
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

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  useEffect(() => {
    updateLocalStorage()
  }, [formData]);

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

              <InputLabel className='inputLabel'>Adress</InputLabel>
              <TextField variant='outlined' label='Adress' required name='adress' id='adress' value={formData.adress} onChange={handleInputChange} />

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
