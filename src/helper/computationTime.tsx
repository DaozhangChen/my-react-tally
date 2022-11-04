type timeArray={
    yearArray:number[]|[],
    dateArray:number[]|[]
}

const computationTime=(date:string|undefined):timeArray=>{
    if (!date){
        return {yearArray:[],dateArray:[]}
    }
    const prepareTime=new Date(date)
    let beforeYear=prepareTime.getFullYear()-5
    let yearArray=[]
    let dateArray:number[]=[]
    for (let i=0;i<10;i++){
        yearArray.push(beforeYear)
        beforeYear++
    }
    const fetchDate=(value:Date)=>{
        value.setDate(1)
        value.setMonth(value.getMonth()+1)
        value.setDate(0)
        return value.getDate()
    }
    const dateValue=fetchDate(prepareTime)
    for (let i=1;i<=dateValue;i++){
        dateArray.push(i)
    }
    return  {yearArray,dateArray}
}

export default computationTime

