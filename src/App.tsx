import {useState} from 'react'

import * as C from './App.styles'
import { Category } from './types/Category'
import { Item } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import * as D from './helpers/dateFilter'

const App = () =>{

  const [list, setList] = useState(items);
  const [filtedList, setFiltedlist] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(D.getCurrentMonth())

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema Financeiro </C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de informação */}

        {/* Área de inserção de itens */}

        {/* Área de listagem de itens  */}
      </C.Body>
    </C.Container>
  );
}

export default App;