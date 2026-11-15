const form = document.querySelector('.contact-form');

if (form) {
  const fields = {
    name: {
      input: document.getElementById('name'),
      error: document.getElementById('name-error')
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error')
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('message-error')
    }
  };

  const status = document.querySelector('.form-status');

  const setError = (fieldKey, message) => {
    const field = fields[fieldKey];
    field.input.setAttribute('aria-invalid', 'true');
    field.input.classList.add('is-error');
    field.error.textContent = message;
  };

  const clearError = (fieldKey) => {
    const field = fields[fieldKey];
    field.input.setAttribute('aria-invalid', 'false');
    field.input.classList.remove('is-error');
    field.error.textContent = '';
  };

  Object.entries(fields).forEach(([key, field]) => {
    field.input.addEventListener('input', () => {
      if (field.input.value.trim() !== '') {
        clearError(key);
      }
    });

    field.input.addEventListener('blur', () => {
      if (field.input.hasAttribute('required') && field.input.value.trim() === '') {
        setError(key, 'This field is required.');
      }

      if (key === 'email' && field.input.value.trim() && !field.input.checkValidity()) {
        setError(key, 'Enter a valid email address.');
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let valid = true;

    if (!fields.name.input.value.trim()) {
      setError('name', 'Please enter your name.');
      valid = false;
    } else {
      clearError('name');
    }

    if (!fields.email.input.value.trim()) {
      setError('email', 'Please enter your email address.');
      valid = false;
    } else if (!fields.email.input.checkValidity()) {
      setError('email', 'Enter a valid email address.');
      valid = false;
    } else {
      clearError('email');
    }

    if (!fields.message.input.value.trim()) {
      setError('message', 'Please share a few details about your project.');
      valid = false;
    } else {
      clearError('message');
    }

    if (!valid) {
      status.textContent = 'Please correct the highlighted fields before submitting.';
      status.classList.add('is-error-message');
      status.classList.remove('is-success-message');
      return;
    }

    status.textContent = 'Thanks for reaching out. Your inquiry has been received and we will respond soon.';
    status.classList.add('is-success-message');
    status.classList.remove('is-error-message');
    form.reset();
    Object.keys(fields).forEach(clearError);
  });
}
