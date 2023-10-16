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

export function CvExperience({ experiences }) {
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
