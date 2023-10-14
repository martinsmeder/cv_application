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

export default function Cv({ contacts, educations, experiences }) {
  return (
    <div id='cvContainer'>
      <CvContacts contacts={contacts} />
      <CvEducation educations={educations} />
      <CvExperience experiences={experiences} />
    </div>
  );
}
