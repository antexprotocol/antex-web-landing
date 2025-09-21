import { medias } from "../../constant"
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
        </div>
    </div>)
}
