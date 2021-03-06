import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { changeImgPath } from '../../redux/center/center.actions'
const Center = ({ centerImgUrl, changeImgPath }) => {
    const interval = 2500
    
    useEffect(() => {
        setTimeout(slide2, interval)
    },[])

    const slide1 = () => {
        changeImgPath('slide1.jpg')
        setTimeout(slide2, interval)
    }

    const slide2 = () => {
        changeImgPath('slide2.jpg')
        setTimeout(slide3, interval)
    }
    const slide3 = () => {
        changeImgPath('slide3.jpg')
        setTimeout(slide4, interval)
    }

    const slide4 = () => {
        changeImgPath('slide4.jpg')
        setTimeout(slide1, interval)
    }
    
    return (
        <div className="center">
            <img src={require(`../../assets/imgs/${centerImgUrl}`)} alt='imagens empresa' />
            <div className="text">
                <p>
                    Fundada em 2002, A Scubatuba Operadora de Mergulho é um centro de <br /> treinamento 5 Star SDI/TDI
                        instructor,
                        formando alunos do nível básico ao <br />instrutor, além dos cursos técnicos . A operadora conta com
                        uma<br />
                        embarcação
                        para até 15 mergulhadores e tem como instrutor
                        responsável <br />Fernando Morais, nascido e criado em Fernando de Noronha, com mais de<br /> 8.000
                        mergulhos.
                    </p>
            </div>
        </div>
    )
}

// slide1 = () => {
//     this.setState({
//         imgUrl: 'slide1',
//     },
//     () => setTimeout(this.slide2, this.state.interval)
//     )}
// slide2 = () => {
//     this.setState({
//         imgUrl: 'slide2',
//     },
//     () => setTimeout(this.slide3, this.state.interval)
//     )
// }
// slide3 = () => {
//     this.setState({
//         imgUrl: 'slide2',
//     },
//     () => setTimeout(this.slide4, this.state.interval)
//     )
// }
// slide4 = () => {
//     this.setState({
//         imgUrl: 'slide4',
//     },
//     () => setTimeout(this.slide1, this.state.interval)
//     )
// }

// };

const mapStateToProps = state => {
    return {
        centerImgUrl: state.center.centerImgUrl
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeImgPath: (img) => dispatch(changeImgPath(img))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Center);