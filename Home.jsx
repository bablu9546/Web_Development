import React, { useState,useEffect } from 'react'

const Home = () => {

 const[formData,setFormData]=useState({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address:'',
    grade: '',
    id:'',
    parentName: '',
    parentContact:'',
    emergencyContact: ''
 })

const handleChange=(event)=>{
   
  const{name,value}=event.target;

  setFormData({
    ...formData,[name]:value
  })
};



function Success(event){
     event.preventDefault();
     const { fullName, dob, gender, email, phone, grade, parentName, emergencyContact } = formData;
    if(!fullName || !dob || !gender || !email || !phone || !grade || !parentName || !emergencyContact){
        alert("fill in the blank");
    }
   sessionStorage.setItem("name",JSON.stringify(formData));
   localStorage.setItem("name",JSON.stringify(formData));
  
}




// Component ke andar, useState ke theek neeche ise likhein:
// useEffect(() => {
//   const savedData = localStorage.getItem("name"); // 1. Data nikala
//   if (savedData) {
//     setFormData(JSON.parse(savedData)); // 2. String ko wapas Object banakar state me daal diya
//   }
// }, []); // [] ka matlab yeh sirf page load hote hi ek baar chalega






    return (
       <form onSubmit={Success} className=' flex-col  '>
            <div className='flex flex-col justify-center items-center py-10 gap-4 bg-white border border-slate-200 w-auto'>
                <div >
                    <input type="text" placeholder='Full Name' 
                    className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md '
                    name='fullName' value={formData.fullName} required
                    onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" placeholder='DD/MM/YY' inputMode='numeric'
                     className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md '
                     value={formData.dob} name='dob' required
                      onChange={handleChange}/>
                </div>
                <div>
                    <input type="email" placeholder='Email Address' 
                     className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md ' 
                     value={formData.email} name='email' required
                      onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" inputMode='numeric' placeholder='Phone Number' 
                     className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md '
                     value={formData.phone} name='phone' required 
                      onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" placeholder='Home Address' 
                     className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md '
                     value={formData.address} name='address' required
                      onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" placeholder='Grade(current or previous)' 
                     className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md '
                     value={formData.grade} name='grade' required
                      onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" inputMode='numeric' placeholder='Student ID' 
                     className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md '
                     value={formData.id} name='id' required
                      onChange={handleChange}/>
                </div>
                <div>
                    <select name="gender" id="" value={formData.gender} onChange={handleChange} defaultValue={"None"}
                     className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md '>
                        <option value="None">None</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder='Parent/Guardian Name' 
                     className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md '
                     value={formData.parentName} name='parentName' required
                      onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" inputMode='numeric' placeholder='parent_Contact' 
                     className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md ' 
                     value={formData.parentContact} name='parentContact' required
                      onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" placeholder='Emergency Name/Number' 
                     className='bg-white w-64 h-8 outline-none border border-slate-500 text-center cursor-pointer placeholder:font-mono rounded-md '
                     value={formData.emergencyContact} name='emergencyContact' required
                      onChange={handleChange}/>
                </div>

                <div>
                    <button type='submit' className='bg-blue-500 w-28 h-12 text-center text-white from-neutral-200 rounded-md'
                    >Submit</button>
                </div>

            </div>


        </form>
    )
}

export default Home;