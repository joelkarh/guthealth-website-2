//props
type Props = {
    text: string;
    btnColor: string;
    bg__color_arrow: string;
    btnText: string;
};
function ButtonServices({text, btnColor, bg__color_arrow, btnText} : Props) {

    return (
        <button id='CTA' className={`${btnColor} border-solid border border-slate-600`}>
            <span className={btnText}>{text}</span>
            <div className={`cta__wrap ${bg__color_arrow}`}>
                <div className={`cta__arrow cta__arrow-up ${bg__color_arrow}`}></div>
                <div className={`cta__arrow cta__arrow-down ${bg__color_arrow}`}></div>
            </div>
        </button>
    )

}
export default ButtonServices;
