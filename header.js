const obtenerprecio = document.getElementById("precio");

const calcular = document.getElementById("calcular");
const final = document.getElementById("resultado");
const inicial = document.getElementById("inicial");
const iva = document.getElementById("iva");

calcular.addEventListener("click", function() {
    // Obtener el valor y remover puntos para convertir a número
    const precioTexto = obtenerprecio.value;
    const precio = parseFloat(precioTexto.replace(/\./g, ''));
    
    // Validar que sea un número válido
    if (isNaN(precio) || precio <= 0) {
        alert("Por favor ingrese un valor válido");
        return;
    }
    
    const valorfinal = precio * 1.05;
    const porcentajeAdicional = valorfinal - precio;
    
    // Formatear números con puntos como separadores de miles
    const formatearNumero = (num) => {
        return num.toLocaleString('es-CO');
    };
    
    inicial.innerHTML = `El valor inicial es: $${formatearNumero(precio)} + porcentaje $${formatearNumero(porcentajeAdicional)}`;
    final.innerHTML = `El valor final es: $${formatearNumero(valorfinal)}`;
    obtenerprecio.value = ""; // Limpiar el campo de entrada después del cálculo
});

// Funcionalidad para abrir Bold
const boldBtn = document.getElementById("bold-btn");
boldBtn.addEventListener("click", function() {
    // Simplemente intenta abrir la app Bold
    window.location = "boldapp://";
});

