// console.log('Conectado...');

// DECLARO LOS OBJETOS
const registros = {
	dental: [
		{
			rut: '11123425-6',
			nombre: 'MARCELA RETAMAL',
			prevision: 'ISAPRE',
			especialista: 'ANDREA ZUÑIGA',
			hora: '8:30:00',
		},
		{
			rut: '9878789-2',
			nombre: 'ANGEL MUÑOZ',
			prevision: 'ISAPRE',
			especialista: 'MARIA PIA ZAÑARTU',
			hora: '11:00:00',
		},
		{
			rut: '7998789-5',
			nombre: 'MARIO KAST',
			prevision: 'FONASA',
			especialista: 'SCARLETT WITTING',
			hora: '11:30:00',
		},
		{
			rut: '18887662-K',
			nombre: 'KARIN FERNANDEZ',
			prevision: 'FONASA',
			especialista: 'FRANCISCO VON TEUBER',
			hora: '13:00:00',
		},
		{
			rut: '17665461-4',
			nombre: 'HUGO SANCHEZ',
			prevision: 'FONASA',
			especialista: 'EDUARDO VIÑUELA',
			hora: '13:30:00',
		},
		{
			rut: '14441281-0',
			nombre: 'ANA SEPULVEDA',
			prevision: 'ISAPRE',
			especialista: 'RAQUEL VILLASECA',
			hora: '14:00:00',
		},
	],
	radiologia: [
		{
			rut: '9878782-1',
			nombre: 'FRANCISCA ROJAS',
			prevision: 'FONASA',
			especialista: 'IGNACIO SCHULZ',
			hora: '11:00:00',
		},
		{
			rut: '15345241-3',
			nombre: 'PAMELA ESTRADA',
			prevision: 'ISAPRE',
			especialista: 'FEDERICO SUBERCASEAUX',
			hora: '11:30:00',
		},
		{
			rut: '16445345-9',
			nombre: 'ARMANDO LUNA',
			prevision: 'ISAPRE',
			especialista: 'FERNANDO WURTHZ',
			hora: '15:00:00',
		},
		{
			rut: '17666419-0',
			nombre: 'MANUEL GODOY',
			prevision: 'FONASA',
			especialista: 'ANA MARIA GODOY',
			hora: '15:30:00',
		},
		{
			rut: '14989389-K',
			nombre: 'RAMON ULLOA',
			prevision: 'FONASA',
			especialista: 'PATRICIA SUAZO',
			hora: '16:00:00',
		},
	],
	traumatologia: [
		{
			rut: '15554774-5',
			nombre: 'PAULA SANCHEZ',
			prevision: 'FONASA',
			especialista: 'MARIA PAZ ALTUZARRA',
			hora: '08:00:00',
		},
		{
			rut: '15444147-9',
			nombre: 'ANGÉLICA NAVAS',
			prevision: 'ISAPRE',
			especialista: 'RAUL ARAYA',
			hora: '10:00:00',
		},
		{
			rut: '17879423-9',
			nombre: 'ANA KLAPP',
			prevision: 'ISAPRE',
			especialista: 'MARIA ARRIAGADA',
			hora: '10:30:00',
		},
		{
			rut: '1547423-6',
			nombre: 'FELIPE MARDONES',
			prevision: 'ISAPRE',
			especialista: 'ALEJANDRO BADILLA',
			hora: '11:00:00',
		},
		{
			rut: '16554741-K',
			nombre: 'DIEGO MARRE',
			prevision: 'FONASA',
			especialista: 'CECILIA BUDNIK',
			hora: '11:30:00',
		},
		{
			rut: '9747535-8',
			nombre: 'CECILIA MENDEZ',
			prevision: 'ISAPRE',
			especialista: 'ARTURO CAVAGNARO',
			hora: '12:00:00',
		},
		{
			rut: '11254785-5',
			nombre: 'MARCIAL SUAZO',
			prevision: 'ISAPRE',
			especialista: 'ANDRES KANACRI',
			hora: '12:30:00',
		},
	],
};

// FUNCION PARA EL PRIMER REGISTRO
const firstReg = (reg) => {
	return registros[reg][0];
};
// FUNCION PARA EL ULTIMO REGISTRO
const lastReg = (reg) => {
	return registros[reg][registros[reg].length - 1];
};
// IMPRIMO POR PANTALLA LOS DATOS DEL PRIMER Y ULTIMO REGISTRO
const ordenAtencion = (first, last) => {
	const oA = document.querySelector('#orden-atencion');
	oA.innerHTML = `<p class="fs-5 fw-bold">Primera Atencion : ${first.nombre} - ${first.prevision} | Ultima Atencion : ${last.nombre} - ${last.prevision} </p>`;
};
// GENERO LA TABLA PARA LOS REGISTROS
const tabla = (x) => {
	const tabUbicacion = document.querySelector('#tabla-resultado');
	const tab = document.createElement('table');
	const tabHead = document.createElement('thead');
	const tabBody = document.createElement('tbody');

	// UBICACION EN EL HTML
	tabUbicacion.appendChild(tab);
	tab.id = 'tabla-detalle';
	tab.className = 'table table-hover';
	tab.appendChild(tabHead);

	// CONTENIDO DE LA CABECERA
	tabHead.innerHTML = `
	<tr>
		<th scope="col">#</th>
		<th scope="col">Rut</th>
		<th scope="col">Paciente</th>
		<th scope="col">Prevision</th>
		<th scope="col">Especialista</th>
		<th scope="col">Hora</th>
	</tr>`;

	// CONSTRUYO EL DETALLE
	let contador = 0;
	registros[x].forEach((r) => {
		contador++;
		tabBody.innerHTML += `
		<tr>
		<th scope="row">${contador}</th>
		<td>${r.rut}</td>
		<td>${r.nombre}</td>
		<td>${r.prevision}</td>
		<td>${r.especialista}</td>
		<td>${r.hora}</td>
		</tr>`;
	});
	tab.appendChild(tabBody);
};

// ESPECIALIDADES DISPONIBLES SEGUN MI OBJETO Y LAS IMPRIMO EN UN COMBOBOX
const opciones = document.querySelector('#seleccion-especialidad');
for (const especialidad in registros) {
	// console.log(especialidad);
	opciones.innerHTML += `<option class="text-capitalize">${especialidad}</option>`;
}

// POR CADA EVENTO DE "CHANGE" EN EL COMBOBOX ACTIVO LA CREACION DE DATOS SEGUN LA OPCION SELECCIONADA
opciones.addEventListener('change', (e) => {
	const seleccion = e.target.value;
	const allReg = registros[seleccion];
	console.log(allReg);

	// PREVENGO LA SELECCION POR DEFECTO PARA QUE SOLO SE ACTIVE CON LAS ESPECIALIDADES VALIDAS
	if (seleccion === 'Selecciona especialidad') {
		return alert('Selecciona la especialidad que desea consultar');
	}

	// INCLUI ESTA CONDICIONAL YA QUE NO LIMPIABA / ACTUALIZABA MI TABLA AL CAMBIAR DE SELECCION
	// ANTES DE EJECUTAR LA CREACION DE TABLA, ELIMINO SI EXISTE ALGUNA ANTERIOR
	if (document.querySelector('#tabla-detalle')) {
		document.querySelector('#tabla-detalle').remove();
	}

	// APLICO LAS FUNCIONES PARA IMPRIMIR EN PANTALLA
	ordenAtencion(firstReg(seleccion), lastReg(seleccion));
	tabla(seleccion);
});
