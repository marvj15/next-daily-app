import Head from 'next/head';
import { Children } from 'react';
import Navbar from './navbar'

export default function Layout({ children }){

    return(
        <div>
            <Head>

            </Head>
            <Navbar/>
            { children }
        </div>
    );
}