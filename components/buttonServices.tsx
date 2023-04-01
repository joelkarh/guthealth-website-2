import Link from "next/link";

//props
type Props = {
    text: string;
    btnColor: string;
    bg__color_arrow: string;
    btnText: string;
};
function ButtonServices({text, btnColor, bg__color_arrow, btnText} : Props) {

    return (
    <Link href ='/' className=" py-[1.5rem]">
        <button id='CTA' className={` w-full ${btnColor} border-solid border border-slate-600`}>
            <span className={`sm:text-lg ${btnText} `}>{text}</span>
            <div className={`cta__wrap ${bg__color_arrow}`}>
                <div className={`cta__arrow cta__arrow-up ${bg__color_arrow}`}></div>
                <div className={`cta__arrow cta__arrow-down ${bg__color_arrow}`}></div>
            </div>
            </button>
    </Link>
    )

}
export default ButtonServices;
