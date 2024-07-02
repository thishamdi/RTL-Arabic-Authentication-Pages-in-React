import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./login.css"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '') {
            setEmailError('خطأ بالبريد الإلكتروني');
        } else {
            setEmailError('');
        }

        if (password === '') {
            setPasswordError('خطأ بكلمة المرور');
        } else {
            setPasswordError('');
        }

    };


    return (
        <div className='loginwrapper'>
            <div className="loginform">
                <form onSubmit={handleSubmit}>
                    <div className="top-header">
                        <span>أهلا بعودتك</span>
                        <header>تسجيل الدخول</header>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            className="input"
                            placeholder="البريد الإلكتروني"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="fas fa-envelope"></i>
                        <p className="error-message">{emailError}</p>
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            className="input"
                            placeholder="كلمة المرور"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="fas fa-unlock-alt"></i>
                        <p className="error-message">{passwordError}</p>
                    </div>
                    <div className="submit-field">
                        <input type="submit" className="submit" value=" دخول" />
                        <Link className="submit create-account" to="/register" >إنشاء حساب </Link>
                    </div>
                </form>
                <div className="bottom">
                    <label><Link to="/resetpassword">نسيت كلمة المرور؟</Link></label>
                </div>
            </div>
        </div>
    )
}

export default Login;