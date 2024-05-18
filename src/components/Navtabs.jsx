import React, { useState } from 'react'

const Navtabs = () => {
    const [tabs, settabs] = useState('tab1')


    const handleClick = (tab) => {
        settabs(tab)
    }


    return (
        <div>

            <div className='tabs d-flex gap-2'>
                <button className={`${tabs === "tab1" ? "bg-danger" : ""}`} onClick={() => handleClick('tab1')}>TAB1</button>
                <button className={`${tabs === "tab2" ? "bg-danger" : ""}`} onClick={() => handleClick('tab2')}>TAB2</button>
                <button className={`${tabs === "tab3" ? "bg-danger" : ""}`} onClick={() => handleClick('tab3')}>TAB3</button>
            </div>



            {tabs === "tab1" && <div> content 1</div>}
            {tabs === "tab2" && <div> content 2</div>}
            {tabs === "tab3" && <div> content 3</div>}





        </div>
    )
}

export default Navtabs