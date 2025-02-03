import React from 'react';
import Image from 'next/image';
import Slideshow from './Slideshow';

const MyFavorites = () => {
    const images = [
        "/carPictures/A5_Coupe.jpg",
        "/carPictures/C63_AMG.jpg",
        "/carPictures/X3.jpg"
    ];
    return (
        <div className='place-items-center'>
            <p>This Page is about things I like</p>
            <div className='grid gap-10 justify-items-stretch text-center'>
                <h1>Manga</h1>
                <table className='grid gap-10 justify-items-stretch text-center'>
                    <tbody>
                        <tr className='grid grid-cols-3'>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Genre</th>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td>One Piece</td>
                            <td>Eiichiro Oda</td>
                            <td>Adventure</td>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td>Attack on Titan</td>
                            <td>Isayama Hajime</td>
                            <td>Dark Fantasy</td>
                        </tr>
                        <tr className='grid grid-cols-3'>
                            <td>My Hero Academia</td>
                            <td>Kohei Horikoshi</td>
                            <td>Superhero</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='grid gap-10 justify-items-stretch text-center'>
                <h1>Cars</h1>
                <p>My favorite Cars are the Audi A5, Mercedes Benz C63, BMW X3</p>
                <div>
                    <Slideshow images={images} />
                </div>
            </div>
        </div>
    );
}

export default MyFavorites;