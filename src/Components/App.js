import React from 'react';
import Init from './Init';
import Menu from './Menu';

export default function App (){
    
    const [tela, setTela] = React.useState('init');


    return (
        <>
        {
            tela === 'init' ? <Init setTela={setTela} /> : <Menu />
        }
            
            
        </>
    )
}