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

const initialExperiences = [
  {
    companyName: '?',
    positionTitle: '?',
    responsibilities: '?',
    employmentDates: '?',
  },

  {
    companyName: '??',
    positionTitle: '??',
    responsibilities: '??',
    employmentDates: '??',
  },

  {
    companyName: '???',
    positionTitle: '???',
    responsibilities: '???',
    employmentDates: '???',
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

function ExperienceForm({
  companyValue,
  positionValue,
  responsibilitiesValue,
  dateValue,
  submitCallback,
  changeCallback,
}) {
  return (
    <form className='form' onSubmit={submitCallback}>
      <input
        id='companyName'
        name='companyName'
        type='text'
        placeholder='Company name:'
        value={companyValue}
        onChange={changeCallback}
      />
      <input
        id='positionTitle'
        name='positionTitle'
        type='text'
        placeholder='Position title:'
        value={positionValue}
        onChange={changeCallback}
      />
      <textarea
        id='responsibilities'
        name='responsibilities'
        placeholder='Main responsibilities:'
        value={responsibilitiesValue}
        onChange={changeCallback}
      />
      <input
        id='employmentDates'
        name='employmentDates'
        type='text'
        placeholder='Date of employment:'
        value={dateValue}
        onChange={changeCallback}
      />
      <button type='submit'>Save</button>
    </form>
  );
}

function Cv({ contacts, educations, experiences }) {
  return (
    <div id='cvContainer'>
      <CvContacts contacts={contacts} />
      <CvEducation educations={educations} />
      <CvExperience experiences={experiences} />
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

function CvExperience({ experiences }) {
  return (
    <section className='cvSection experience'>
      <h1>EXPERIENCES</h1>
      {experiences.map((item) => (
        <div key={item.companyName}>
          <p>{item.companyName}</p>
          <p>{item.positionTitle}</p>
          <p>{item.responsibilities}</p>
          <p>{item.employmentDates}</p>
        </div>
      ))}
    </section>
  );
}

function EducationList({ educations, editCallback, deleteCallback }) {
  return (
    <ul className='list'>
      <h4>EDUCATION</h4>
      {educations.map((education, index) => (
        <div key={education.schoolName} className='listItem'>
          <p>{education.schoolName}</p>
          <button onClick={() => editCallback(education, index)}>Edit</button>
          <button onClick={() => deleteCallback(education)}>Delete</button>
        </div>
      ))}
    </ul>
  );
}

function ExperienceList({ experiences, editCallback, deleteCallback }) {
  return (
    <ul className='list'>
      <h4>EXPERIENCE</h4>
      {experiences.map((experience, index) => (
        <div key={experience.companyName} className='listItem'>
          <p>{experience.companyName}</p>
          <button onClick={() => editCallback(experience, index)}>Edit</button>
          <button onClick={() => deleteCallback(experience)}>Delete</button>
        </div>
      ))}
    </ul>
  );
}

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

  const [experiences, setExperiences] = useState(initialExperiences);

  const [experienceFormData, setExperienceFormData] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    employmentDates: '',
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

  function handleChange(e, setFormData, stateVariable) {
    const { name, value } = e.target; // Get name and value from each input
    setFormData({
      ...stateVariable, // Copy initial formData
      [name]: value, // Set a property in the new object with the name (key)
      // provided by 'name' and assign it the 'value' from the input element.
    });
  }

  function handleSubmit(
    e,
    isEditing,
    formData,
    setFormData,
    stateVariable,
    setStateVariable,
    currentIndex,
    resetCallback
  ) {
    e.preventDefault();
    if (!isEditing) {
      const newItem = { ...formData }; // Create a new object with form data
      setStateVariable([...stateVariable, newItem]); // Add to array
      setFormData(resetCallback); // Reset form
    } else {
      const newStateArray = [...stateVariable]; // Copy original array
      newStateArray[currentIndex] = formData; // Replace at old item index
      setStateVariable(newStateArray); // Update state with edited object
      setFormData(resetCallback); // Reset form
      setIsEditing(false); // Reset isEditing flag
    }
  }

  function handleEducationEditClick(education, index) {
    setEducationFormData({
      schoolName: education.schoolName,
      studyTitle: education.studyTitle,
      studyDates: education.studyDates,
    });
    setIsEditing(true);
    setCurrentIndex(index);
  }

  function handleExperienceEditClick(experience, index) {
    setExperienceFormData({
      companyName: experience.companyName,
      positionTitle: experience.positionTitle,
      responsibilities: experience.responsibilities,
      employmentDates: experience.employmentDates,
    });
    setIsEditing(true);
    setCurrentIndex(index);
  }

  function handleEducationDeleteClick(education) {
    setEducations(
      educations.filter((item) => item.schoolName !== education.schoolName)
    );
  }

  function handleExperienceDeleteClick(experience) {
    setExperiences(
      experiences.filter((item) => item.companyName !== experience.companyName)
    );
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
          <EducationList
            educations={educations}
            editCallback={handleEducationEditClick}
            deleteCallback={handleEducationDeleteClick}
          />

          <EducationForm
            schoolValue={educationFormData.schoolName}
            titleValue={educationFormData.studyTitle}
            dateValue={educationFormData.studyDates}
            submitCallback={(e) =>
              handleSubmit(
                e,
                isEditing,
                educationFormData,
                setEducationFormData,
                educations,
                setEducations,
                currentIndex,
                {
                  schoolName: '',
                  studyTitle: '',
                  studyDates: '',
                }
              )
            }
            changeCallback={(e) =>
              handleChange(e, setEducationFormData, educationFormData)
            }
          />
        </section>

        <section className='formSection experience'>
          <ExperienceList
            experiences={experiences}
            editCallback={handleExperienceEditClick}
            deleteCallback={handleExperienceDeleteClick}
          />

          <ExperienceForm
            companyValue={experienceFormData.companyName}
            positionValue={experienceFormData.positionTitle}
            responsibilitiesValue={experienceFormData.responsibilities}
            dateValue={experienceFormData.employmentDates}
            submitCallback={(e) =>
              handleSubmit(
                e,
                isEditing,
                experienceFormData,
                setExperienceFormData,
                experiences,
                setExperiences,
                currentIndex,
                {
                  companyName: '',
                  positionTitle: '',
                  responsibilities: '',
                  employmentDates: '',
                }
              )
            }
            changeCallback={(e) =>
              handleChange(e, setExperienceFormData, experienceFormData)
            }
          />
        </section>
      </div>

      <Cv
        contacts={contactDetails}
        educations={educations}
        experiences={experiences}
      />
    </main>
  );
}
