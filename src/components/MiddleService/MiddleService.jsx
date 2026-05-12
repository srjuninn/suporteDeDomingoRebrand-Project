import upArrow from '@icons/RightArrowIcon.png';
import MiddleServiceVetor from '@components/MiddleService/MiddleServiceVetor';
import '@components/MiddleService/MiddleService.scss' 

export default function MiddleService({ number, img, desc, name, isSelected, onMouseEnter, onMouseLeave, onClick }){
    return(
        <div
            className={`middleService${isSelected ? ' active' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <span>{number}</span>
            <button>
                <img src={upArrow} alt="setinha pra cima na diagonal direita" />
            </button>
            <MiddleServiceVetor/>
            <img className="serviceImg" src={img} alt={desc} />
            <p>{name}</p>                    
        </div>
    )
}