import * as C from './styles'
import {Item} from '../../types/Item'
import { useState } from 'react'


type Props = {

    onAdd : (item: Item) => void;

}

export const ItemAdd = ( {onAdd} : Props) =>{

    const [date, setDate] = useState('');
    const [categoria, setCategoria] = useState('');
    const [titulo, setTitulo] = useState('')
    const [ valor, setValor] = useState('')

    const handleAddEvent = () =>{

        if (date == '' || categoria == '' || titulo == '' || valor == ''){
            alert('Por favor preencher todos os campos');
        }else{
            let [year, month, day] = date.split('-'); 
            let newDate = new Date (parseInt(year), parseInt(month) -1 , parseInt(day))
            let newItem: Item = {
                date: newDate,
                category: categoria,
                title: titulo,
                value: parseInt(valor)
            };
    
            onAdd(newItem);
            setDate('');
            setCategoria('');
            setTitulo('');
            setValor('');
        }

     

    }

    return(
        <C.Container>
            <input type="Date" value={date} onChange = {e => setDate(e.target.value)}/>

            <select name="select" value={categoria} onChange ={e => setCategoria(e.target.value)}>
                <option value="" selected> </option>
                <option value="food">Alimentação </option>
                <option value="rent" >Despesa</option>
                <option value="salary">Salário</option>
            </select>
            <input type="text" placeholder='titulo' value ={titulo} onChange={e => setTitulo(e.target.value)} />  ;
            <input type="number" value = {valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={handleAddEvent} > Adicionar </button> 
        </C.Container>
    );
}