import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, HeroePage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPage/>} />
                <Route path="dc" element={<DcPage/>} />
                <Route path="search" element={<SearchPage/>} />
                <Route path="heroe/:id" element={<HeroePage/>} />


                <Route path="/" element={<Navigate to='/marvel'/>} />
                <Route path="/*" element={<p>Not Found</p>} />
            </Routes>
        </div>

    </>
  )
}
