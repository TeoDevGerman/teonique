import React from "react";
import Link from "next/link";
import "../CustomCSSFiles/introduction.css";

const Title: React.FC = () => {
    return (
        <div className="Title">
            <div className="onTheLeft">
                <div className="hover_over_Titleitems">
                    <Link href="/">Teonique</Link>
                </div>
            </div>
            <div className="onTheRight">
                <div className="hover_over_Titleitems">
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="hover_over_Titleitems">
                    <Link href="/about">About</Link>
                </div>
            </div>
        </div>
    );
};

export default Title;
