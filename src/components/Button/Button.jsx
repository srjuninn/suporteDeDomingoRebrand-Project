import '@components/Button/Button.scss'
import RightUpArrow from '@icons/RightUpArrow'

export default function Button({ children }){
    return(
        <button>
            {children}
            <RightUpArrow/>
        </button>
    )
}