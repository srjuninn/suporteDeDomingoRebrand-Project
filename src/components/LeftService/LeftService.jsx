import rightArrow from '@icons/RightArrowIcon.png';
import LeftServiceVetor from '@components/LeftService/LeftServiceVetor';
import '@components/LeftService/LeftService.scss'
import { openWhatsapp } from '@utils/openWhatsapp'

export default function LeftService({
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
            className={`leftService${isSelected ? ' active' : ''}`}
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
                <img src={rightArrow} alt="setinha pra cima na diagonal direita" />
            </button>

            <LeftServiceVetor />

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
