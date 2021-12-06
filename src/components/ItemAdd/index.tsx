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

        if (date == '' || categoria == '' || titulo.length === 0 || !titulo.trim() || valor == '' ){
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
           <C.Box>
                <C.Label>Data</C.Label>  
                <input type="Date" value={date} onChange = {e => setDate(e.target.value)}/>
           </C.Box>
           
            <C.Box> 
                <C.Label>Categoria</C.Label>  
                <select name="select" value={categoria} onChange ={e => setCategoria(e.target.value)}>
                    <option value="" selected> </option>
                    <option value="food">Alimentação </option>
                    <option value="rent" >Despesa</option>
                    <option value="salary">Salário</option>
                </select>
            </C.Box>
            
           <C.Box>
                <C.Label>Título </C.Label>
                <input type="text" placeholder='Descrição' value ={titulo} onChange={e => setTitulo(e.target.value)} /> 
           </C.Box>

            <C.Box> 
                <C.Label>Valor</C.Label>
                <input type="number" value = {valor} placeholder = "0" step='0.01' onChange={e => setValor(e.target.value)}/>
            </C.Box>

            <C.Box>
                <C.Label> </C.Label>
                <button onClick={handleAddEvent} > Adicionar </button> 
            </C.Box>

            
        </C.Container>
    );
}