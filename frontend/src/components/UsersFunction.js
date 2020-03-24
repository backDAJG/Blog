import axios from 'axios'
import Swal from 'sweetalert2'

export const register = async newUser => {
  let info = ''
  return await axios
    .post('http://localhost:3001/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      comfirmPassword: newUser.comfirmPassword

    })
    .then(res => {
      const data = res.data.msg
      console.log(data)
      if (data === 'Las contraseña no coinciden.') {

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'info',
          title: data
        })
        info = data
      } else if (data === 'La contraseña debe ser mayor a 6 caracteres.') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'info',
          title: data
        })
        info = data
      } else if (data === 'El nombre de usuario ya existe.') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'info',
          title: data
        })
        info = data
      } else if (data === 'Nuevo usuario agregado.') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'info',
          title: data
        })
        info = data
      }
      return info
    })
    .catch(err => {
      console.log(err)
    })
}

export const login = user => {
  let info = ''
  return axios
    .post('http://localhost:3001/login', {
      email: user.email,
      password: user.password
    })
    .then(res => {
      const data = res.data.msg

      if (data === 'autheticated.') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'info',
          title: data
        })
        localStorage.setItem('usertoken', res.data.token)
        return res.data
      } else if (data === 'Contraseña incorrecta.') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: data
        })
        info = data
        return info
      } else if (data === 'El nombre de usuario no existe.') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'info',
          title: data
        })
        info = data
        return info
      }


    })
    .catch(err => {
      console.log(err)
    })
}