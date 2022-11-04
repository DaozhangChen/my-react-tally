import {useReducer} from "react";
type appendAtDate={
    appendAt:string
}
type Action={
    type:string,
    value:string
}

export const useTime=(date:appendAtDate)=>{
    const reducer=(state:appendAtDate,action:Action)=>{
        switch (action.type){
            case 'year':
                return {appendAt:state.appendAt.replace(/\d{4}/g,action.value)}
            case 'month':

                return {appendAt: state.appendAt.replace(
                        /(\d{4})-(\d{2})-(\d{2})/g,`$1\-${action.value}\-$3`)}
            case 'date':
                return {appendAt: state.appendAt.replace(
                    /(\d{4})-(\d{2})-(\d{2})/g,`$1\-$2\-${action.value}`)}
            default:
                throw new Error()
        }
    }
    const [_currentDate,dispatch]=useReducer(reducer,date)

    return {dispatch}
}