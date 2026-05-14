import '@components/Button/Button.scss'
import RightUpArrow from '@icons/RightUpArrow.jsx'

export default function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className="button">
            {children}
            <RightUpArrow w="50" h="50" />
        </button>
    )
}
