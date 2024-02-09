import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversation from './Conversation.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <hr />
       <Conversations/> 
     
       <LogoutButton/>
    </div>
   
  )
}

export default Sidebar