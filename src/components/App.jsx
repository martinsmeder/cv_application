import { useState } from 'react';

const initialEducations = [
  {
    schoolName: '?',
    studyTitle: '?',
    studyDates: '?',
  },

  {
    schoolName: '??',
    studyTitle: '??',
    studyDates: '??',
  },

  {
    schoolName: '???',
    studyTitle: '???',
    studyDates: '???',
  },
];

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

// function EducationForm({ schoolChange, titleChange, dateChange }) {
//   return (
//     <form className='form'>
//       <input
//         id='schoolName'
//         type='text'
//         placeholder='School name:'
//         onChange={schoolChange}
//       />
//       <input
//         id='studyTitle'
//         type='text'
//         placeholder='Title of study:'
//         onChange={titleChange}
//       />
//       <input
//         id='studyDates'
//         type='text'
//         placeholder='Date of study:'
//         onChange={dateChange}
//       />
//     </form>
//   );
// }

function Cv({ contacts, educations }) {
  return (
    <div id='cvContainer'>
      <CvContacts contacts={contacts} />
      <CvEducation educations={educations} />
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

function CvEducation({ educations }) {
  return (
    <section className='cvSection education'>
      <h1>EDUCATION</h1>
      {educations.map((item) => (
        <div key={item.schoolName}>
          <p>{item.schoolName}</p>
          <p>{item.studyTitle}</p>
          <p>{item.studyDates}</p>
        </div>
      ))}
    </section>
  );
}

function EducationList({ educations }) {
  return (
    <ul className='list'>
      <h4>EDUCATION</h4>
      {educations.map((item) => (
        <p key={item.schoolName}>{item.schoolName}</p>
      ))}
    </ul>
  );
}

export default function App() {
  const [contactDetails, setContactDetails] = useState({
    fullName: '?',
    email: '?',
    phone: '?',
    address: '?',
  });

  // const [educations, setEducations] = useState(initialEducations);

  function handleContactChange(e, propertyName) {
    setContactDetails({
      ...contactDetails, // Create a copy of the original object
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
          <EducationList educations={initialEducations} />

          {/* <EducationForm
            schoolChange={(e) => handleEducationChange(e, 'schoolName')}
            titleChange={(e) => handleEducationChange(e, 'studyTitle')}
            dateChange={(e) => handleEducationChange(e, 'studyDates')}
          /> */}
        </section>
      </div>
      <Cv contacts={contactDetails} educations={initialEducations} />
    </main>
  );
}

// JUST GET FUNCTIONALITY FROM PROJECT TASK, THEN FIX THE REST
// ---
// ---
// ---
// ---
// Add button to display form
// Make sure submitting/saving renders in both areas correctly
// also make sure submitting/saving hides the form
// Add edit button to display form, make sure changes happen in both places,
// at least when you hit save, and hide form
// Add delete button with delete functionality
