export function CvContacts({ contacts }) {
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

export function CvEducation({ educations }) {
  return (
    <section className='cvSection education'>
      <div className='headingContainer'>
        <h1>Education</h1>
      </div>
      {educations.map((item) => (
        <div key={item.schoolName}>
          <p className='dates'>{item.studyDates}</p>
          <div className='rightDiv'>
            <p>{item.schoolName}</p>
            <p>{item.studyTitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export function CvExperience({ experiences }) {
  return (
    <section className='cvSection experience'>
      <div className='headingContainer'>
        <h1>Professional Experience</h1>
      </div>
      {experiences.map((item) => (
        <div key={item.companyName}>
          <p className='dates'>{item.employmentDates}</p>
          <div className='rightDiv'>
            <p>{item.companyName}</p>
            <p>{item.positionTitle}</p>
            <p>{item.responsibilities}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
