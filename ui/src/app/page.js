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
      <h1 className=" bg-white py-12 dark:bg-gray-800 text-4xl font-bold tracking-tight text-yellow-100 text-center sm:text-6xl">
        SELECT POSE FOR GIVEN KEYS
      </h1>
      <Cardsection />
    </>
  )
}
