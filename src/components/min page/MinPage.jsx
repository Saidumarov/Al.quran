import React from 'react'
import Photo from './photo/Photo'
import Company from './compony/Company'
import Afzallik from './afzalliklar/Afzallik'
import Loyiha from './loyihalar/Loyiha'
import Xizmat from './xizmatlar/Xizmat'
import Blog from './blog/Blog'
import Jamoa from './jamoa/Jamoa'
import Action from './action/Action'
import Foter from './footer/Foter'

const MinPage = () => {
  return (
    <div>
      <Photo/>
      <Company/>
      <Afzallik/>
      <Loyiha/>
      <Xizmat/>
      <Blog/>
      <Jamoa/>
      <Action/>
      <Foter/>
    </div>
  )
}

export default MinPage