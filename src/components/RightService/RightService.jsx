import '@components/RightService/RightService.scss'
import leftArrow from '@icons/RightArrowIcon.png'
import RightServiceVetor from '@components/RightService/RightServiceVetor'
import { openWhatsapp } from '@utils/openWhatsapp'

export default function RightService({
    number,
    img,
    desc,
    name,
    isSelected,
    onMouseEnter,
    onMouseLeave,
    onClick // vem do Services e atualiza selectedService
}) {
    return (
        <div
            className={`rightService${isSelected ? ' active' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick} // dispara setSelectedService
        >
            <span>{number}</span>

            {/* Botão da setinha → abre WhatsApp */}
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation() // impede que o clique no botão acione o clique da div
                    openWhatsapp()
                }}
            >
                <img src={leftArrow} alt="setinha pra cima na diagonal direita" />
            </button>

            <RightServiceVetor />

            {/* Se estiver selecionado, mostra descrição; senão, mostra imagem */}
            {isSelected ? (
                <p className="serviceDesc show">{desc}</p>
            ) : (
                <img className="serviceImg show" src={img} alt={desc} />
            )}

            <p>{name}</p>
        </div>
    )
}
