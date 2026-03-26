//tsrafce
import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = (props: Props) => {
    return (
        <div>

            <div className="d-flex flex-column vh-100">
                {/* Navbar */}
                <nav className="navbar navbar-dark bg-dark px-4">
                    <div className="navbar-brand">
                        <img src="https://picsum.photos/40/40?random=1" alt="logo" className="rounded" />
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Profile
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="d-flex flex-grow-1">
                    {/* Sidebar */}
                    <nav className="bg-light p-3" style={{ width: '250px' }}>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" href="/admin/user">User Management</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/admin/product">Product Management</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Children Content */}
                    <div className="flex-grow-1 p-4">
                        {props.children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default layout