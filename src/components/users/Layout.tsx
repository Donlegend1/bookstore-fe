import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar';
type Props = {
  children: React.ReactNode;
};
const  Layout =  ({ children }: Props) => {
  return (
    <div className="page-container">
      <SideBar />
         
            {children}
          {/* <Footer /> */}
          
   </div>
  )
}
export default Layout