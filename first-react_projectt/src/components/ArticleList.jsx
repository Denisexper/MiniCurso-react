import React from 'react'

const ArticleList = ({saveInformation}) => {
  const articles=[
    {
      title:"the first descendant",
      description:"Un shooter cooperativo donde los jugadores juegan el papel de guerrero",
      price:45.99,
    },

    {
      title:"Free fire",
      description:"Un juego de disparos en primera persona con un estilo de juego similar a pugb",
      price:0.0,
    }
  ]

  return (
    <section classNameName='content'>

      {articles.map((product, index) =>{
        return (
          <>
              <article className="peli-item" key={index}>
      <h3 className="title" name='title'>{product.title}</h3>
      <p className="description" name='description'>{product.description}</p>
      <img src="https://assets-prd.ignimgs.com/2022/08/08/first-descendant-button-1659987804417.jpg" alt="" />
      <button className="edit">Editar</button>
      <button className="delete">Eliminar</button>
      <p className="description">$45.99</p>
      <button 
        className="edit"
        onClick={() =>{
          saveInformation(product);
        }}
        >Comprar</button>

    </article>
          </>
        )
      } )}

  </section>
  )
}

export default ArticleList
