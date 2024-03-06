import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({publisher}) => {
    const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher] ); 

  return (
    <div className='row rows-col-1 row-cols-sm-3 g-3'>
        {
            heroes.map( heroe=> (
                <HeroeCard key={heroe.id} {...heroe}/>
            ))
        }
    </div>
  )
}
