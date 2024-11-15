"use client";
import Link from "next/link";
import Image from 'next/image'
import "./CustomCSSFiles/buttons.css";
import "./CustomCSSFiles/introduction.css";
import foto from "./ProfilBild.jpg";


const App = () => {
    return (
        <div className="App">
            <div className="content">
                {/* Title at the top */}
                <div className="Title">
                    <div>
                        <Link href="/">Teoaka_ 3JS Portfolio</Link>
                    </div>
                    <div>
                        <Link href="./contact" >Contact</Link>
                    </div>
                    <div>
                        <Link href="./about">About</Link>
                    </div>
                </div>

                <div className="Introduction">

                    <div className="BioImage">

                        <div className="BioCard">
                            <div className="Name">
                                Teoman Wiedenbeck
                            </div>
                            <div className="Occupation">
                                Aspiaring Frontend-Developer
                            </div>
                            <div className="Bio">
                                TU Berlin Bachelor Informatik Student.
                                I like to develop. In my free time i like to read and learn.
                            </div>
                            <div className="Mission">
                                Learning is fun!
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

export default App;
