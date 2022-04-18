import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className='tags top-tads'></span>

                <Outlet />

                <span className='tags bo'>

                </span>
            </div>
        </div>
    )
}

export default Layout;