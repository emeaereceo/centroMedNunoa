// console.log('Conectado...');

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

const primerRegistro = (reg) => {};

const ultimoRegistro = (reg) => {};

const opciones = document.querySelector('#seleccion-especialidad');
for (const especialidad in registros) {
	// console.log(especialidad);
	opciones.innerHTML += `<option>${especialidad}</option>`;
}

opciones.addEventListener('change', (e) => {
	const seleccion = e.target.value;
	// const firstReg = registros[seleccion].shift();
	// const lastReg = registros[seleccion].pop();
	const firstReg = registros[seleccion][0];
	const lastReg = registros[seleccion][registros[seleccion].length - 1];
	const allReg = registros[seleccion];
	console.log(firstReg, lastReg);
	console.log('************************************');
	console.log(allReg);
});
