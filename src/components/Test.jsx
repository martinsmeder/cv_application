import { useState } from 'react';

const initialEducations = [
  {
    schoolName: '?',
    studyTitle: '?',
  },

  {
    schoolName: '??',
    studyTitle: '??',
  },
];

function EducationForm({ schoolValue, titleValue, schoolChange, studyChange }) {
  return (
    <form className='form'>
      <input
        id='schoolName'
        name='schoolName'
        type='text'
        placeholder='School name:'
        value={schoolValue}
        onChange={schoolChange}
      />
      <input
        id='studyTitle'
        name='studyTitle'
        type='text'
        placeholder='Title of study:'
        value={titleValue}
        onChange={studyChange}
      />
    </form>
  );
}

function EducationList({ educations, editCallback }) {
  return (
    <ul className='list'>
      {educations.map((education, index) => (
        <div key={education.schoolName} className='listItem'>
          <p>{education.schoolName}</p>
          <button onClick={() => editCallback(education, index)}>Edit</button>
        </div>
      ))}
    </ul>
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
        </div>
      ))}
    </section>
  );
}

export default function Test() {
  const [educations, setEducations] = useState(initialEducations);

  const [educationFormData, setEducationFormData] = useState({
    schoolName: '',
    studyTitle: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(null);

  function handleEducationChange(e, propertyName) {
    const updatedEducations = [...educations];
    updatedEducations[currentIndex][propertyName] = e.target.value;
    setEducations(updatedEducations);
  }

  function handleEducationEditClick(education, index) {
    setIsEditing(true);
    setCurrentIndex(index);
  }

  return (
    <main>
      <div id='formContainer'>
        <section className='formSection education'>
          <h3>Education</h3>
          <EducationForm
            schoolValue={isEditing ? educations[currentIndex].schoolName : ''}
            titleValue={isEditing ? educations[currentIndex].studyTitle : ''}
            schoolChange={(e) => handleEducationChange(e, 'schoolName')}
            studyChange={(e) => handleEducationChange(e, 'studyTitle')}
          />
          <EducationList
            educations={educations}
            editCallback={handleEducationEditClick}
          />
        </section>
      </div>

      <div id='cvContainer'>
        <CvEducation educations={educations} />
      </div>
    </main>
  );
}
