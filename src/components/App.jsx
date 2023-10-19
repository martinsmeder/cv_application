import { useState } from 'react';

import { CvContacts, CvEducation, CvExperience } from './Cv';
import { ContactForm, EducationForm, ExperienceForm } from './Forms';
import { EducationList, ExperienceList } from './Lists';
import {
  initialContacts,
  initialEducations,
  initialExperiences,
} from './initialData';

export default function App() {
  // ============================= STATE ==============================
  const [contactDetails, setContactDetails] = useState(initialContacts);

  const [educations, setEducations] = useState(initialEducations);

  const [educationFormData, setEducationFormData] = useState({
    id: null,
    schoolName: '',
    studyTitle: '',
    studyDates: '',
  });

  const [experiences, setExperiences] = useState(initialExperiences);

  const [experienceFormData, setExperienceFormData] = useState({
    id: null,
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    employmentDates: '',
  });

  const [showEducationForm, setShowEducationForm] = useState(false);

  const [showExperienceForm, setShowExperienceForm] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(null);

  // =============================== HELPERS ===============================
  function generateUniqueId(array) {
    // Find the maximum ID in the array
    const maxId = Math.max(...array.map((item) => item.id));

    // Increment the highest number by 1;
    return maxId + 1;
  }

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
      const newItem = {
        // Create a new object with form data
        ...formData,
        id: generateUniqueId(stateVariable),
      };
      setStateVariable([...stateVariable, newItem]); // Add to array
      setFormData(resetCallback); // Reset form
      setShowEducationForm(false);
      setShowExperienceForm(false);
    } else {
      const newStateArray = [...stateVariable]; // Copy original array
      newStateArray[currentIndex] = formData; // Replace at old item index
      newStateArray[currentIndex].id = generateUniqueId(stateVariable); // Add ID
      setStateVariable(newStateArray); // Update state with edited object
      setFormData(resetCallback); // Reset form
      setIsEditing(false); // Reset isEditing flag
      setShowEducationForm(false);
      setShowExperienceForm(false);
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
    setShowEducationForm(true);
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
    setShowExperienceForm(true);
  }

  function handleCancelClick(setShowForm, value) {
    setShowForm(value);
    setIsEditing(false);
  }

  function handleEducationDeleteClick(education) {
    setEducations(educations.filter((item) => item.id !== education.id));
  }

  function handleExperienceDeleteClick(experience) {
    setExperiences(experiences.filter((item) => item.id !== experience.id));
  }

  function handleAddNewClick(
    setStateVariable,
    stateVariable,
    setShowForm,
    value
  ) {
    setStateVariable(stateVariable);
    setShowForm(value);
  }

  function handleClearClick() {
    setContactDetails({
      fullName: '',
      email: '',
      phone: '',
      address: '',
    });
    setEducations([]);
    setExperiences([]);
  }

  function handleExampleClick() {
    setContactDetails(initialContacts);
    setEducations(initialEducations);
    setExperiences(initialExperiences);
  }

  return (
    <main>
      <div id='formContainer'>
        <div className='buttons example'>
          <button onClick={handleClearClick}>Clear Resume</button>
          <button onClick={handleExampleClick}>Load Example</button>
        </div>

        <section className='formSection contacts'>
          <div className='headingContainer forms'>
            <h3>Contact Details</h3>
          </div>
          <ContactForm
            fullNameValue={contactDetails.fullName}
            emailValue={contactDetails.email}
            phoneValue={contactDetails.phone}
            addressValue={contactDetails.address}
            fullNameChange={(e) => handleContactChange(e, 'fullName')}
            emailChange={(e) => handleContactChange(e, 'email')}
            phoneChange={(e) => handleContactChange(e, 'phone')}
            addressChange={(e) => handleContactChange(e, 'address')}
          />
        </section>

        <section className='formSection education'>
          <div className='headingContainer forms'>
            <h3>Education</h3>
          </div>
          <button
            onClick={() =>
              handleAddNewClick(
                setEducationFormData,
                {
                  schoolName: '',
                  studyTitle: '',
                  studyDates: '',
                },
                setShowEducationForm,
                true
              )
            }
          >
            + Add New
          </button>
          <EducationForm
            showForm={showEducationForm}
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
            cancelCallback={() =>
              handleCancelClick(setShowEducationForm, false)
            }
          />
          <EducationList
            educations={educations}
            editCallback={handleEducationEditClick}
            deleteCallback={handleEducationDeleteClick}
          />
        </section>

        <section className='formSection experience'>
          <div className='headingContainer forms'>
            <h3>Experience</h3>
          </div>
          <button
            onClick={() =>
              handleAddNewClick(
                setExperienceFormData,
                {
                  companyName: '',
                  positionTitle: '',
                  responsibilities: '',
                  employmentDates: '',
                },
                setShowExperienceForm,
                true
              )
            }
          >
            + Add New
          </button>
          <ExperienceForm
            showForm={showExperienceForm}
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
            cancelCallback={() =>
              handleCancelClick(setShowExperienceForm, false)
            }
          />
          <ExperienceList
            experiences={experiences}
            editCallback={handleExperienceEditClick}
            deleteCallback={handleExperienceDeleteClick}
          />
        </section>
      </div>

      <div id='cvContainer'>
        <CvContacts contacts={contactDetails} />
        <CvEducation educations={educations} />
        <CvExperience experiences={experiences} />
      </div>
    </main>
  );
}
