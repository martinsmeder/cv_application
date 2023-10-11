import { useState } from 'react';

function ContactForm({
  fullNameChange,
  emailChange,
  phoneChange,
  addressChange,
}) {
  return (
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
  );
}

function EducationForm({ schoolChange, titleChange, dateChange }) {
  return (
    <form className='form'>
      <input
        id='schoolName'
        type='text'
        placeholder='School name:'
        onChange={schoolChange}
      />
      <input
        id='studyTitle'
        type='text'
        placeholder='Title of study:'
        onChange={titleChange}
      />
      <input
        id='studyDates'
        type='text'
        placeholder='Date of study:'
        onChange={dateChange}
      />
    </form>
  );
}

function Cv({ contacts, education }) {
  return (
    <div id='cvContainer'>
      <CvContacts contacts={contacts} />
      <CvEducation education={education} />
    </div>
  );
}

function CvContacts({ contacts }) {
  return (
    <section className='cvSection contacts'>
      <h1>{contacts.fullName}</h1>
      <div>
        <p>{contacts.email}</p>
        <p>{contacts.phone}</p>
        <p>{contacts.address}</p>
      </div>
    </section>
  );
}

function CvEducation({ education }) {
  return (
    <section className='cvSection education'>
      <h1>EDUCATION</h1>
      <div>
        <p>{education.schoolName}</p>
        <p>{education.studyTitle}</p>
        <p>{education.studyDates}</p>
      </div>
    </section>
  );
}

export default function App() {
  const [contactDetails, setContactDetails] = useState({
    fullName: '?',
    email: '?',
    phone: '?',
    address: '?',
  });

  const [education, setEducation] = useState({
    schoolName: '?',
    studyTitle: '?',
    studyDates: '?',
  });

  function handleContactChange(e, propertyName) {
    setContactDetails({
      ...contactDetails, // Create a copy of the original object
      [propertyName]: e.target.value, // Update this specific property only
    });
  }

  function handleEducationChange(e, propertyName) {
    setEducation({
      ...education, // Create a copy of the original object
      [propertyName]: e.target.value, // Update this specific property only
    });
  }

  return (
    <main>
      <div id='formContainer'>
        <section className='formSection contacts'>
          <ContactForm
            fullNameChange={(e) => handleContactChange(e, 'fullName')}
            emailChange={(e) => handleContactChange(e, 'email')}
            phoneChange={(e) => handleContactChange(e, 'phone')}
            addressChange={(e) => handleContactChange(e, 'address')}
          />
        </section>
        <section className='formSection education'>
          <EducationForm
            schoolChange={(e) => handleEducationChange(e, 'schoolName')}
            titleChange={(e) => handleEducationChange(e, 'studyTitle')}
            dateChange={(e) => handleEducationChange(e, 'studyDates')}
          />
          <button>+</button>
        </section>
      </div>
      <Cv contacts={contactDetails} education={education} />
    </main>
  );
}

// Initial array with one object with question marks
// CvEducation just renders what's in the array currently
// + button opens form
// save button adds to array, and displays array to the left
// edit button repopens form for that particular object, with prev filled values
