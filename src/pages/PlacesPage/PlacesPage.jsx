import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {changeImgPath, toogleShowDescription} from '../../redux/places/places.actions'

import BackArrow from '../../components/BackArrow/BackArrow'


const PlacesPage = ({ imgUrl, changeImgPath, toogleShowDescription }) => {

    const handleClick = elem => {
        const hideElem = document.getElementById(`${elem}`);
        toogleShowDescription()
        hideElem.style.display = hideElem.style.display == 'none' ? 'block' : 'none'
    }

    const intervalo = 3000

    useEffect(() => {
        setTimeout(slide2, intervalo);
    },[])
    
    const slide1 = () => {
        changeImgPath('anchieta 2.jpg')
        setTimeout(slide2, intervalo)
    }
    const slide2 = () => {
        changeImgPath('praia-cedro.jpg')
        setTimeout(slide3, intervalo)
    }
    const slide3 = () => {
        changeImgPath('barco 4.jpg')
        setTimeout(slide4, intervalo)
    }
    const slide4 = () => {
        changeImgPath('anchieta.jpg')
        setTimeout(slide1, intervalo)
    }
    return (
        <React.Fragment>
            <BackArrow />
            <div className="container" >
                <div className="places">
                    <img src={require(`../../assets/imgs/${imgUrl}`)} alt="pontos de mergulho" id="banner" />
                    {/* <img src={require(`../../assets/imgs/praia-cedro.jpg`)} alt="pontos de mergulho" id="banner" /> */}
                    <p className="title">PONTOS DE MERGULHO / VALORES</p><br />
                    <p className="only">* Somente para credenciados</p>
                    <p className="warning">* Clique no título do curso para abrir a descrição</p>

                    <p className="subtitle" onClick={() => handleClick('hide1')}><u>1. Cedro e Ponta Grossa</u></p>

                    <div id="hide1" style={{ display: 'none' }}>
                        <p> Tempo de navegação: 15 minutos<br />

                    Profundidade: de 4 a 12 metros</p><br />

                        <p className="price">Valor: R$260
                </p><br />
                    </div>


                    <p className="subtitle" onClick={() => handleClick('hide2')}><u> 2. Ilha Anchieta</u></p>
                    <div id="hide2" style={{ display: 'none' }}>
                        <p> Tempo de navegação: 30 minutos<br />

                    Profundidade: de 2 a 18 </p><br />

                        <p className="price">Valor: R$300
                </p><br />
                    </div>


                    <p className="subtitle" onClick={() => handleClick('hide3')}><u>3. Ilha das Couves e Rapada</u></p>
                    <div id="hide3" style={{ display: 'none' }}>
                        <p>Tempo de navegação: 40 minutos <br />

                    Profundidade: de 3 a 23 metros</p><br />

                        <p className="price">Valor: R$320
                </p><br />
                    </div>



                    <p className="subtitle" onClick={() => handleClick('hide4')}><u> 4. Ilha Vitória</u></p>

                    <div id="hide4" style={{ display: 'none' }}>
                        <p> Tempo de navegação: 1H e 25 Min. <br />

                    Profundidade: de 5 a 40 metros</p> <br />

                        <p className="price">Valor: R$380
                </p><br />
                    </div>
                    <p className="subtitle" onClick={() => handleClick('hide5')}><u>Cancelamentos</u></p>
                    <div id="hide5" style={{ display: 'none' }}>
                        Perda de 50% do valor total para cancelamentos 5 dias antes da saída.<br />
                        <br />
                Perda de 100% do valor total para o cancelamento 24 hs antes da saída ou o não comparecimento.
            </div>
                    <p className="subtitle" onClick={() => handleClick('hide6')}><u> Reembolsos</u></p>
                    <br />
                    <div id="hide6" style={{ display: 'none' }}>
                        Ocorre quando a saída for cancelada por motivos alheios a nossa vontade, como problemas mecânicos ou<br />
                climáticos.<br />
                        <br />
                * Não haverá reembolso pelo não uso de equipamentos disponibilizados durante a saída.
                <p></p><br />
                    </div>

                    <p style={{ paddingTop: 15 + 'px' }}> * inclui: 2 cilindros, lastro e lanche a bordo <br />
                        <br />
                * cada equipamento (colete, roupa, regulador) = R$45<br />
                        <br />
                * equipamento básico (máscara + snorkel ou nadadeira) = R$25 cada<br />
                        <br />
                * adicional noturno R$70<br />
                        <br />
                * valores válidos somente para credenciados<br />
                        <br />
                * preços por pessoa, sujeitos a reajuste sem aviso prévio<br />
                        <br />
                * nossas saídas ocorrem quando há um mínimo de 6 pessoas, 8 para ilha Vitória<br />
                        <br />

                    </p></div>

            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        imgUrl: state.places.imgUrl,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeImgPath: (img) => dispatch(changeImgPath(img)),
        toogleShowDescription: () => dispatch(toogleShowDescription())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage)