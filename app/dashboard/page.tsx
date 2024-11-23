"use client"
import { useState } from 'react'
import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div>
      {/* Search Section for Templates */}
      <SearchSection onSearchInput={(value:string)=> setUserSearchInput(value)}/>

      {/* Template List Section */}
      <TemplateListSection userSearchI  nput={userSearchInput}/>
    </div>
  )
}

export default dashboard