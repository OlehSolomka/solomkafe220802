import React from 'react'
import s from './Container.module.scss'

interface Props {
 children: React.ReactNode 
}

const Container = ({children}: Props)=>{
    return(
        <div className={s.container}>
            <p>Container</p>
        {children}
        </div>
    )
}

export default Container