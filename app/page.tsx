"use client";
import Link from "next/link";
import { ReactNode } from "react";
import Image from 'next/image'
import "./CustomCSSFiles/buttons.css";
import "./CustomCSSFiles/introduction.css";
import foto from "./ProfilBild.jpg";

const Index = () => {
    return (
        <div className="App">
            <div className="content">
                <div className="Introduction">

                    <div className="BioImage">

                        <div className="BioCard">
                            <div className="Occupation">
                                Software <br /> Developer
                            </div>
                            <div className="Name">
                                Teoman Wiedenbeck
                            </div>
                            <button className="Resume">
                                <a href="/CV_Wiedenbeck_Teoman_Nejat.pdf" download="Resume_Teoman_Nejat.pdf">Download my Resume</a>

                            </button>

                        </div>
                        <Image
                            className="PortfolioImage"
                            width={200}
                            height={200}
                            src={foto}
                            alt="Picture of the author"
                        />
                    </div>
                    {/* Contacts right and below */}
                    <div className="FindMe">
                        How to contact me:
                        <br />
                        <button className="Telegram">
                            <a href="https://t.me/Teomandev" target="_blank">Chat with me on Telegram!</a>
                        </button>
                        <button className="Email">
                            <a href="mailto:teoakateo@gmail.com" target="_blank">teoakateo@gmail.com</a>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};



const App = ({ children }: { children: ReactNode }) => {
    return (
        <div className="App">
            <Index />
            <div className="Content">{children}</div>
        </div>
    );
};

export default App;

