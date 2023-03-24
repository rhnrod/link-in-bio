import { Link as Linkage } from 'react-router-dom';
import links from '../../helpers/links.js';

export const Link = () => {

    return (
        <ul>
        {links.map((link, index)=>
          <Linkage to={link.url} key={index}><li
        className="
        text-center
        my-4 px-5 py-2 rounded-md
        outline outline-1
        font-sans
        cursor-pointer
        dark:hover:bg-[rgba(255,255,255,0.05)]
        hover:bg-[rgba(0,0,0,0.05)]
        hover:font-semibold 
      "
        >{link.label}</li></Linkage>
        )}
        </ul>
    )
}
