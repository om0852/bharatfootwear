"use client"
import React, { useState } from 'react';

function ProfileModal({ onClose }) {
    const [name, setName] = useState(localStorage.getItem('profileName') || '');
    const [email, setEmail] = useState(localStorage.getItem('profileEmail') || '');
    const [age, setAge] = useState(localStorage.getItem('profileAge') || '');
    const [mobile, setMobile] = useState(localStorage.getItem('profileMobileNo') || '');

    const saveProfile = () => {
        localStorage.setItem('profileName', name);
        localStorage.setItem('profileEmail', email);
        localStorage.setItem('profileAge', age);
        localStorage.setItem('profileMobileNo', mobile);
        alert('Profile saved successfully!');
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Profile</h2>
                <p>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
                <p>Email: <input type="text" value={email} readOnly /></p>
                <p>Age: <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /></p>
                <p>Mobile No.: <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} /></p>
                <button onClick={saveProfile}>Save</button>
            </div>
        </div>
    );
}

export default ProfileModal;
