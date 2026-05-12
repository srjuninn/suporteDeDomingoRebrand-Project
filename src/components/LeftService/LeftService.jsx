import rightArrow from '@icons/RightArrowIcon.png';
import LeftServiceVetor from '@components/LeftService/LeftServiceVetor';
import '@components/LeftService/LeftService.scss'

export default function LeftService({ number, img, desc, name, isSelected, onMouseEnter, onMouseLeave, onClick }){
    return(
        <div
            className={`leftService${isSelected ? ' active' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <span>{number}</span>
            <button>
                <img src={rightArrow} alt="setinha pra cima na diagonal direita" />
            </button>
            <LeftServiceVetor/>
            <img className="serviceImg" src={img} alt={desc} />
            <p>{name}</p>
        </div>
    )
}