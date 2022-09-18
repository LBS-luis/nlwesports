import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Check, GameController } from "phosphor-react";
import { Input } from "./Form/input";


interface CreateAdModalProps {
    games: {
    id: string
    title: string
    bannerUrl: string
    _count:{
      ads: number
    }
    }[]
}



export function CreateAdModal ( props: CreateAdModalProps) {
    return (

        <Dialog.Portal>

        <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
        
        <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>

          <Dialog.Title className='text-3xl text-white font-black'>Publique Um anúncio</Dialog.Title>
            
              <form className='mt-8 flex flex-col gap-4' >
                 
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='game' className='font-semibold '>Qual o game?</label>
                    <select
                    id='game'
                    className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none">
                        <option disabled selected value="">Selecione o game que desejar jogar</option>

                        {
                            props.games.map(game => {
                                return <option key={game.id} value={game.id}>{game.title}</option>
                            })
                        }

                    </select>
                  </div>   

                  <div className='flex flex-col gap-2'>
                      <label htmlFor='name'>Nickname</label>
                      <Input id="name" type="text" placeholder='Qual seu Nickname dentro do jogo?'/>
                  </div>

                  <div className='grid grid-cols-2 gap-6'>
                      <div className='flex flex-col gap-2'>
                          <label htmlFor='yearsPlaying'>Joga a quantos anos?</label>
                          <Input  id="yearsPlaying" type="number" placeholder='Tudo bem ser zero'/>
                      </div>
                      <div className='flex flex-col gap-2'>
                          <label htmlFor='discord'>Qual seu discord?</label>
                          <Input  id="discord" type="text" placeholder='Usuário#0000'/>
                      </div>
                  </div>  
                  <div className='flex gap-6'>
                      <div className='flex flex-col gap2'>
                          <label htmlFor='weekDays'>Quando costuma jogar?</label>
                          <div >
                            <ToggleGroup.Root type="multiple" className='grid grid-cols-4 gap-2'>
                            <ToggleGroup.Item value="0" className='w-8 h-8 rounded bg-zinc-900' title='Domingo'>D</ToggleGroup.Item>
                            <ToggleGroup.Item value="1" className='w-8 h-8 rounded bg-zinc-900' title='Sengunda'>S</ToggleGroup.Item>
                            <ToggleGroup.Item value="2" className='w-8 h-8 rounded bg-zinc-900' title='Terça'>T</ToggleGroup.Item>
                            <ToggleGroup.Item value="3" className='w-8 h-8 rounded bg-zinc-900' title='Quarta'>Q</ToggleGroup.Item>
                            <ToggleGroup.Item value="4" className='w-8 h-8 rounded bg-zinc-900' title='Quinta'>Q</ToggleGroup.Item>
                            <ToggleGroup.Item value="5" className='w-8 h-8 rounded bg-zinc-900' title='Sexta'>S</ToggleGroup.Item>
                            <ToggleGroup.Item value="6" className='w-8 h-8 rounded bg-zinc-900' title='Sabado'>S</ToggleGroup.Item>
                            </ToggleGroup.Root>                           
                          </div>
                      </div>
                      <div className='flex flex-col gap-2 flex-1'>
                          <label htmlFor='hourStart'>Qual horário do dia?</label>
                          <div className='grid grid-cols-2 gap-2'>
                              <Input type="time" id='hourStart' placeholder='De' />
                              <Input type="time" id='hourEnd' placeholder='Até' />
                          </div>
                      </div>         
                  </div>        
                  <div className='mt-2 flex gap-2 text-sm items-center'>
                      <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
                        <Checkbox.Indicator className="">
                            <Check className="w-4 h-4 text-emerald-400"/>
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      Costumo me conectar ao chat de voz
                  </div>     
                  <footer className='mt-4 flex justify-end gap-4'>
                      <Dialog.Close className='mt-4 bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                      <button type='submit' className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 mt-4'>
                          Encontrar
                          <GameController className='w-6 h-6'/>
                      </button>
                  </footer>
              </form>
            

        </Dialog.Content>

      </Dialog.Portal>

    )
}