import React from 'react'
import Header from '../Header/Header'
import FilterDesktop from '../Filters/FilterDesktop'
import SongCard from '../SongCard/SongCard'

function HomePage() {
  return (
    <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen">
      <Header />
      <div className="w-[90%] px-8 flex flex-col items-center gap-12 sm:flex-row sm:justify-between sm:items-start">
        <FilterDesktop />
        <SongCard />
      </div>
    </div>
  )
}

export default HomePage