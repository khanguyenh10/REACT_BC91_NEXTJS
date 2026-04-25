"use client";
import { toastError, toastSuccess } from '@/utils/toast';
import React, { useActionState, useEffect, useRef } from 'react'

type Props = {}

export type ActionState = {
    status: null | 'success' | 'error',
    message?: string,
    errors?: Record<string, string>, // vd: { email: 'email is required', password: 'password is required' }
    data?: any
}


const useServerAction = (action: any, initialState?: ActionState) => {
    const [state, formAction, isPending] = useActionState(action, initialState = { status: null, message: '', errors: {}, data: null });


    // toast show message tránh render lại nhiều lần
    useEffect(() => {

        if (state.status === 'success') {
            toastSuccess(state.message);
        }
        if (state.status === 'error') {
            toastError(state.message);
        }
    }, [state])

    return {
        state,
        formAction,
        isPending,
        isSuccess: state.status === 'success',
        isError: state.status === 'error',
    }
}

export default useServerAction