import React from 'react';

class Center extends React.Component {
    constructor() {
        super();
        this.state = {
            imgUrl: 'corona1.jpeg',
            interval: 2500
        }
    }

    componentDidMount() {
        setTimeout(this.slide1, this.state.interval);
    }

    render() {
        const { imgUrl } = this.state;
        return (
            <div className="center">
                <img src={require(`../../assets/imgs/${imgUrl}`)} alt='imagens empresa' />
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

    slide1 = () => {
        this.setState({
            imgUrl: 'corona2.jpeg',
        },
            () => setTimeout(this.slide2, this.state.interval)
        )
    }

    slide2 = () => {
        this.setState({
            imgUrl: 'corona1.jpeg',
        },
            () => setTimeout(this.slide1, this.state.interval)
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

};

export default Center;