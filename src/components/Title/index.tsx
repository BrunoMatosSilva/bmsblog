import Link from "next/link";
import { ReactNode } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { HeaderTitle } from "./styles";

interface TitlePops {
    title: string;
    category: string;
    path: string;
    icon: ReactNode;
}

export function Title({ title, path, category, icon }: TitlePops) {
    return (
        <HeaderTitle>
            <span><h2>{title} -</h2></span>
            <Link href={path}><a>{category}<RiArrowRightSLine /></a></Link>
        </HeaderTitle>
    );
}