import React from 'react';

import Contador from './Contador';
import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Maracanã/RJ",
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
				<PlacarContainer {...dados} tempo={92} />;
			</div>
		);
	}
}
