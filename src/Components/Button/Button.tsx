interface Props {
    label: string,
    iconUrl?:string
    customStyle?: string
    fullWidth?: string
}

const Button = ({label, iconUrl, customStyle, fullWidth,}:Props) => {
    return (
        <button
            className={
            `flex justify-center items-center gap-2 py-3 px-[1rem] leading-none
            ${customStyle? `${customStyle} ` : 'rounded-[10px] text-white'} ${fullWidth && 'w-full'} bg-black border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300 cursor-pointer
            `
        }
        >
            {iconUrl &&
                <img
                    src={iconUrl}
                    alt='img'
                    className="mr-2 rounded-full w-6 h-6 bg-white"
                />
            }

            {label}
        </button>
    )
}
export default Button
