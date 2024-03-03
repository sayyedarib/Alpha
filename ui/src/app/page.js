"use client"
import { useState } from 'react'
import Header from '../../component/header'
import Herosection from '../../component/herosection'
import Cardsection from '../../component/cardsection'

export default function Home() {
  return (
    <>
      <Header />
      <Herosection />
      <h1 className=" bg-white dark:bg-gray-800 text-4xl font-bold tracking-tight text-gray-800 text-center sm:text-6xl animate-sparkle capitalize">
        Select the poses from the options below
      </h1>
      <Cardsection />
    </>
  )
}

