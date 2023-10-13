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

function EducationForm({
  schoolValue,
  titleValue,
  dateValue,
  submitCallback,
  changeCallback,
}) {
  return (
    <form className='form' onSubmit={submitCallback}>
      <input
        id='schoolName'
        name='schoolName'
        type='text'
        placeholder='School name:'
        value={schoolValue}
        onChange={changeCallback}
      />
      <input
        id='studyTitle'
        name='studyTitle'
        type='text'
        placeholder='Title of study:'
        value={titleValue}
        onChange={changeCallback}
      />
      <input
        id='studyDates'
        name='studyDates'
        type='text'
        placeholder='Date of study:'
        value={dateValue}
        onChange={changeCallback}
      />
      <button type='submit'>Save</button>
    </form>
  );
}

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

// function EducationList({ educations, handleDelete }) {
//   return (
//     <ul className='list'>
//       <h4>EDUCATION</h4>
//       {educations.map((education) => (
//         <div key={education.schoolName} className='listItems'>
//           <p>{education.schoolName}</p>
//           <button>Edit</button>
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       ))}
//     </ul>
//   );
// }

export default function App() {
  // ============================= STATE ==============================
  const [contactDetails, setContactDetails] = useState({
    fullName: '?',
    email: '?',
    phone: '?',
    address: '?',
  });

  const [educations, setEducations] = useState(initialEducations);

  const [educationFormData, setEducationFormData] = useState({
    schoolName: '',
    studyTitle: '',
    studyDates: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(null);

  // ========================== HANDLERS ==============================
  function handleContactChange(e, propertyName) {
    setContactDetails({
      ...contactDetails, // Create a copy of the original object
      [propertyName]: e.target.value, // Update this specific property only
    });
  }

  function handleEducationChange(e) {
    const { name, value } = e.target; // Get name and value from each input
    setEducationFormData({
      ...educationFormData, // Copy initial educationFormData
      [name]: value, // Set a property in the new object with the name (key)
      // provided by 'name' and assign it the 'value' from the input element.
    });
  }

  function handleEducationSubmit(e, isEditing) {
    if (!isEditing) {
      e.preventDefault();
      const newEducation = {
        // Create a new object with the form data
        schoolName: educationFormData.schoolName,
        studyTitle: educationFormData.studyTitle,
        studyDates: educationFormData.studyDates,
      };
      setEducations([...educations, newEducation]); // Add to educations array
      setEducationFormData({
        // Clear input fields
        schoolName: '',
        studyTitle: '',
        studyDates: '',
      });
    } else {
      e.preventDefault();
      // Create copy from original array
      const newEducationsArray = [...educations];
      // Replace old item with new item at old item index
      newEducationsArray[currentIndex] = educationFormData;
      // Update educations state
      setEducations(newEducationsArray);
      setEducationFormData({
        // Clear input fields
        schoolName: '',
        studyTitle: '',
        studyDates: '',
      });
      // Reset isEditing state
      setIsEditing(false);
    }
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
          <ul className='list'>
            <h4>EDUCATION</h4>
            {educations.map((education, index) => (
              <div key={education.schoolName} className='listItem'>
                <p>{education.schoolName}</p>
                <button
                  onClick={() => {
                    setEducationFormData({
                      schoolName: education.schoolName,
                      studyTitle: education.studyTitle,
                      studyDates: education.studyDates,
                    });
                    setIsEditing(true);
                    setCurrentIndex(index);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setEducations(
                      educations.filter(
                        // Filter out (remove) selected item
                        (item) => item.schoolName !== education.schoolName
                      )
                    );
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>

          <EducationForm
            schoolValue={educationFormData.schoolName}
            titleValue={educationFormData.studyTitle}
            dateValue={educationFormData.studyDates}
            submitCallback={(e) => handleEducationSubmit(e, isEditing)}
            changeCallback={handleEducationChange}
          />
        </section>
      </div>

      <Cv contacts={contactDetails} educations={educations} />
    </main>
  );
}
