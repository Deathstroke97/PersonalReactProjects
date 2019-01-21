import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const  Main = (props) => {
    return (
        <Layout>
            <BurgerBuilder /> 
        </Layout>
    )
}

export default Main;