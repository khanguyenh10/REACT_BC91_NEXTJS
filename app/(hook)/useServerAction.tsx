"use client";
import { toastError, toastSuccess } from '@/utils/toast';
import React, { useActionState, useEffect, useRef } from 'react'

type Props = {}

export type FormState = {
    status?: null | 'success' | 'error',
    message?: string,
    errors?: Record<string, string[]>, // vd: { email: 'email is required', password: 'password is required' }
    data?: any
}


const useServerAction = (action: any, initialState?: FormState) => {
    const [state, formAction, isPending] = useActionState<FormState, FormData>(action, initialState = { status: null, message: '', errors: {}, data: null });


    // toast show message tránh render lại nhiều lần
    useEffect(() => {

        if (state.status === 'success') {
            setTimeout(() => {
                toastSuccess("Thành công");
            }, 100);
        }
        if (state.status === 'error') {
            setTimeout(() => {
                toastError(state.message as string);
            }, 1000);
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