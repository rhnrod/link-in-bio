import { Avatar } from './components/Avatar';
import { Link } from './components/Link';
import { Footer } from './components/Footer';
import { Switch } from './components/Switch';
import avatarjpg from './assets/avatar.jpg';
import { Social } from './components/Social';
import { useTheme } from './hooks/useTheme'

function App() {

  const { theme, setTheme} = useTheme();

  return (
    <div className='w-full max-w-xl mt-14 mx-auto mb-0 px-6'>
       <div className='text-end rounded-md p-2 m-3'>
          <Switch />
       </div> 
        <header className='flex flex-col items-center' >
          <Avatar imgSrc={avatarjpg} imgWidth={'112px'} />  
          <h3 className='text-lg justify-center'>Rhuan Emanuel</h3>
          <p>React Developer</p>
        </header>
        <main>
          <Link></Link>
        </main>
        <div className='flex mt-24 mb-2'>
          <Social />
        </div>
        <Footer />
    </div>
  );
}

export default App
