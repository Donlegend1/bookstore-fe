import React, {useState, useContext} from 'react'
import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar';
import endpoint from '../../auth/endpoint';
import { Context } from "../../auth/Context";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  const [loading, setLoading] = useState(false)
  const { dispatch } = useContext(Context);
    
  const logOut = async () => {
         try {
      const res = await endpoint.post("/logout-api");
      if (res.data) {
        setLoading(false);
       dispatch({type: "LOGOUT"});
      localStorage.removeItem("user")
      window.location.reload()
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error.response?.data);
    }
        
    }
  return (
    <div className="page-container">
      <SideBar logOut={ logOut} />
         
            {children}
          {/* <Footer /> */}
          
   </div>
  )
}
export default Layout