let isMoreEducation = false;
let isMoreExperience = false;

let company2
let companyCity2
let companyYear2
let college2
let collegeCity2
let collegeYear2

// Adding more education if user clicks on add education button
document.querySelector('.add-education').addEventListener('click', () => {
    isMoreEducation = true;
    console.log(isMoreEducation);
    const educationContainer = document.getElementById('education-section');

    const newEducationDiv = document.createElement('div');
    newEducationDiv.classList.add('education-section2');

    newEducationDiv.innerHTML = `
    <label for="college2">College/University</label>
            <input type="text" name="college2" id="college2" required>
            
            <label for="college-city2">City of your college/university</label>
            <input type="text" name="college-city2" id="college-city2" required>
            
            <label for="year2">Year From - to</label>
            <input type="text" placeholder="ex- 2022 - 2026" name="college-year2" id="college-year2" required>

            <button type="button" class="delete-education">Delete Education</button>
        `;

    educationContainer.appendChild(newEducationDiv);

    newEducationDiv.querySelector('.delete-education').addEventListener('click', () => {
        isMoreEducation = false;
        console.log(isMoreEducation);
        educationContainer.removeChild(newEducationDiv);
    });
});

// Adding more experience if user clicks on add experience button
document.querySelector('.add-experience').addEventListener('click', () => {
    isMoreExperience = true
    const experienceContainer = document.getElementById('experience-section');

    const newExperienceDiv = document.createElement('div');
    newExperienceDiv.classList.add('experience-section2');

    newExperienceDiv.innerHTML = `
            <label for="company2">Company Name</label>
            <input type="text" name="company2" id="company2" required>

            <label for="company-city2">City of your company</label>
            <input type="text" name="company-city2" id="company-city2" required>

            <label for="year2">Year From - to</label>
            <input type="text" placeholder="ex- 2022 - 2026" name="company-year2" id="company-year2" required>

            <button type="button" class="delete-experience">Delete Experience</button>
    `;

    experienceContainer.appendChild(newExperienceDiv);

    newExperienceDiv.querySelector('.delete-experience').addEventListener('click', () => {
        isMoreExperience = false
        experienceContainer.removeChild(newExperienceDiv);
    });
});

// Generate Resume Button
document.querySelector('.generate-btn').addEventListener('click', function (e) {
    const form = document.querySelector('form');

    if (!form.checkValidity()) {
        form.reportValidity();
    } else {
        e.preventDefault(); // Prevent form submission

        // Get user input values
        const fullName = document.getElementById('full-name').value;
        const profession = document.getElementById('profession').value;
        const contact = document.getElementById('contact').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const about = document.getElementById('about').value;
        const skills = document.getElementById('skills').value.split(',');

        const college = document.getElementById('college').value;
        const collegeCity = document.getElementById('college-city').value;
        const collegeYear = document.getElementById('college-year').value;

        const company = document.getElementById('company').value;
        const companyCity = document.getElementById('company-city').value;
        const companyYear = document.getElementById('company-year').value;


        // ========== Getting user input values of additional education & experience fields ====
        if (isMoreEducation) {
            college2 = document.getElementById('college2').value;
            collegeCity2 = document.getElementById('college-city2').value;
            collegeYear2 = document.getElementById('college-year2').value;
        }
        if (isMoreExperience) {
            company2 = document.getElementById('company2').value;
            companyCity2 = document.getElementById('company-city2').value;
            companyYear2 = document.getElementById('company-year2').value;
        }

        // Hide the form and main heading
        document.querySelector('.main-container').style.display = 'none';
        document.querySelector(".main-heading").style.display = "none";

        // Create the resume template with user input
        const resume = `
            <div class="resume">
                <div class="col1">
                    <div class="profile">
                        <img src="profile.png" alt="Profile photo">
                    </div>
                    <div class="personal-info">
                        <h2>CONTACT</h2>
                        <p><i class="fa-solid fa-phone icon"></i>${contact}</p>
                        <p><i class="fa-solid fa-envelope icon"></i>${email}</p>
                        <p><i class="fa-solid fa-location-dot icon"></i>${address}</p>
                    </div>
                    <div class="skills">
                        <h2>SKILLS</h2>
                        <ul>
                            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="col2">
                    <div class="name">
                        <h1>${fullName}</h1>
                        <p><i class="fa-solid fa-user-tie icon"></i>${profession}</p>
                    </div>
                    <div class="about">
                        <h2>ABOUT ME</h2>
                        <p>${about}</p>
                    </div>
                    <div class="education">
                        <h2>Education</h2>
                        <p class="college-title">${college}</p>
                        <p>${collegeCity}</p>
                        <p>${collegeYear}</p>

                        ${isMoreEducation ?
                `<div class="more-education">
                            <p class="college-title college-title2" contenteditable="false">${college2}</p>
                        <p contenteditable="false">${collegeCity2}</p>
                        <p contenteditable="false">${collegeYear2}</p>
                        </div>`
                : ``}
                    </div>
                    <div class="experience">
                        <h2>Experience</h2>
                        <p class="experience-title">${company}</p>
                        <p>${companyCity}</p>
                        <p>${companyYear}</p>

                        ${isMoreExperience ?
                `<div class="more-experience">
                        <p class="experience-title experience-title2" contenteditable="false">${company2}</p>
                    <p contenteditable="false">${companyCity2}</p>
                    <p contenteditable="false">${companyYear2}</p>
                    </div>` : ``}
                    </div>
                </div>
            </div>
        `;

        // Create a new div for the resume
        const resumeContainer = document.createElement('div');
        resumeContainer.classList.add('resume-container');
        resumeContainer.innerHTML = resume;

        // Append the new resume container to the body
        document.body.appendChild(resumeContainer);
    }
});
