
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

   
    function validateName(name, fieldName) {
        if (name === '') return fieldName + ' is required';
        if (!/^[A-Za-z]+$/.test(name)) return fieldName + ' must contain only letters';
        if (name.length < 2) return fieldName + ' must be at least 2 characters';
        return '';
    }

    
    function validateEmail(email) {
        if (email === '') return 'Email is required';
        if (!email.includes('@') || !email.includes('.')) return 'Enter a valid email';
        return '';
    }

   
    function validateContact(contact) {
        if (contact === '') return 'Contact number is required';
        if (!/^[0-9]+$/.test(contact)) return 'Only numbers allowed';
        if (contact.length < 10 || contact.length > 15) return 'Must be 10-15 digits';
        return '';
    }

    
    function validateGender(gender) {
        if (gender === '') return 'Please select gender';
        return '';
    }

  
    function validateDOB(dob) {
        if (dob === '') return 'Date of birth is required';
        
        const selectedDate = new Date(dob);
        const today = new Date();
        
        
        selectedDate.setHours(0,0,0,0);
        today.setHours(0,0,0,0);
        
        if (selectedDate > today) return 'Date cannot be in the future';
        return '';
    }


    document.getElementById('firstName').addEventListener('input', function() {
        let error = validateName(this.value, 'First name');
        document.getElementById('firstNameError').innerHTML = error;
    });

    
    document.getElementById('lastName').addEventListener('input', function() {
        let error = validateName(this.value, 'Last name');
        document.getElementById('lastNameError').innerHTML = error;
    });

   
    document.getElementById('email').addEventListener('input', function() {
        let error = validateEmail(this.value);
        document.getElementById('emailError').innerHTML = error;
    });

   
    document.getElementById('contact').addEventListener('input', function() {
        let error = validateContact(this.value);
        document.getElementById('contactError').innerHTML = error;
    });

    document.getElementById('gender').addEventListener('change', function() {
        let error = validateGender(this.value);
        document.getElementById('genderError').innerHTML = error;
    });

    
    document.getElementById('dob').addEventListener('change', function() {
        let error = validateDOB(this.value);
        document.getElementById('dobError').innerHTML = error;
    });


    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

       
        let firstName = document.getElementById('firstName').value.trim();
        let lastName = document.getElementById('lastName').value.trim();
        let email = document.getElementById('email').value.trim();
        let contact = document.getElementById('contact').value.trim();
        let gender = document.getElementById('gender').value;
        let dob = document.getElementById('dob').value;

      
        let firstNameError = validateName(firstName, 'First name');
        let lastNameError = validateName(lastName, 'Last name');
        let emailError = validateEmail(email);
        let contactError = validateContact(contact);
        let genderError = validateGender(gender);
        let dobError = validateDOB(dob);

     
        document.getElementById('firstNameError').innerHTML = firstNameError;
        document.getElementById('lastNameError').innerHTML = lastNameError;
        document.getElementById('emailError').innerHTML = emailError;
        document.getElementById('contactError').innerHTML = contactError;
        document.getElementById('genderError').innerHTML = genderError;
        document.getElementById('dobError').innerHTML = dobError;

        if (!firstNameError && !lastNameError && !emailError && !contactError && !genderError && !dobError) {
            
        
            let successMsg = document.createElement('div');
            successMsg.className = 'success';
            successMsg.innerHTML = '✅ Registration Successful!';
            
           
            let oldMsg = document.querySelector('.success');
            if (oldMsg) oldMsg.remove();
            
            
            form.appendChild(successMsg);
            
            
            setTimeout(function() {
                form.reset();
                successMsg.remove();
                
                
                let errors = document.querySelectorAll('.error');
                for(let i = 0; i < errors.length; i++) {
                    errors[i].innerHTML = '';
                }
            }, 2000);
        }
    });
});