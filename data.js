// Catálogo base. Todo lo marcado "verificar: true" falta confirmarlo con ficha del fabricante.
// Estados de compatibilidad: "si" | "no" | "?" (sin verificar)
window.CATALOGO = {
  lineas: [
    { id: "scx30", nombre: "Axial SCX30", escala: "1/30", prioridad: "principal" },
    { id: "fcx24", nombre: "FMS FCX24", escala: "1/24", prioridad: "principal" },
    { id: "fcx18", nombre: "FMS FCX18", escala: "1/18", prioridad: "secundaria" },
    { id: "scx24", nombre: "Axial SCX24", escala: "1/24", prioridad: "puntual" }
  ],
  modelos: [
    // SCX30 (fuentes: Horizon Hobby, RC Car Action, AMain). Jeep: SKU exacto por confirmar.
    { id: "scx30-cj7-verde", linea: "scx30", nombre: "Jeep CJ-7 verde", rtr: true, verificar: true },
    { id: "scx30-cj7-amarillo", linea: "scx30", nombre: "Jeep CJ-7 amarillo (edición limitada, solo Horizon)", rtr: true, verificar: true },
    { id: "scx30-cj7-rojo", linea: "scx30", nombre: "Jeep CJ-7 rojo (variante crawler)", rtr: true, verificar: true },
    { id: "scx30-tacoma-verde", linea: "scx30", nombre: "Toyota Tacoma TRD Pro verde", sku: "AXI-3289T1", rtr: true, verificar: false },
    { id: "scx30-tacoma-tan", linea: "scx30", nombre: "Toyota Tacoma TRD Pro Overland (Dark Earth)", sku: "AXI-3289T2", rtr: true, verificar: false },
    { id: "scx30-k10", linea: "scx30", nombre: "Chevy K10", rtr: true, verificar: true },
    { id: "scx30-bronco", linea: "scx30", nombre: "Ford Bronco (anterior)", rtr: true, verificar: true },

    // FMS 1/24 (fuentes: fmshobby.com y retailers). Variantes exactas por confirmar donde se indica.
    { id: "fcx24m-tacoma-gris", linea: "fcx24", nombre: "FCX24M Toyota Tacoma gris", rtr: true, verificar: false },
    { id: "fcx24m-tacoma-rojo", linea: "fcx24", nombre: "FCX24M Toyota Tacoma rojo", rtr: true, verificar: false },
    { id: "fcx24m-tacoma-azul", linea: "fcx24", nombre: "FCX24M Toyota Tacoma azul", rtr: true, verificar: false },
    { id: "fcx24m-camel", linea: "fcx24", nombre: "FCX24M Land Rover Camel Trophy", rtr: true, verificar: true, nota: "Fuentes difieren: Defender 90, Defender 110, Range Rover o Discovery" },
    { id: "fcx24m-k5", linea: "fcx24", nombre: "Chevrolet K5", rtr: true, verificar: true, nota: "No apareció en las búsquedas; confirmar que existe en FCX24M" },
    { id: "fcx24s-powerwagon", linea: "fcx24", nombre: "Power Wagon (FCX24S, opción económica)", rtr: true, verificar: false, nota: "Colores listados: azul, rojo, amarillo" },

    // FMS 1/18
    { id: "fcx18ii-f100", linea: "fcx18", nombre: "FCX18 II Ford F-100", rtr: true, verificar: false, nota: "Versión escobillas y brushless" },
    { id: "fcx18ii-bronco", linea: "fcx18", nombre: "FCX18 II Ford Bronco", rtr: true, verificar: true, nota: "Adelanto de septiembre 2026; confirmar disponibilidad" },
    { id: "fcx18-k10", linea: "fcx18", nombre: "FCX18 Chevrolet K10 V2", rtr: true, verificar: false },

    { id: "scx24-puntual", linea: "scx24", nombre: "SCX24 (modelos a definir)", rtr: true, verificar: true }
  ],
  categoriasRepuestos: [
    "Engranajes", "Ejes", "Diferenciales", "Servos", "Amortiguadores",
    "Neumáticos y llantas", "Receptores y electrónica", "Luces LED", "Carrocerías", "Baterías y cargadores"
  ],
  // Matriz categoría x línea (Injora y genéricos). Se llena a medida que se prueba cada pieza.
  compatibilidad: {}
};
