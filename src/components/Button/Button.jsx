import '@components/Button/Button.scss'
import RightUpArrow from '@icons/RightUpArrow.jsx'

export default function Button({ children }){
    return(
        <button>
            {children}
            <RightUpArrow/>
        </button>
    )
}