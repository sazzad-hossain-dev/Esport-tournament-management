import React from "react";

type ButtonProps = {
    title: string;
    design?: string;
    onClick?: () => void;
    onSubmit?: () => void;
};

const CustomBtn: React.FC<ButtonProps> = ({
    title,
    design = "",
    onClick,
    onSubmit,
}) => {
    return (
        <button
            onClick={onClick}
            onSubmit={onSubmit}
            className={`${design}
    px-6 py-2
    rounded-full
    bg-accent
    text-text-primary
    font-Orbitron
    tracking-wider
    text-sm
    shadow-[0_0_12px_#1E1E3F]
    hover:scale-[1.03]
    hover:bg-accent-hover
    transition-transform duration-300 ease-in-out
  `}
        >
            {title}
        </button>
    );
};

export default CustomBtn;
