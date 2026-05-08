"use client";
import useRedux from '@/(hook)/useRedux';
import { closeDrawser, DrawserState } from '@/(redux)/reducer/drawerReducer';
import { RootState } from '@/(redux)/store';
import LocationForm from '@/admin/locations/LocationForm';
import RoomForm from '@/admin/rooms/RoomForm';
import UserForm from '@/admin/UserForm';
import React from 'react'

type Props = {}

const DrawerContainer = (props: Props) => {
    const { useAppSelector, dispatch } = useRedux();
    const state: DrawserState = useAppSelector((state: RootState) => state.drawerReducer);
    const { type, isOpen } = state;
    const renderContent = () => {
        switch (type) {
            case 'USERS':
                return (
                    <UserForm />
                )
            case 'LOCATIONS':
                return (
                    <LocationForm />
                )
            case 'ROOMS':
                return (
                    <RoomForm />
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
                <input id="drawer-action" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={() => { }} />
                <div className="drawer-content">
                    {/* Page content here */}
                    {/* <label htmlFor="drawer-action" className="drawer-button btn btn-primary">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-action" aria-label="close sidebar" className="drawer-overlay" onClick={() => dispatch(closeDrawser())}></label>
                    <div className="menu bg-white min-h-full  p-4">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </>

    )
}

export default DrawerContainer