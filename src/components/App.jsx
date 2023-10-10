import { useState } from 'react';

function Forms({ fullNameChange, emailChange, phoneChange, addressChange }) {
  return (
    <div id='formContainer'>
      <section className='formSection contacts'>
        <form className='form'>
          <input
            id='fullName'
            type='text'
            placeholder='Full name:'
            onChange={fullNameChange}
          />
          <input
            id='email'
            type='text'
            placeholder='Email:'
            onChange={emailChange}
          />
          <input
            id='phone'
            type='text'
            placeholder='Phone:'
            onChange={phoneChange}
          />
          <input
            id='adress'
            type='text'
            placeholder='Adress:'
            onChange={addressChange}
          />
        </form>
      </section>
    </div>
  );
}

function Cv({ contacts }) {
  return (
    <div id='cvContainer'>
      <section className='cvSection contacts'>
        <h1>{contacts.fullName}</h1>
        <div>
          <p>{contacts.email}</p>
          <p>{contacts.phone}</p>
          <p>{contacts.address}</p>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [contactDetails, setContactDetails] = useState({
    fullName: '?',
    email: '?',
    phone: '?',
    address: '?',
  });

  function handleFullNameChange(e) {
    setContactDetails({
      ...contactDetails, // Copy old fields
      fullName: e.target.value, // Override only this field
    });
  }

  function handleEmailChange(e) {
    setContactDetails({
      ...contactDetails,
      email: e.target.value,
    });
  }

  function handlePhoneChange(e) {
    setContactDetails({
      ...contactDetails,
      phone: e.target.value,
    });
  }

  function handleAddressChange(e) {
    setContactDetails({
      ...contactDetails,
      address: e.target.value,
    });
  }

  return (
    <main>
      <Forms
        fullNameChange={(e) => handleFullNameChange(e)}
        emailChange={(e) => handleEmailChange(e)}
        phoneChange={(e) => handlePhoneChange(e)}
        addressChange={(e) => handleAddressChange(e)}
      />
      <Cv contacts={contactDetails} />
    </main>
  );
}

// Get changes in form to be displayed in cv immediately
// --> Move sections into their own components, get that to work as well
// --> Move on
