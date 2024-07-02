import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [dobError, setDobError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName === '') {
      setFirstNameError('خطأ في الإسم الأول');
    } else {
      setFirstNameError('');
    }

    if (lastName === '') {
      setLastNameError('خطأ في اللقب');
    } else {
      setLastNameError('');
    }

    if (!/^(\d{2}\/\d{2}\/\d{4})$/.test(dob)) {
      setDobError('تاريخ الميلاد يجب أن يكون في الصيغة dd/mm/yyyy');
    } else {
      setDobError('');
    }

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

    if (confirmPassword === '') {
      setConfirmPasswordError('يرجى تأكيد كلمة المرور');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('كلمة المرور غير متطابقة');
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <div className="registerwrapper">
      <div className="loginform">
        <form onSubmit={handleSubmit}>
          <div className="top-header">
            <span>كن واحدا منا</span>
            <header>إنشاء حساب</header>
          </div>
          <div className="flex-fields">
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="الإسم الأول"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <i className="fas fa-user"></i>
              <p className="error-message">{firstNameError}</p>
            </div>
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="اللقب"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <i className="fas fa-user"></i>
              <p className="error-message">{lastNameError}</p>
            </div>
          </div>
          <div className="input-field">
            <input
              type="text"
              className="input"
              placeholder="تاريخ الميلاد"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <i className="fas fa-calendar"></i>
            <p className="error-message">{dobError}</p>
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
          <div className="flex-fields">
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
            <div className="input-field">
              <input
                type="password"
                className="input"
                placeholder="تأكيد كلمة المرور"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i className="fas fa-unlock-alt"></i>
              <p className="error-message">{confirmPasswordError}</p>
            </div>
          </div>
          <div className="submit-field">
            <input type="submit" className="submit" value=" إنشاء" />
            <Link className="submit create-account" to="/">
              تسجيل الدخول
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
