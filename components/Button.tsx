import Image from "next/image";

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    title: string;
    icon?: string; // optional
    varient: 'btn_dark_green' | 'btn_green' | 'btn_white_text';
}

const Button = ({ type, title, icon, varient }: ButtonProps) => {
  return (
        <button type={type} className={`flexCenter gap-3 rounded-full border ${varient}`}>
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className="bold-16 whitespace-nowrap">{title}</label>
        </button>
    )
}

export default Button