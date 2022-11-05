import React from 'react';

function InfoMessageBox ({
  messageText,
  active
})
 {
  return (
    <div className={`infoMessage ${active ? 'infoMessage_active' : ''}`}>
      <p className='infoMessage__text'>{messageText}</p>
    </div>
  )
}

export default InfoMessageBox
