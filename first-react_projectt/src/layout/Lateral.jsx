import React from 'react'

const Lateral = () => {
    return (
        <aside className='lateral'>
            <div className='search'>
                <label htmlFor="">Buscador</label>
                <input type="text" />

                <form action="">
                    <input type="text" placeholder='Nombre del articulo' />
                    <textarea name="" id="" placeholder='Descripcion'></textarea>
                    <button className='edit'>Agregar</button>
                </form>
            </div>

        </aside>
    )
}

export default Lateral
