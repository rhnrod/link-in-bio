import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../hooks/useTheme';

export const Switch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button onClick={()=>{
        if(theme === 'dark') {
          setTheme('light')
        } else {
          setTheme('dark')
        }
      }}  className='
        dark:bg-yellow-300 dark:bg-opacity-80 rounded-full w-8 h-8 dark:shadow-lg dark:shadow-yellow-200
        '>
        <FontAwesomeIcon className='dark:text-white dark:text-opacity-90 w-full text-center align-middle' icon={faLightbulb} />
      </button>
    </>
  )
}
