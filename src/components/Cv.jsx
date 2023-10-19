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
      {educations.length > 0 ? (
        <div className='headingContainer cv'>
          <h1>Education</h1>
        </div>
      ) : null}

      {educations.map((item) => (
        <div key={item.id}>
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
      {experiences.length > 0 ? (
        <div className='headingContainer cv'>
          <h1>Professional Experience</h1>
        </div>
      ) : null}

      {experiences.map((item) => (
        <div key={item.id}>
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
