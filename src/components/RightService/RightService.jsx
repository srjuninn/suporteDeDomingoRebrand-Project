import '@components/RightService/RightService.scss'
import leftArrow from '@icons/RightArrowIcon.png'
import RightServiceVetor from '@components/RightService/RightServiceVetor'

export default function RightService({ number, img, desc, name, isSelected, onMouseEnter, onMouseLeave, onClick }){
    return(
        <div
            className={`rightService${isSelected ? ' active' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <span>{number}</span>
            <button>
                <img src={leftArrow} alt="setinha pra cima na diagonal direita" />
            </button>
            <RightServiceVetor/>
            <img className="serviceImg" src={img} alt={desc} />
            <p>{name}</p>                                
        </div>
    )
}