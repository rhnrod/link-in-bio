import { useEffect, useState } from 'react';
import {dev, source} from '../../helpers/easteregg';
import { useTheme } from '../../hooks/useTheme'; 

export const Footer = () => {

    const [random, setRandom] = useState([0]);
    const [randomSource, setRandomSource] = useState([0]);
    const { theme, setTheme } = useTheme();

    useEffect(()=>{
        let i = Math.floor(Math.random() * dev.length);
        let j = Math.floor(Math.random() * source.length);
        setRandom(i);
        setRandomSource(j);
    }, [theme])

    let text = `Feito com ${source[randomSource]} por ${dev[random]} Rhuan Emanuel`;

    return (
    <div className='flex justify-center'>
        <footer className='
        text-center py-1 px-1 my-6 rounded-xl
        font-medium dark:bg-white dark:bg-opacity-30 
        bg-black bg-opacity-30 max-w-fit'>
            <span className='text-lg' >{text}</span> 
        </footer>
    </div>
    )
}
