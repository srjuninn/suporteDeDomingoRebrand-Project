import '@components/RightService/RightService.scss'
import leftArrow from '@icons/RightArrowIcon.png'
import RightServiceVetor from '@components/RightService/RightServiceVetor'
import rightImg from '@images/bradingHeroImage.png'

export default function RightService({ number, img, desc, name }){
    return(
        <div className="rightService">
            <span>{number}</span>
            <button>
                <img src={leftArrow} alt="setinha pra cima na diagonal direita" />
            </button>
            <RightServiceVetor/>
            <img src={rightImg} alt={desc} />
            <p>{name}</p>                                
        </div>
    )
}