import '../../index.css';
import socials from '../../helpers/socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Social = () => {
  return (
    socials.map((social, index)=>(
      <a className="
      text-2xl
      w-10 h-10
      m-auto
      rounded-full
      bg-purple-300 bg-opacity-30 hover:bg-opacity-50
      dark:bg-blue-400 dark:bg-opacity-30 dark:hover:bg-opacity-50
      " href={social.url} key={index} >
        <FontAwesomeIcon className='w-full text-center align-bottom' icon={social.icon} />
      </a>
    )))
}



