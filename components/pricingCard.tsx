import {type} from "os"
import Button from "./button"
import ButtonServices from "./buttonServices"
type pricingType = {
    Title: string,
    Calls: string,
    Advice: string,
    Community: string,
    Dashboard: string,
    BtnColor: string,
    bgColorArrow: string,
    btnText: string
}

function PricingCard({
    Title,
    Calls,
    Advice,
    Community,
    Dashboard,
    BtnColor,
    bgColorArrow,
    btnText
} : pricingType) {

    return (
        <article
            className="bg-[#E4E2D3] p-6 m-4 lg:max-w-[429px] max-h-[577px] lg:max-h-[616px] flex justify-center flex-col border border-solid border-[#3333] shadow-lg shadow-black">
            <h3 className="font-['Baskerville'] font-semibold text-2xl py-3">{Title}</h3>
            <h4 className="font-['oxygen'] font-bold text-lg py-3 uppercase">includes</h4>
            <ul className="services__list">
                <li>{Calls}</li>
                <li>{Advice}</li>
                <li>{Community}</li>
                <li>{Dashboard}</li>
            </ul>
            <ButtonServices
                bg__color_arrow={bgColorArrow}
                btnText={btnText}
                btnColor={BtnColor}
                text="Get started"/>
        </article>
    )
}

export default PricingCard