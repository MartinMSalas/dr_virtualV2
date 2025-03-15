export function checkName(name) {
  const errors = []

  if (name.length < 3) {
    errors.push("El nombre debe tener al menos 3 caracteres")
  }
  if (name.match(/[0-9]/)) {
    errors.push("El nombre no puede contener números")
  }

  return errors
}
export function checkLastName(lastName) {
  const errors = []

  if (lastName.length < 3) {
    errors.push("El apellido debe tener al menos 3 caracteres")
  }
  if (lastName.match(/[0-9]/)) {
    errors.push("El apellido no puede contener números")
  }

  return errors
}
export function checkDni(dni) {
  const errors = []


  if (!dni.match(/^[0-9]*$/)) {
    errors.push("El DNI solo debe contener números")
  }
  if (!dni.match(/[0-9]/)) {
    errors.push("El DNI debe contener al menos 1 numero")
  }

  return errors
}

export function checkEmail(email) {
  const errors = []

  if (email.length === 0) {
    errors.push("Requerido")
  }

  if (!email.includes("@")) {
    errors.push("Debe ingresar un email valido")
  }
  
  return errors
}

export function checkPhoneNumber(phone) {
  const errors = []


  if (!phone.match(/^[0-9]*$/)) {
    errors.push("El Telefono solo debe contener números")
  }
  if (!phone.match(/[0-9]/)) {
    errors.push("El Telefono debe contener al menos 1 numero")
  }

  return errors
}

export function checkCarnetNumber(carnetNumber) {
  const errors = []
  if (!carnetNumber.match(/^[0-9]*$/)) {
    errors.push("El carnet solo debe contener números")
  }
  if (!carnetNumber.match(/[0-9]/)) {
    errors.push("El carnet debe contener al menos 1 numero")
  }
  return errors
}


export function checkDayOfBirth(dateOfBirth) {
  const errors = []
  if (dateOfBirth > new Date())
    errors.push("La fecha de nacimiento no puede ser mayor a la fecha actual")
  return errors
}

export function checkRp1(rp1) {
  const errors = []

  if (rp1.length < 3) {
    errors.push("El RP1 debe tener al menos 3 caracteres")
  }
  return errors
}
export function checkRp2(rp2) {
  const errors = []

  if (rp2.length < 3) {
    errors.push("El RP2 debe tener al menos 3 caracteres")
  }
  return errors
}

export function checkDiagnostic1(diagnostic1) {
  const errors = []

  if (diagnostic1.length < 3) {
    errors.push("El Diagnostico 1 debe tener al menos 3 caracteres")
  }
  return errors
}
export function checkDiagnostic2(diagnostic2) {
  const errors = []

  if (diagnostic2.length < 3) {
    errors.push("El Diagnostico 1 debe tener al menos 3 caracteres")
  }
  return errors
}
