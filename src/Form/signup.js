import React, { useEffect, useState } from 'react';
import {validate} from './validate.js';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./toastify.js";
import { Link } from 'react-router-dom';
import styles from "./signup.module.css";
export const Signup = () => {
    
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmedpassword:"",
        isAccepted:false
    })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validate(data,"signup"))
    }, [data, touched])

    const changeHandler = event => {
        if(event.target.name === "isAccepted"){
            setData({...data, [event.target.name]: event.target.checked})            
        } else{
            setData({...data, [event.target.name]: event.target.value})
        }
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]:true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("You signed in successfuly!", "success")
        } else{
            notify("Invalid data!", "error")
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmedpassword: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className={styles.Container}> 
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>Signup</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input
                     type="text" 
                     name="name" 
                     value={data.name} 
                     onChange={changeHandler} 
                     onFocus={focusHandler} 
                     className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                     type="text" 
                     name="email" 
                     value={data.email} 
                     onChange={changeHandler} 
                     onFocus={focusHandler} 
                     className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                     type="password" 
                     name="password" 
                     value={data.password} 
                     onChange={changeHandler} 
                     onFocus={focusHandler} 
                     className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Confirm password</label>
                    <input
                     type="password" 
                     name="confirmedpassword" 
                     value={data.confirmedpassword} 
                     onChange={changeHandler} 
                     onFocus={focusHandler} 
                     className={(errors.confirmedpassword && touched.confirmedpassword) ? styles.uncompleted : styles.formInput}/>
                    {errors.confirmedpassword && touched.confirmedpassword && <span>{errors.confirmedpassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                    <label>I accept terms of privacy policy.</label>
                    <input
                     type="checkbox" 
                     name="isAccepted" 
                     value={data.isAccepted} 
                     onChange={changeHandler} 
                     onFocus={focusHandler} 
                     className={(errors.isAccepted && touched.isAccepted) ? styles.uncompleted : styles.formInput}/>
                     </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons} >
                    <Link to="/login">Login</Link>
                    <button type="submit">Sign up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}


export default Signup;