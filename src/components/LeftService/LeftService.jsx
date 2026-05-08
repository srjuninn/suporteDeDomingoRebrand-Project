import rightArrow from '@icons/RightArrowIcon.png';
import LeftServiceVetor from '@components/LeftService/LeftServiceVetor';
import leftImg from '@images/UxUiHeroImage.png'
import '@components/LeftService/LeftService.scss'

export default function LeftService({ number, img, desc, name }){
    return(
        <div className="leftService">
            <span>{number}</span>
            <button>
                <img src={rightArrow} alt="setinha pra cima na diagonal direita" />
            </button>
            <LeftServiceVetor/>
            <img src={leftImg} alt={desc} />
            <p>{name}</p>
        </div>
    )
}