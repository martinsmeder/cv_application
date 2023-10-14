export function EducationList({ educations, editCallback, deleteCallback }) {
  return (
    <ul className='list'>
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

export function ExperienceList({ experiences, editCallback, deleteCallback }) {
  return (
    <ul className='list'>
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
