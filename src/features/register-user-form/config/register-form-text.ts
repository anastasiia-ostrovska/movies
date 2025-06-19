export const REGISTER_FORM_TEXT = {
  form: {
    errorText: {
      userExists: 'User with this email already exists',
      notEqualPasswords: 'Passwords do not match',
    },
  },
  name: {
    name: 'name',
    label: 'Your name',
    helperText: 'Please, enter your name',
    autoComplete: 'given-name',
    errorText: {
      required: 'Name is required',
    },
  },
  email: {
    name: 'email',
    label: 'Email',
    helperText: 'Please, enter your email address',
    autoComplete: 'email',
    errorText: {
      required: 'Email is required',
    },
  },
  password: {
    name: 'password',
    label: 'Password',
    helperText: 'Please, enter your password',
    autoComplete: 'current-password',
    errorText: {
      required: 'Password is required',
    },
  },
  confirmPassword: {
    name: 'confirmPassword',
    label: 'Confirm password',
    helperText: 'Please, confirm your password',
    autoComplete: 'current-password',
    errorText: {
      required: 'Confirmation is required',
    },
  },

  showPasswordButton: {
    hidePassword: 'Hide the password',
    showPassword: 'Show the password',
  },
  submitButton: {
    label: 'Log in',
  },
};
