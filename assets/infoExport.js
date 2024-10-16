import image from "../assets/imgImport";

export default [{
        "name": "DRAM",
        "dens": "1 - 16 Gb",
        "lat": "50 - 100 ns",
        "vel": "400 Mbps",
        "cre": "1970",
        "vent": ["Costo bajo por bit de almacenamiento.", " Alta densidad en comparación con SRAM."],
        "desv": ["Debe ser refrescada constantemente (cada ~64 ms), lo que consume energía y afecta el rendimiento.", " Relativamente lenta comparada con SRAM."],
        "image": image.dram
    },
    {
        "name": "SRAM",
        "dens": "1 - 16 MB",
        "lat": "0.5 - 2 ns",
        "vel": "3 Gbps",
        "cre": "1963",
        "vent": ["No necesita refresco, lo que la hace mucho más rápida que DRAM.", " Consume menos energía en estado inactivo."],
        "desv": ["Muy costosa por bit.", " Baja densidad."],
        "image": image.sram
    },
    {
        "name": "SDRAM",
        "dens": "1 - 16 Gb",
        "lat": "20 - 70 ns",
        "vel": "1.3 Gbps",
        "cre": "1993",
        "vent": ["Sincronizada con el reloj del sistema, lo que permite mejor rendimiento y latencia reducida."],
        "desv": ["Más cara que DRAM estándar.", " No tan eficiente como DDR en términos de transferencia de datos."],
        "image": image.sdram
    },
    {
        "name": "ROM",
        "dens": "8 Mb - 1 Gb",
        "lat": "100 - 200 ns",
        "vel": "15 Mbps",
        "cre": "1950",
        "vent": ["No volátil, conserva datos cuando el sistema se apaga.", " Ideal para almacenar firmware o instrucciones permanentes."],
        "desv": ["No se puede modificar o es difícil de modificar", " Menor flexibilidad comparada con RAM."],
        "image": image.rom
    },
    {
        "name": "RDRAM",
        "dens": "64 - 512 Mb",
        "lat": "40 - 80 ns",
        "vel": "3.2 Gbps",
        "cre": "1999",
        "vent": ["Alta velocidad de transferencia de datos en comparación con SDRAM y DDR en su época."],
        "desv": ["Muy cara en comparación con otras soluciones.", " Mayor consumo de energía.", " Rápidamente obsoleta debido al éxito de DDR."],
        "image": image.rdram
    },
    {
        "name": "EEPROM",
        "dens": "1 Kb - 1 Mb",
        "lat": "50 - 150 ns",
        "vel": "100 kbps",
        "cre": "1970",
        "vent": ["No volátil, conserva datos cuando el sistema se apaga.", " Ideal para almacenar firmware o instrucciones permanentes."],
        "desv": ["Las operaciones de escritura son lentas.", " Tiene un límite de ciclos de escritura (10,000 a 1 millón de ciclos)."],
        "image": image.eeprom
    },
    {
        "name": "Cache",
        "dens": "1 - 128 Mb",
        "lat": "1 - 2 ns",
        "vel": "20 Gbps - 2Tbps",
        "cre": "1980",
        "vent": ["Crucial para mejorar el rendimiento de la CPU al almacenar datos a los que se accede con frecuencia.", " Menor latencia en comparación con la RAM principal."],
        "desv": ["Muy costosa por bit.", " Limitada capacidad debido al costo y la complejidad."],
        "image": image.cache
    },
    {
        "name": "DDR",
        "dens": "256 Mb - 16 Gb",
        "lat": "7 - 15 ns",
        "vel": "51.4 Gbps",
        "cre": "98-2020",
        "vent": ["Transferencia de datos en ambos flancos del reloj (doble de ancho de banda que SDRAM).", " Velocidad significativamente mayor que SDRAM."],
        "desv": ["Más costosa que SDRAM", " Requiere un controlador de memoria específico."],
        "image": image.ddr
    },
    {
        "name": "CMOS",
        "dens": "8 - 128 Mb",
        "lat": "100 - 500 ns",
        "vel": "2600 Mbps",
        "cre": "1960",
        "vent": ["Consumo de energía extremadamente bajo.", " Retiene configuración básica del sistema (como la hora y fecha) incluso sin energía principal."],
        "desv": ["Baja capacidad.", " Necesita una batería para mantener los datos."],
        "image": image.cmos
    }];