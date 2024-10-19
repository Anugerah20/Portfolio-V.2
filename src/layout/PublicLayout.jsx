import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const PublicLayout = () => {
     const navigation = useNavigate();
     const isPageLoading = navigation.action === 'loading';
     return (
          <>
               <Nav />
               {isPageLoading ? (
                    <Loading />
               ) : (
                    <main className="min-h-screen">
                         <Outlet />
                    </main>
               )}
               <Footer />
          </>
     )
}

export default PublicLayout;