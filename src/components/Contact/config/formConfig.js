export const formConfig = [
  {
    name: 'name',
    regexValidators: [
      [/\S+/, 'Este campo no puede estar vacío'],
      [/^[a-zA-Z\s]*$/, 'Ingresaste caracteres no validos'],
      [/^((?!asdasd).)*$/, '¿Estás escribiendo caracteres al azar?'],
    ]
  },
  {
    name: 'email',
    regexValidators: [
      [/\S+/, 'Este campo no puede estar vacío'],
      [
        /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/, 
        'Ingresaste un correo no válido'
      ],
    ]
  },
  {
    name: 'subject',
    regexValidators: [
      [/\S+/, 'Este campo no puede estar vacío'],
      [/^.{0,50}$/, 'El máximo de caracteres son 50'],
      [/^((?!asdasd).)*$/, '¿Estás escribiendo caracteres al azar?'],
    ],
  },
  {
    name: 'msgBody',
    regexValidators: [
      [/\S+/, 'Este campo no puede estar vacío'],
      [/^[\s\S]{0,5000}$/, 'Tampoco me contés tu vida... se más breve por favor.'],
    ]
  }
]