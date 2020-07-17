import React, {useState, useEffect} from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import {showErrorMsg, showSuccessMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
import { isAuthenticated } from '../helpers/auth';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../api/auth';

const Signup = () => {

    let history = useHistory();

    useEffect(() => {

        if(isAuthenticated() && isAuthenticated().role === 1){
            history.push('/admin/dashboard');
        }else if(isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard');

        }

    }, [history]);
    const[formData, setFormData] = useState ({
        username: '',
        surname: '',
        adresa: '',
        email: '',
        password: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false,
      });

      const {username,
         surname,
         adresa,
         email,
         password,
         password2, 
         successMsg,
         errorMsg,
         loading,
        } = formData;

        /***********
         * Event Handlers
         **************/

        const handleChange = evt => {
            //console.log(evt);
            setFormData({ ...formData,
            [evt.target.name] : evt.target.value,
            successMsg: '',
            errorMsg: ''
            });

        };

        const handleSubmit = evt => {
            evt.preventDefault();


            //validimi ne client side
            if (isEmpty (username) || isEmpty (surname) || isEmpty (adresa) || isEmpty (password) || isEmpty (password2)){
                setFormData({ 
                    ...formData, errorMsg: 'Te gjitha fushat jane te nevojshme'
                });
            }else if(!isEmail (email)) {
                setFormData({ 
                    ...formData, errorMsg: 'Invalid Email'
                });

            }else if (!equals(password, password2)){
                setFormData({
                    ...formData, errorMsg: 'Fjalekalimet nuk perputhen'
                });
            } else{
                const {username, email, password} = formData;
                const data = {username, email, password};

                setFormData({ ...formData, loading: true });

                signup(data)
                    .then((response) => {
                        console.log('Success' , response);
                        setFormData({
                            username: '',
                            email: '',
                            password: '',
                            password2: '',
                            adresa: '',
                            surname:'',
                            loading: false,
                            successMsg: response.data.successMessage
                        })
                })
                .catch((err) => {
                    console.log('Axios signup error: ', err);
                    setFormData({
                        ...formData, loading: false, errorMsg: err.response.data.errorMessage
                    });

                });
                
           }
            
        };

const showSingupForm = () => (

    <form className='signup-form' onSubmit={handleSubmit} noValidate>
        {/*emri */}
       <div className='form-group input-group'> 
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    <i className='fa fa-user'></i>
                </span>
            </div>

            <input 
            name='username'
            value={username}
            className='form-control'
            placeholder='Emri'
            type='text'
            onChange={handleChange}
            />
        </div>
        {/*mbiemri */}
       <div className='form-group input-group'> 
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    <i className='fa fa-user'></i>
                </span>
            </div>

            <input 
            name='surname'
            value={surname}
            className='form-control'
            placeholder='Mbiemri'
            type='text'
            onChange={handleChange}
            />
        </div>
        {/*email */}
        <div className='form-group input-group'>
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    <i className='fa fa-envelope'></i>
                </span>
            </div>
            <input
                name='email'
                value={email}
                className='form-control'
                placeholder='Email address'
                type='email'
                onChange={handleChange}
                />
        </div>
        {/*adresa */}
       <div className='form-group input-group'> 
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    <i className='fa fa-user'></i>
                </span>
            </div>

            <input 
            name='adresa'
            value={adresa}
            className='form-control'
            placeholder='Adresa e banimit'
            type='text'
            onChange={handleChange}
            />
        </div>
        {/*password */}
        <div className='form-group input-group'>
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    <i className='fa fa-lock'></i>
                </span>
            </div>
            <input
                name='password'
                value={password}
                className='form-control'
                placeholder='Krijoni fjalekalimin'
                type='password'
                onChange={handleChange}
                />
        </div>
        {/*reconfirm password */}
        <div className='form-group input-group'>
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    <i className='fa fa-lock'></i>
                </span>
            </div>
            <input
                name='password2'
                value={password2}
                className='form-control'
                placeholder='Konfirmoni fjalekalimin'
                type='password'
                onChange={handleChange}
                />
        </div>
        {/*butoni signup */}
        <div className='form-group'>
            <button type="submit" className='btn btn-primary btn-block'>
                Krijo Llogari
            </button>
        </div>

        <p className='text-center text-white'>
            Nese keni account <Link to= '/signin'>Kyquni ketu</Link>
        </p>
        

    </form>

);

return ( 
     <div className='signup-container'>
         <div className='row px-3 vh-100'>
            <div className='col-md-5 mx-auto align-self-center '>
            {successMsg && showSuccessMsg(successMsg)}
            {errorMsg && showErrorMsg(errorMsg)}
            {loading && <div className='text-center pb-4'>{showLoading()}</div>}
            {showSingupForm()}
         {/*  <p style={{ color: 'white' }}> {JSON.stringify(formData)} </p>*/}
            </div>
         </div>
     </div>
    );
}

export default Signup;