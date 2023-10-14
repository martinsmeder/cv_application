import { useState } from 'react';

import Cv from './Cv';
import { ContactForm, EducationForm, ExperienceForm } from './Forms';
import { EducationList, ExperienceList } from './Lists';
import { initialEducations, initialExperiences } from './initialData';

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

  const [showForm, setShowForm] = useState(false);

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
      setShowForm(false); // Close form
    } else {
      const newStateArray = [...stateVariable]; // Copy original array
      newStateArray[currentIndex] = formData; // Replace at old item index
      setStateVariable(newStateArray); // Update state with edited object
      setFormData(resetCallback); // Reset form
      setIsEditing(false); // Reset isEditing flag
      setShowForm(false); // Close form
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
    setShowForm(true);
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
    setShowForm(true);
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

  function handleAddNewClick(setStateVariable, stateVariable) {
    setStateVariable(stateVariable);
    setShowForm(true);
  }

  return (
    <main>
      <div id='formContainer'>
        <section className='formSection contacts'>
          <h3>Contact details</h3>
          <ContactForm
            fullNameChange={(e) => handleContactChange(e, 'fullName')}
            emailChange={(e) => handleContactChange(e, 'email')}
            phoneChange={(e) => handleContactChange(e, 'phone')}
            addressChange={(e) => handleContactChange(e, 'address')}
          />
        </section>

        <section className='formSection education'>
          <h3>Education</h3>
          <button
            onClick={() =>
              handleAddNewClick(setEducationFormData, {
                schoolName: '',
                studyTitle: '',
                studyDates: '',
              })
            }
          >
            Add new
          </button>
          <EducationForm
            showForm={showForm}
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
            cancelCallback={() => setShowForm(false)}
          />
          <EducationList
            educations={educations}
            editCallback={handleEducationEditClick}
            deleteCallback={handleEducationDeleteClick}
          />
        </section>

        <section className='formSection experience'>
          <h3>Experience</h3>
          <button
            onClick={() =>
              handleAddNewClick(setExperienceFormData, {
                companyName: '',
                positionTitle: '',
                responsibilities: '',
                employmentDates: '',
              })
            }
          >
            Add new
          </button>
          <ExperienceForm
            showForm={showForm}
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
            cancelCallback={() => setShowForm(false)}
          />
          <ExperienceList
            experiences={experiences}
            editCallback={handleExperienceEditClick}
            deleteCallback={handleExperienceDeleteClick}
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

// showForm state
// add showForm prop to form with inline CSS
// add new click --> showForm true
// save click --> showForm false
// edit click --> showForm true
