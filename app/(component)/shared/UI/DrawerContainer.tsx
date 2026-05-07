"use client";
import useRedux from '@/(hook)/useRedux';
import { DrawserState } from '@/(redux)/reducer/drawerReducer';
import { RootState } from '@/(redux)/store';
import UserForm from '@/admin/UserForm';
import React from 'react'

type Props = {}

const DrawerContainer = (props: Props) => {
    const { useAppSelector } = useRedux();
    const state: DrawserState = useAppSelector((state: RootState) => state.drawerReducer);
    const { type } = state;
    const renderContent = () => {
        switch (type) {
            case 'USERS':
                return (
                    <UserForm />
                )
            case 'LOCATIONS':
                return (
                    <div>Locations</div>
                )
            case 'ROOMS':
                return (
                    <div>ROOMS</div>
                )
            case 'ROOM_ORDERS':
                return (
                    <div>ROOM ORDERS</div>
                )
            default:
                return null;
        }
    }

    return (
        <>

            <div className="drawer drawer-end">
                <input id="drawer-action" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    {/* <label htmlFor="drawer-action" className="drawer-button btn btn-primary">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-action" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-white min-h-full  p-4">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </>

    )
}

export default DrawerContainer