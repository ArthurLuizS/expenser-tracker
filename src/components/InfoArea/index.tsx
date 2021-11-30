
import * as C from './styles'
import {formatCurrentMonth} from '../../helpers/dateFilter'
import {ResumeItem} from '../../components/ResumeItem'

type Props ={
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    
}

export const InfoArea = ( { currentMonth, onMonthChange} : Props) => {

    let handlePrevMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date (parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() -1 );
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`);
    }

    let handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date (parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1 );
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`);
    }


    return(
        <C.Container>
            <C.MonthArea>
 
                <C.MonthArrow onClick={handlePrevMonth}> 🢘 </C.MonthArrow>

                <C.MonthTitle> {formatCurrentMonth(currentMonth)} </C.MonthTitle>

                <C.MonthArrow onClick={handleNextMonth}>  🢚 </C.MonthArrow>

            </C.MonthArea>

            <C.ResumeArea>

            </C.ResumeArea>

        </C.Container>
    );
}