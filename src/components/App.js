import React from 'react';

import Contador from './Contador';
import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Estádio Maracanã/RJ",
		data: "01/07/2016",
		horario: "16h"
	},
	casa: {
		nome: 'Flamengo'
	},
	visitante: {
		nome: 'Corinthians'
	}
}

export default class App extends React.Component {
	render() {
		return (
			<div>
				<PlacarContainer partida={dados.partida}
								 casa={dados.casa}
								 visitante={dados.visitante} />
			</div>
		);
	}
}
