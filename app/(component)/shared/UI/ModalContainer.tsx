"use client";
import useRedux from '@/(hook)/useRedux';
import { closeModal } from '@/(redux)/reducer/modalReducer';
import React, { useEffect, useRef } from 'react'
import Login from '@/(site)/(.)login/page';
import Register from '@/(site)/(.)register/page';
type Props = {}

const ModalContainer = (props: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { useAppSelector, dispatch } = useRedux();
    const { isOpen, contentType } = useAppSelector(state => state.modalReducer);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                dispatch(closeModal());
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const renderContentType = () => {
        if (contentType === "LOGIN") return <Login />;
        if (contentType === "REGISTER") return <Register />
    }
    return (
        <div>
            {/* <button className="btn" onClick={() => dialogRef.current?.showModal()}>open modal</button> */}
            <dialog className="modal " ref={dialogRef} open={isOpen} >
                <div className="modal-box p-0 w-max">
                    <div className="modal-action absolute right-0 top-0 mt-0">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-ghost" onClick={() => dispatch(closeModal())}>X</button>
                        </form>
                    </div>
                    {renderContentType()}
                </div>
            </dialog>
        </div>
    )
}

export default ModalContainer

