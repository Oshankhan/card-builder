import React from 'react'

function TestPage() {
    const groupArray =[1,2,3,4,5]
    const [islen, setIsLen] = useState(0)
    const [create, setCreate] = useState(false)
    const [currentSlectedGroup, setCurrentSlectedGroup] = useState(second)
    const setSelectedGroupValue=(index)=>{
        setCurrentSlectedGroup(index)
    }
  return (
    <div>
        {groupArray.length===0|| create===true ?<>
            <div className='container__first'>
            <label >Create Group</label>
            <input type="text" />
            
            <label >Description</label>
            <input type="text" />

        
        </div>
        
        <div className='container__second'>
            <label >Create terms </label>
            <input type="text" />
            <label >Create Definition</label>
            <input type="text" />
        </div>
        </>:<>
        <div onClick={()=>setCreate(true)}>Create new group</div>
        {groupArray.map((value, index)=>{
            <div key={index} onClick={()=>setSelectedGroupValue(index)}>{value}</div>
        })}
        <div className='container__first'>
            
        <label >Description</label>
            <input type="text" />
        </div>

        <div className='container__second'>
            <label >Terms</label>
            <input type="text" value={currentSlectedGroup}/>
            

        </div>

        </>

        }

       
    </div>
  )
}

export default TestPage