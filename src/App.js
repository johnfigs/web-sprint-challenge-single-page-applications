import React from "react";

import axios from "axios";

import { Route, Link, Switch, Redirect } from 'react-router-dom'

import { useState, useEffect } from "react";

//importing components
import Home from './Home';
import PizzaForm from "./PizzaForm";

import schema from './formSchema'

import { reach } from 'yup'



//setting initial form values
const initialFormValues = {
  name: '',
  size: '',
  chicken: false,
  pepperoni: false,
  sausage: false,
  pineapple: false,
  mushrooms: false,
  special: '',
}

const initialFormErrors = {
  name: '',
}
const initialOrder = [];
const initialDisabled = true;

const App = () => {
  //set order state
  const [order, setOrder] = useState([initialOrder])

  //Holding all values from form
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors); //object
  const [disabled, setDisabled] = useState(initialDisabled); //boolean

  const postNewOrder = newOrder => {   
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
    const orderFromBackend = res.data
    setOrder([orderFromBackend, ...order])
    console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue)
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {

    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      chicken: formValues.chicken,
      pepperoni: formValues.pepperoni,
      pineapple: formValues.pineapple,
      mushrooms: formValues.mushrooms,
      specialText: formValues.specialText,
    }
    postNewOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className='App'>
      <nav>
      <h1>Lambda Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
      </div>
      </nav>
      {/*add switch*/}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          {/*form component*/}
          <PizzaForm 
          values={formValues}
          update={updateForm}
          submit={submitForm}
          disable={disabled}
          errors={formErrors}
          />
        </Route>

      </Switch>
    </div>
  );
};
export default App;