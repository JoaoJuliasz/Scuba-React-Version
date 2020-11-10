import React from 'react';
import { connect } from 'react-redux'
import {toogleShowDescription} from '../../redux/courses/courses.actions'

import img from '../../assets/imgs/aula piscina casa.jpg';
import BackArrow from '../../components/BackArrow/BackArrow'

const CoursesPage = ({ toogleShowDescription }) => {

    const handleClick = elem => {
        const hideElem = document.getElementById(`${elem}`);
        toogleShowDescription()
        hideElem.style.display = hideElem.style.display == 'none' ? 'block' : 'none'
    }
    return (
        <React.Fragment>
            <BackArrow />
            <div className="inside">
                <img src={img} alt="aula piscina" />
                <p className="title"> Cursos de Mergulho</p>

                <p className="warning">* Clique no título do curso para abrir a descrição</p>

                <p onClick={() => handleClick('hide1')} className="subtitle"><u> Curso Básico Open Water</u></p>
                <div id="hide1" className="hide" style={{ display: 'none' }}>
                    <p>Duração: 4 dias seguidos ou não. <br />

                        Programação: Os 2 primeiros dias com aulas teóricas (total 8 hs.) e práticas na piscina (total 4 hs.).
                        Os 2 <br />
                        demais dias com saída de barco, no período da manhã, para realizar 4 mergulhos obrigatórios. <br />
                        <br />
                        Valor: R$1.730 em 3x sem juros + R$220 da credencial. <br />
                        <br />
                        Valor: R$1.320 em 3x sem juros + R$220 da credencial * para mergulhos no píer , sem saída de barco. <br />
                        <br />
                        Valor: R$1.020 em 3x sem juros + R$220 da credencial SOMENTE CHECK-OUT <br />
                        <br />
                        Inclui: material didático, aluguel de todo equipamento durante o curso, 2 saídas de barco com lanche a
                        bordo <br />
                        e instrutor. <br />
                        <br />
                        Pré-requisitos: Mínimo 10 anos de idade para Junior Open Water er e 15 anos de idade para Open Water
                        <br />
                        Diver. Boa saúde, condições físicas razoáveis e sentir-se à vontade na água. <br />
                    </p><br />
                </div>
                <p className="subtitle" onClick={() => handleClick('hide2')}><u>Scuba Review</u></p>
                <div id="hide2" style={{ display: 'none' }}>
                    <p> Duração: 2 horas. <br />
                        <br />
                        Programação: revisão da parte prática na piscina para relembrar o que aprendeu no curso básico.<br />
                        <br />
                        Valor: R$200.<br />
                        <br />
                        Inclui: aluguel de todo equipamento e instrutor.</p><br />
                </div>

                <p className="subtitle" onClick={() => handleClick('hide3')}><u> Curso Avançado Advanced Open Water</u></p>
                <div id="hide3" style={{ display: 'none' }}>
                    <p> Duração: 2 dias e meio.<br />
                        <br />
                        Programação: meio período de teoría + 2 saídas de barco para realizar 5 mergulhos obrigatórios:
                        profundo,<br />
                        noturno, busca e recuperação, navegação com bússola e multinível.<br />
                        <br />
                        Valor: R$1.730 em 3x sem juros + R$220 da credencial.<br />
                        <br />
                        Valor: R$1.020 em 3x sem juros + R$220 da credencial SOMENTE CHECK-OUT<br />
                        <br />
                        Inclui: material didático, aluguel do equipamento scuba, 2 saídas de barco com lanche a bordo.<br />
                        <br />
                        Não inclui: aluguel de lanterna e bússola.<br />
                        <br />
                        Pré requisitos: idade mínima 10 anos e ter o curso básico.<br />
                        <br />
                        * Geralmente o mergulho noturno é feito no píer.</p><br />
                </div>

                <p className="subtitle" onClick={() => handleClick('hide4')}><u>Curso de Primeiros - Socorros Emergency First Response</u></p>
                <div id="hide4" style={{ display: 'none' }}>
                    <p> Duração: 1 dia. <br />
                        <br />
                        Programação: aulas teóricas e práticas (incluindo DVD e explicação do instrutor). <br />
                        <br />
                        8 Habilidades de Assistência Primária: Avaliação da situação, utilização de barreiras de proteção,
                        avaliação <br />
                        primária, ventilação de socorro, um socorrista - ressuscitação cardiopulmonar (RCP) em adulto, controle
                        de <br />
                        hemorragia grave, controle de choque e controle de lesão da medula espinhal. <br />
                        <br />
                        4 Habilidades de Assistência Secundária: Avaliação de lesões, avaliações de enfermidades, aplicação de
                        <br />
                        bandagens e aplicação de talas para deslocamentos e fraturas. <br />
                        <br />
                        Valor: R$450 em 2x sem juros + R$220 da credencial. <br />
                        <br />
                        Inclui: material didático. <br />
                        <br />
                        Pré-requisitos: <br />
                        <br />
                        Não é necessário ter certificação de mergulho. <br />
                        <br />
                        Não há limite de idade mínima.</p> <br />
                </div>

                <p className="subtitle" onClick={() => handleClick('hide5')}><u>Curso de Resgate Rescue Diver</u></p>
                <div id="hide5" style={{ display: 'none' }}>
                    <p> Duração: 3 dias seguidos ou não.<br />
                        <br />
                        Programação:<br />
                        <br />
                        O curso Rescue Diver prepara você para lidar com emergências de mergulho, pequenas e grandes, usando
                        uma<br />
                        variedade de técnicas. Através do desenvolvimento de conhecimentos e exercícios de salvamento, você
                        aprende<br />
                        o que procurar e como responder. Durante situações de resgate, que colocou em prática o seu conhecimento
                        e<br />
                        habilidades. Os tópicos incluem:<br />
                        <br />
                        O auto-salvamento.<br />
                        <br />
                        Reconhecer e gerir o stress em outros mergulhadores.<br />
                        <br />
                        Gestão e equipamento de emergência.<br />
                        <br />
                        Resgatando mergulhadores em pânico.<br />
                        <br />
                        Resgatando mergulhadores que não respondem.<br />
                        <br />
                        No primeiro dia aulas teóricas (incluindo DVD, multimídia e explicação do instrutor). Nos dois demais
                        dias<br />
                        saída de barco para realizar o check-out.<br />
                        <br />
                        Valor: R$1.390 em 3x sem juros + R$220 da credencial.<br />
                        <br />
                        Inclui: material didático, aluguel do equipamento scuba, 2 saídas de barco com lanche a bordo.<br />
                        <br />
                        Pré-requisitos:<br />
                        <br />
                        Limite mínimo de 12 anos de idade.<br />
                        <br />
                        Ter o curso Avançado ou equivalente de outra certificadora.<br />
                        <br />
                        Ter o curso EFR atualizado nos últimos 2 anos.<br />
                        <br />
                        Comprovar experiência em Mergulho Profundo e Navegação Subaquática.
                    </p>
                </div>


                <p className="subtitle" onClick={() => handleClick('hide6')}><u>Curso Dive Master</u></p>
                <div id="hide6" style={{ display: 'none' }}>
                    <p> Duração: 8 dias, seguidos ou não + estágio com acompanhamento de cursos e saídas.<br />
                        <br />
                        Esse curso permitirá ao candidato que obtiver êxito a:<br />
                        - trabalhar em centros de mergulho locais, em embarcações para mergulho com hospedagem, iates e resorts
                        em<br />
                        regiões exóticas<br />
                        - auxiliar os instrutores com os alunos<br />
                        - liderar mergulhadores autônomos certificados em passeios de mergulho<br />
                        - ensinar e certificar alunos do curso de mergulho livre Skin Diver<br />
                        - ensinar os programas Discover Snorkeling (Descubra o Nado com Snorkel)<br />
                        - conduzir programas de recapitulação das técnicas de mergulho autônomo para mergulhadores
                        certificados<br />
                        - liderar mergulhadores certificados em experiências Descubra o Mergulho Local (Discover Local
                        Diving)<br />
                        - ensinar os programas Emergency First Response após concluir com êxito um curso para instrutor da
                        Emergency<br />
                        First Response<br />
                        <br />
                        Programação:<br />
                        parte teórica + 6 saídas para auxiliar o instrutor + aplicação prática e habilidades<br />
                        <br />
                        Idade mínima permitida: 18 anos<br />
                        <br />
                        Pré-requisitos:<br />
                        <br />
                        - ter certificação Advanced Open Water Diver<br />
                        - ter certificação Rescue Diver<br />
                        - atestado médico<br />
                        - 40 mergulhos logados<br />
                        <br />
                        Valor: R$3.600 + aplicação US$150
                        (em
                        dólar)<br /></p>
                </div>
                <p className="subtitle" onClick={() => handleClick('hide7')}><u> Cancelamentos</u></p>

                <p id="hide7" style={{ display: 'none' }}> Perda de 50% do valor total para cancelamentos 5 dias antes da saída.<br />
                    <br />
                    Perda de 100% do valor total para o não comparecimento.</p>

                <p className="subtitle" onClick={() => handleClick('hide8')}><u>Reembolsos</u></p>

                <p id="hide8" style={{ display: 'none' }}> Ocorre quando a saída for cancelada por motivos alheios a nossa vontade,
                como problemas mecânicos
                    ou<br />
                    climáticos.<br />
                    <br />
                    * Não haverá reembolso pelo não uso de equipamentos disponibilizados durante a saída.</p><br />
            </div>
        </React.Fragment>
    )
}

const mapDisptachToProps = dispatch => {
    return {
        toogleShowDescription: () => dispatch(toogleShowDescription())
    }
}


export default connect(null, mapDisptachToProps)(CoursesPage);