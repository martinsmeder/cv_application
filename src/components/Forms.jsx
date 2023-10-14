export function ContactForm({
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

export function EducationForm({
  showForm,
  schoolValue,
  titleValue,
  dateValue,
  submitCallback,
  changeCallback,
  cancelCallback,
}) {
  return (
    <form
      className='form'
      onSubmit={submitCallback}
      style={showForm ? { display: 'flex' } : { display: 'none' }}
    >
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
      <button type='button' onClick={cancelCallback}>
        Cancel
      </button>
    </form>
  );
}

export function ExperienceForm({
  showForm,
  companyValue,
  positionValue,
  responsibilitiesValue,
  dateValue,
  submitCallback,
  changeCallback,
  cancelCallback,
}) {
  return (
    <form
      className='form'
      onSubmit={submitCallback}
      style={showForm ? { display: 'flex' } : { display: 'none' }}
    >
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
      <button type='button' onClick={cancelCallback}>
        Cancel
      </button>
    </form>
  );
}
