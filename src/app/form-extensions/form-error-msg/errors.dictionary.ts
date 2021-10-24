interface ErrorsDictionary {
  [key: string]: string;
}

export const errorsDictionary: ErrorsDictionary = {
  required: 'El campo es obligatorio.',
  email: 'Debe ser un email válido.',
  passwordsMustBeEqual: 'Las contraseñas no coinciden.',
  checkUsernameIsAvailable: 'El nombre de usuario no está disponible.',
  unauthorized: 'Las credenciales proporcionadas son incorrectas.',
};
