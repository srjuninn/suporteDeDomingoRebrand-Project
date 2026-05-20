import upArrow from '@icons/RightArrowIcon.png';
import MiddleServiceVetor from '@components/MiddleService/MiddleServiceVetor';
import '@components/MiddleService/MiddleService.scss'
import { openWhatsapp } from '@utils/openWhatsapp'

export default function MiddleService({
    number,
    img,
    desc,
    name,
    buttonTop = '78%',
    isSelected,
    onMouseEnter,
    onMouseLeave,
    onClick // vem do Services e atualiza selectedService
}) {
    return (
        <div
            className={`middleService${isSelected ? ' active' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick} // dispara setSelectedService
        >
            <span>{number}</span>

            {/* Botão da setinha → abre WhatsApp */}
            <button
                type="button"
                style={{ top: buttonTop }}
                onClick={(e) => {
                    e.stopPropagation() // impede que o clique no botão acione o clique da div
                    openWhatsapp()
                }}
            >
                <img src={upArrow} alt="setinha pra cima na diagonal direita" />
            </button>

            <MiddleServiceVetor />

            {/* Se estiver selecionado, mostra descrição; senão, mostra imagem */}
            {isSelected ? (
                <p className="serviceDesc">{desc}</p>
            ) : (
                <img className="serviceImg" src={img} alt={desc} />
            )}

            <p>{name}</p>
        </div>
    )
}
