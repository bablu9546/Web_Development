import React, { useEffect, useState } from 'react'

function Home() {

    const [amount, setAmount] = useState(" ");
    const [expense, setExpense] = useState([]);
    const [category, setCategory] = useState("None");
    const [total, setTotal] = useState([]);

    const Add = (event) => {
        event.preventDefault();
        if (!amount || !expense || category === "None") {
            alert("fill in the blanks");
            return;
        }


        const newTotal = {
            id: Date.now(),                            // A unique marker (using the current timestamp in milliseconds)
            amount: amount,
            expense: expense,
            category: category
        };

        setTotal([...total, newTotal]);

        setAmount("");     //( why used mean purpose is:  they completely reset your form inputs back to blank default states immediately    after an item is successfully added to your list.)
        setExpense("");
        setCategory("None");

    }



    function Delete(idtoDelete) {

    const updatedList = total.filter(
        user => user.id !== idtoDelete
    );

    setTotal(updatedList);
}




    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(total));
    }, [total]);


    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
            setTotal(JSON.parse(savedName));
        }
    }, [])

    return (
        <>
            <div>
                <div className='flex flex-wrap  gap-4 justify-center items-center translate-y-7'>
                    <div>
                        <input
                            type="text" inputMode='numeric' pattern="[0-9]*"
                            placeholder='Enter the amount'
                            className='bg-white outline-none w-64 h-10 rounded-md hover:border-slate-400 transition-all duration-500 cursor-pointer text-center placeholder:italic'
                            onChange={(event) => setAmount(event.target.value)} required />
                    </div>
                    <div>
                        <input
                            type="text" inputMode='numeric'
                            placeholder='Enter the Expense'
                            className='bg-white outline-none w-64 h-10 rounded-md hover:border-slate-400 transition-all duration-500 cursor-pointer text-center placeholder:italic'
                            onChange={(event) => setExpense(event.target.value)} required />
                    </div>
                    <div className=' bg-white w-64  text-center' >
                        <select name="" id=" "  value={category} onChange={(event) => setCategory(event.target.value)} defaultValue={"None"} required >
                            <option value="None">None</option>
                            <option value="Home & Bedroom">Home & Bedroom</option>
                            <option value="Bathroom & Personal Care">Bathroom & Personal Care</option>
                            <option value=" Kitchen & Dining"> Kitchen & Dining</option>
                            <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                            <option value=" Clothing & Wearables"> Clothing & Wearables</option>
                            <option value="Cleaning & Housekeeping">Cleaning & Housekeeping</option>
                            <option value="Office & Study">Office & Study</option>
                            <option value="Health & First Aid">Health & First Aid</option>
                            <option value=" Travel & Commute"> Travel & Commute</option>
                            <option value="Recreation & Fitness">Recreation & Fitness</option>
                            <option value="other Items">other Items</option>
                        </select>
                    </div>
                    <div>
                        <button
                            className='bg-yellow-600 w-24 h-10 rounded-md text-slate-50 font-semibold font-serif'
                            onClick={Add}
                        >AddItems</button>
                    </div>
                    <div>
                        
                    </div>

                </div>

            </div>


            <div>
                <div className='flex justify-center items-center translate-y-14'>
                    <div className='bg-white justify-center items-center w-64 h-40 rounded-md cursor-pointer outline-none  border-slate-400 text-center'>
                        {/* <input type="text"
                            placeholder='All Items'
                            className=' bg-white justify-center items-center w-64 h-40 rounded-md cursor-default outline-none  border-slate-400 text-center  ' /> */}

                        {
                            total.map((item)=>(
                                <>
                               <div key={item.id}>

                                <h2>Amount: {item.amount}</h2>

                                <h2>Expense: {item.expense}</h2>

                                <h2>Category: {item.category}</h2>

                            </div>
                            <button className='bg-red-800 w-24 h-10 rounded-md text-slate-50 font-semibold font-serif'
                        onClick={() => Delete(item.id)}
                        >Delete</button>
                               </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home