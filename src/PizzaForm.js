import React from 'react'

export default function PizzaForm(props) {

    const { 
        values,
        update,
        submit,
        disabled,
        errors,
     } = props;

     const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        // let valueToUse
        // if (type === 'checkbox') {
        //   valueToUse2 = checked
        // } else {
        //   valueToUse2 = value
        // }
        update(name, valueToUse)
  }
  
    const onSubmit = evt => {
      evt.preventDefault()
      submit()
    }

    return (
    <form id='pizza-form' className='container form' onSubmit={onSubmit}>
            <div className='container form form-group submit'>
                <h2>Build your 'Za</h2>

                
                {/* render validation errors*/}

                <div id='errors' className='errors'>
                 
                    <div id="errorInName">{errors.name}</div>
                    {/* 🔥 RENDER THE VALIDATION ERRORS HERE
                    <div id="errorInEmail">{errors.email}</div>
                    <div id="errorInPassword">{errors.password}</div>*/}
                 </div>
            </div>

            {/* create form inputs*/}
            <div className='inputs'>
                <h4>Pizza Information</h4>
                {/*Text Inputs*/}
                <label htmlFor='name'>Name
                    <input
                        id='name-input'
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                    />
                </label>

                <label htmlFor='size'>Size
                    <select id='size-dropdown' name='size' onChange={onChange} value={values.size}>
                    <option value=''>-- Select a Role --</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='XLarge'>XLarge</option>
              </select>
                </label>
                <label>Chicken
                    <input
                        type='checkbox'
                        name='chicken'
                        onChange={onChange}
                        checked={values.chicken}
                    />
                </label>
                <label>Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.topping1}
                    />
                </label>
                <label>Sausage
                    <input
                        type='checkbox'
                        name='sausage'
                        onChange={onChange}
                        checked={values.sausage}
                    />
                </label>
                <label>Pineapple
                    <input
                        type='checkbox'
                        name='pineapple'
                        onChange={onChange}
                        checked={values.pineapple}
                    />
                </label>
                <label>Mushrooms
                    <input
                        type='checkbox'
                        name='mushrooms'
                        onChange={onChange}
                        checked={values.mushroooms}
                    />
                </label>
                <label htmlFor='special-instructions'>Special Instructions
                    <input
                    id='special-text'
                    type='text'
                    name='specialText'
                    value={values.password}
                    onChange={onChange}
                    />
                </label>           
            </div>

            {/* disabled button */}
            <button id='submitBtn' disabled={disabled}>submit</button>
        </form>
    )
}