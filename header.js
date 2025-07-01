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
    const userAgent = navigator.userAgent;
    
    if (/android/i.test(userAgent)) {
        // Para Android - probamos diferentes esquemas
        const schemes = [
            'boldapp://',
            'bold-mobile://',
            'co.com.bold.mobile://',
            'intent://launch/#Intent;scheme=boldapp;package=co.com.bold.mobile;end',
            'intent://launch/#Intent;scheme=bold;package=co.com.bold.mobile;end'
        ];
        
        // Probar cada esquema
        schemes.forEach((scheme, index) => {
            setTimeout(() => {
                window.location = scheme;
            }, index * 500);
        });
        
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        // Para iOS - probamos diferentes esquemas
        const iosSchemes = [
            'boldapp://',
            'bold-mobile://',
            'bold://app'
        ];
        
        // Probar cada esquema
        iosSchemes.forEach((scheme, index) => {
            setTimeout(() => {
                window.location = scheme;
            }, index * 500);
        });
    }
});

