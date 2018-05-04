import React from 'react'

const NotFoundPage = () => (
  <div>
    <h1>404—Page Not Found</h1>
    <p>Aucune page n'existe à cette adresse... 😢</p>
    <p style={{fontStyle: 'italic'}}>Vous pouvez utiliser la <a href='https://archive.org/web/'>Wayback Machine</a> de l'Internet Archive pour chercher une version archivée de cette page, dans le cas où elle aurait existé par le passé.</p>
    <img style={{maxWidth: '100%'}} src='nyan-cat.gif' alt='Nyan Cat' />
  </div>
)

export default NotFoundPage
