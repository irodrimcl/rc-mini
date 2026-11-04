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

    { id: "fcx24m", linea: "fcx24", nombre: "FCX24M", rtr: true, verificar: true },
    { id: "fcx24-tacoma-c1", linea: "fcx24", nombre: "Tacoma — color 1", rtr: true, verificar: true },
    { id: "fcx24-tacoma-c2", linea: "fcx24", nombre: "Tacoma — color 2", rtr: true, verificar: true },
    { id: "fcx24-tacoma-c3", linea: "fcx24", nombre: "Tacoma — color 3", rtr: true, verificar: true },
    { id: "fcx24-defender", linea: "fcx24", nombre: "Land Rover Defender", rtr: true, verificar: true },
    { id: "fcx24-camel", linea: "fcx24", nombre: "Land Rover Defender Camel Trophy", rtr: true, verificar: true },
    { id: "fcx24-k5", linea: "fcx24", nombre: "Chevrolet K5", rtr: true, verificar: true },
    { id: "fcx24-powerwagon", linea: "fcx24", nombre: "Power Wagon (opción económica)", rtr: true, verificar: true },

    { id: "fcx18-bronco", linea: "fcx18", nombre: "Ford Bronco", rtr: true, verificar: true },
    { id: "fcx18-f100", linea: "fcx18", nombre: "Ford F100", rtr: true, verificar: true },
    { id: "fcx18-chevy", linea: "fcx18", nombre: "Chevy", rtr: true, verificar: true },

    { id: "scx24-puntual", linea: "scx24", nombre: "SCX24 (modelos a definir)", rtr: true, verificar: true }
  ],
  categoriasRepuestos: [
    "Engranajes", "Ejes", "Diferenciales", "Servos", "Amortiguadores",
    "Neumáticos y llantas", "Receptores y electrónica", "Luces LED", "Carrocerías", "Baterías y cargadores"
  ],
  // Matriz categoría x línea (Injora y genéricos). Se llena a medida que se prueba cada pieza.
  compatibilidad: {}
};
