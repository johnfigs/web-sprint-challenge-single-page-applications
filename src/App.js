import React from "react";

import { Route, Link, Switch, Redirect } from 'react-router-dom'

import { useState } from "react";

//importing components
import Home from './Home';
import PizzaForm from "./PizzaForm";

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

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email
    //  b) prevent further action if either username or email or role is empty string after trimming
    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
    //  d) also on success clear the form
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      chicken: formValues.chicken,
      pepperoni: formValues.pepperoni,
      pineapple: formValues.pineapple,
      mushrooms: formValues.mushrooms,
      specialText: formValues.specialText.trim()
    }
    if (!newOrder.name || !newOrder.size ) return

    // axios.post('https://reqres.in/api/orders', newOrder)
    //   .then(res => {
    //     const friendFromBackend = res.data
    //     setFriends([friendFromBackend, ...friends])
    //     setFormValues(initialFormValues)
    //   })

  }


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