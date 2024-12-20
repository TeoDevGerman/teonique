"use client";
import Image from 'next/image';
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
                    <h1 className='self-center'>How to contact me:</h1>
                    <div className="FindMe">

                        <div className="FindMe">
                            <a className="Email" href="mailto:teoakateo@gmail.com" target="_blank" rel="noopener noreferrer">teoakateo@gmail.com</a>
                            <a className="Email" href="mailto:teomanArbeit@gmail.com" target="_blank" rel="noopener noreferrer">teomanArbeit@gmail.com</a>
                            <a className="Telegram" href="https://t.me/Teomandev" target="_blank" rel="noopener noreferrer">Chat with me on Telegram!</a>
                            <a className="Telegram" href="https://github.com/TeoDevGerman" target="_blank" rel="noopener noreferrer">See my other Projects on GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
