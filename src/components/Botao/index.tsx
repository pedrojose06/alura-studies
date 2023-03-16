import { type } from 'os'
import React from 'react'
import style from './Botao.module.scss'

interface IBotao {
    type?: "button" | "submit" | undefined,
    children: React.ReactNode,
    onClick?: () => void
}

class Botao extends React.Component<IBotao>{
    render() {
        const {type ="button", onClick} = this.props;
        return(
            <button onClick={onClick} type={this.props.type} className={style.botao} >
                {this.props.children}
            </button>
        )
    }
}

export default Botao;
