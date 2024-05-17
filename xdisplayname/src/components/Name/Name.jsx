import React, { useState } from 'react';
import styles from './Name.module.css';

const Name = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        setFullName(`${firstName} ${lastName}`)
    };

    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <button type='submit'>Submit</button>
            </form>
            { !!fullName && (
                <p>Full Name: <span>{firstName} {lastName}</span></p>
            )}
        </div>
    )
}

export default React.memo(Name);