import { medias, tradeUrl } from "../../constant"
import React, { useRef, useState } from "react";
import { headerNavConfig } from "../../constant/nav";

export const HeaderNav: React.FC<{ navConfig: any[] }> = ({ navConfig }) => {
    return (
        <nav className="flex items-center space-x-6">
            {navConfig.map((item, idx) => (
                <NavItem key={idx} item={item} />
            ))}
        </nav>
    );
};

const NavItem: React.FC<{ item: any }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement | null>(null);
    // const timerRef = useRef<number | null>(null);

    const hasChildren = item.children && item.children.length > 0;

    return (
        <div
            ref={wrapRef}
            className="relative z-2"
            onMouseMove={() => {
                if (!hasChildren) return
                setIsOpen(true)
            }}
            onMouseLeave={(e) => {
                if (!hasChildren) return
                const related = e.relatedTarget as Node | null;

                if (wrapRef.current && related && wrapRef.current.contains(related)) {
                    return;
                }
                setIsOpen(false)
            }}
        >
            {/* 主菜单项 */}
            {typeof item.link === "string" ? (
                <a
                    href={item.link}
                    className="text-white font-medium px-3 py-2 hover:text-[#6451fb] transition-colors"
                >
                    {item.displayName}
                </a>
            ) : (
                <div className="text-white font-medium px-3 py-2 hover:text-[#6451fb] transition-colors">
                    {item.displayName}
                </div>
            )}

            {/* 子菜单 */}
            {hasChildren && (
                <div className={`z-1 absolute top-full left-0 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <div
                        className={` mt-2 w-40 bg-black border border-white/20 border-px rounded-xl overflow-hidden shadow-lg transition-opacity duration-200`}
                    >
                        {item.children.map((child, i) => (
                            <a
                                key={i}
                                href={child.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-white hover:bg-[#6451fb] transition-colors"
                            >
                                {child.displayName}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};



export const Header = () => {
    return (<div className="py-5 px-[7.5rem]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-10">
                <img className="w-[6.25rem]" src="/brand/AnteX-logo-Horizontal-White.svg" />

                <HeaderNav navConfig={headerNavConfig} />
            </div>

            <a href={tradeUrl} className="cursor-pointer">
                    <button className="transition-all bg-[#8678FD] border-[#8678FD] cursor-pointer px-6 py-2 rounded-xl flex items-center justify-center border gap-1">
                        <span className="text-sm">Launch App</span>
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.2857 13L12.2857 1.21429L10.6573 1.21429L0.499992 1.21429"
                                stroke="currentColor"
                                strokeWidth="1.4"
                            />
                            <path
                                d="M12.2857 1.21434L1.07455 12.4255"
                                stroke="currentColor"
                                strokeWidth="1.4"
                            />
                        </svg>
                    </button>
                </a>
        </div>
    </div>)
}
