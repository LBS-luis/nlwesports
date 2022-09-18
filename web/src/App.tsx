import { CreateAdBanner } from './components/CreateAdBanner'
import { GameBanner } from './components/GameBanner'
import { useEffect, useState } from 'react'
import { CreateAdModal } from './components/CreateAdModal';

import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css'
import logo from './assets/Logo.svg'



function App() {


  interface Game {
    id: string
    title: string
    bannerUrl: string
    _count:{
      ads: number
    }
  }

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    
    //local -> http://localhost:3333/games
    //hosted-> http://192.168.15.11:3333/games

    fetch('http://192.168.15.11:3333/games')
      .then(response => response.json())
      .then(data => {
        console.log(data[0])
        setGames(data)
      })

  }, [])


// logo rocket seat <img src={logo} alt="logo" />

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-12'>
      

      <h1 className='text-6xl text-white font-black mt-12'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {
          games.map( game => {
            return(
              <GameBanner 
              key={game.id}
              bannerUrl={game.bannerUrl} 
              title={game.title} 
              adsCount={game._count.ads}
              />
            )
          })
        }
      </div>
      
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal games={games}/>
      </Dialog.Root>

    </div>
  )
  }
export default App
