import { type } from 'os'
import React from 'react'
import style from './Botao.module.scss'

interface IBotao {
    type?: "button" | "submit" | undefined,
    children?: React.ReactNode,
    onClick?: () => void
}

function Botao({onClick, type, children}: IBotao) {
    return(
        <button onClick={onClick} type={type} className={style.botao} >
            {children}
        </button>
    )
}
///////botao em class component para perceber a diferença entre os dois após a refatoração
// class Botao1 extends React.Component<IBotao>{
//     render() {
//         const {type ="button", onClick} = this.props;
//         return(
//             <button onClick={onClick} type={this.props.type} className={style.botao} >
//                 {this.props.children}
//             </button>
//         )
//     }
// }

export default Botao;
