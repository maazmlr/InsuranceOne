import React from 'react'
import { Outlet } from 'react-router-dom'
import DarkVariantExample from './TestCarousel'

export const InsuranceLayout = () => {
  return (
    <>
    <Outlet/>
    <DarkVariantExample/>
    </>
  )
}
