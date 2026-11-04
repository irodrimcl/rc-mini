// Catálogo base. Todo lo marcado "verificar: true" falta confirmarlo con ficha del fabricante.
// Estados de compatibilidad: "si" | "no" | "?" (sin verificar)
window.CATALOGO = {
  lineas: [
    { id: "scx30", nombre: "Axial SCX30", escala: "1/30", prioridad: "principal" },
    { id: "fcx24", nombre: "FMS FCX24", escala: "1/24", prioridad: "principal" },
    { id: "fcx18", nombre: "FMS FCX18", escala: "1/18", prioridad: "secundaria" },
    { id: "venture18", nombre: "HPI Venture18", escala: "1/18", prioridad: "principal" },
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
    { id: "fcx24-k5-brushed", linea: "fcx24", nombre: "FCX24 Chevrolet K5 Blazer brushed", rtr: true, verificar: false, nota: "Motion RC lo marca descontinuado: confirmar stock con el proveedor. Colores vistos: negro, café, azul, rojo, naranja" },
    { id: "fcx24-k5-brushless", linea: "fcx24", nombre: "FCX24 Chevrolet K5 Blazer Pro brushless", rtr: true, verificar: false, nota: "Motor 1212 3200KV según OZRC. Descontinuado en algunos retailers" },
    { id: "fcx24-powerwagon", linea: "fcx24", nombre: "FCX24 Power Wagon (opción económica)", rtr: true, verificar: true, nota: "FMS lo lista como FCX24S; colores azul, rojo, amarillo. Confirmar versión" },

    // FMS 1/18
    { id: "fcx18ii-f100-brushed", linea: "fcx18", nombre: "FCX18 II Ford F-100 brushed", rtr: true, verificar: false },
    { id: "fcx18ii-f100-brushless", linea: "fcx18", nombre: "FCX18 II Ford F-100 brushless", rtr: true, verificar: false },
    { id: "fcx18ii-bronco-brushed", linea: "fcx18", nombre: "FCX18 II Ford Bronco brushed", rtr: true, verificar: true, nota: "Adelanto de septiembre 2026; confirmar disponibilidad" },
    { id: "fcx18ii-bronco-brushless", linea: "fcx18", nombre: "FCX18 II Ford Bronco brushless", rtr: true, verificar: true, nota: "Adelanto de septiembre 2026; confirmar disponibilidad" },
    { id: "fcx18-k10", linea: "fcx18", nombre: "FCX18 Chevrolet K10 V2", rtr: true, verificar: false },

    // HPI Venture18, 1985 Toyota Hilux SR5
    { id: "venture18-brushed-rojo", linea: "venture18", nombre: "Venture18 Hilux SR5 brushed rojo", sku: "160801", rtr: true, verificar: false },
    { id: "venture18-brushed-negro", linea: "venture18", nombre: "Venture18 Hilux SR5 brushed negro", sku: "160800", rtr: true, verificar: false },
    { id: "venture18-brushless-rojo", linea: "venture18", nombre: "Venture18 Flux Hilux SR5 brushless rojo", sku: "160803", rtr: true, verificar: false, nota: "Agotado en varios retailers" },
    { id: "venture18-brushless-negro", linea: "venture18", nombre: "Venture18 Flux Hilux SR5 brushless negro", rtr: true, verificar: true, nota: "SKU por confirmar" },

    { id: "scx24-puntual", linea: "scx24", nombre: "SCX24 (modelos a definir)", rtr: true, verificar: true }
  ],
  categoriasRepuestos: [
    "Engranajes", "Ejes", "Diferenciales", "Servos", "Amortiguadores",
    "Neumáticos y llantas", "Receptores y electrónica", "Luces LED", "Carrocerías", "Baterías y cargadores"
  ],
  // Matriz categoría x línea (Injora y genéricos). Se llena a medida que se prueba cada pieza.
  compatibilidad: {}
};
