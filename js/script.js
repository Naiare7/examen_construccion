// FECHA

function mostrarFecha() {
  const fecha = new Date();
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('fecha').textContent = fecha.toLocaleDateString('es-ES', opciones);
}

function cargarFecha() {
  const fecha = new Date();
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const el = document.getElementById('fecha');
  if (el) {
    el.textContent = fecha.toLocaleDateString('es-ES', opciones);
  }
}

// CONTACTO - VALIDACIÓN DE FORMULARIO

function validarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value;

  alert('Confirmación de datos:\n\nNombre: ' + nombre + '\nEmail: ' + email + '\nTeléfono: ' + telefono + '\nAsunto: ' + asunto + '\nMensaje: ' + mensaje);

  return true;
}

// PATROCINIOS - LOGIN 

document.addEventListener('DOMContentLoaded', function() {
  // Toggle contraseña
  const eyeIcon = document.getElementById('eyeIcon');
  if (eyeIcon) {
    eyeIcon.addEventListener('click', function(e) {
      e.preventDefault();
      const pwd = document.getElementById('password');
      const icon = document.getElementById('eyeIcon');
      if (pwd.type === 'password') {
        pwd.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      } else {
        pwd.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      }
    });
  }

  // Login con localStorage
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const user = document.getElementById('username').value;
      const pwd = document.getElementById('password').value;
      const remember = document.getElementById('remember').checked;

      localStorage.setItem('username', user);
      if (remember) {
        localStorage.setItem('password', pwd);
        localStorage.setItem('remember', 'true');
      } else {
        localStorage.removeItem('password');
        localStorage.setItem('remember', 'false');
      }
      alert('¡Bienvenid@ ' + user + '!');
    });
  }

  // Cargar datos guardados
  const user = localStorage.getItem('username');
  const pwd = localStorage.getItem('password');
  const remember = localStorage.getItem('remember');
  if (user) {
    document.getElementById('username').value = user;
  }
  if (remember === 'true' && pwd) {
    document.getElementById('password').value = pwd;
    document.getElementById('remember').checked = true;
  }
});