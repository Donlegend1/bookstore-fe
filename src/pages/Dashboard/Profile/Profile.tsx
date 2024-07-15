import React, {useState} from 'react';
import Layout from '../../../components/users/Layout';
import Header from '../../../components/users/Header';
import ProfileSection from '../../../components/admin/profile/profile';
import BreadCrumHeader from '../../../components/Layouts/Header';

const Profile = () => {
    return (
       <Layout>
            <div className="main-content page-content">
                
                <Header />
                  <div className="main-content-inner">
               <BreadCrumHeader />
                </div>
                <ProfileSection />


                 </div>
        </Layout>
    );
}

export default Profile;
