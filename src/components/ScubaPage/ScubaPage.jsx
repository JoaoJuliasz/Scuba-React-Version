import React from 'react';

import img from '../../assets/imgs/site 3.jpg';
import BackArrow from '../BackArrow/BackArrow'

const ScubaPage = () => (
    <React.Fragment>
        <BackArrow />
    <div className="content">
        <img src={img} alt="" />
        <p className="price">R$ 450</p>
        <br />
        <p className="title">DISCOVER SCUBA</p>
        <br />
        <p>
            Após receber instruções na embarcação a caminho do ponto, mergulho na cia. de um instrutor a uma <br />
            profundidade máxima de 12 metros com permanência aproximada de 40 minutos.<br />
            Não é preciso ter experiência.<br />
            Idade mínima permitida: 10 anos.<br />
            Nossas saídas de mergulho ocorrem quando há um mínimo de 6 pessoas.<br />
            Embarque 08 H e 30 Min. com retorno previsto para às 14 H.<br />
              É preciso fazer reserva antecipada.<br />
            <br />
            Inclui: saída de barco com lanche a bordo, aluguel do equipamento, foto e instrutor.<br />
            <br />
            Cancelamentos:<br />
            <br />
            Perda de 50% do valor total para cancelamentos 5 dias antes da saída.<br />
            <br />
            Perda de 100% do valor total para o não comparecimento.<br />
            <br />
            Reembolsos:<br />

            Ocorre quando a saída for cancelada por motivos alheios a nossa vontade, como problemas mecânicos ou<br />
            climáticos.<br />

            * Não haverá reembolso pelo não uso de equipamentos disponibilizados durante a saída.</p>
    </div>
    </React.Fragment>
);

export default ScubaPage;