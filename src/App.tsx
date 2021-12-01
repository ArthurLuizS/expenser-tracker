import {useState, useEffect} from 'react'

import * as C from './App.styles'
import { Category } from './types/Category'
import { Item } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import * as D from './helpers/dateFilter'
import {TableArea } from './components/tablearea/index'
import {InfoArea} from './components/InfoArea'

const App = () =>{

  const [list, setList] = useState(items);
  const [filtedList, setFiltedlist] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(D.getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
 

  useEffect(() => {
    setFiltedlist(D.filterListbyMonth(list, currentMonth))
  },[list, currentMonth])

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filtedList){
      if(categories[filtedList[i].category].expense){
        expenseCount += filtedList[i].value;
      }
      else{
        incomeCount += filtedList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filtedList])

  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth);
  }
  return(
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema Financeiro </C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de informação */}
        <InfoArea 
        currentMonth = {currentMonth}
        onMonthChange = {handleMonthChange}
        income ={income}
        expense = {expense}
        
        />

        {/* Área de inserção de itens */}

        {/* Área de listagem de itens  */}
        <TableArea list={filtedList} />
      </C.Body>
    </C.Container>
  );
}

export default App;