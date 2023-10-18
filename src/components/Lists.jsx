export function EducationList({ educations, editCallback, deleteCallback }) {
  return (
    <ul className='list'>
      {educations.map((education, index) => (
        <div key={education.schoolName} className='listItem'>
          <p>{education.schoolName}</p>
          <div className='icons'>
            <img
              onClick={() => editCallback(education, index)}
              src='/edit.png'
              alt='edit'
            />
            <img
              onClick={() => deleteCallback(education)}
              src='/delete.png'
              alt='delete'
            />
          </div>
        </div>
      ))}
    </ul>
  );
}

export function ExperienceList({ experiences, editCallback, deleteCallback }) {
  return (
    <ul className='list'>
      {experiences.map((experience, index) => (
        <div key={experience.companyName} className='listItem'>
          <p>{experience.companyName}</p>
          <div className='icons'>
            <img
              onClick={() => editCallback(education, index)}
              src='/edit.png'
              alt='edit'
            />
            <img
              onClick={() => deleteCallback(education)}
              src='/delete.png'
              alt='delete'
            />
          </div>
        </div>
      ))}
    </ul>
  );
}
