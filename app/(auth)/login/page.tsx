import AuthForm from '@/components/AuthForm';
import React from 'react';

const login = () => {
return (
<section className='flex-center size-full max-semibol:px-6'>
    <AuthForm type='login'/>
    </section>
);
};

export default login;