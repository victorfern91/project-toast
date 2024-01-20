import React from 'react';
import * as Toast from "@radix-ui/react-toast";
import ToastComponent from "../Toast";
import styles from '../Toast/Toast.module.css';
import { create } from 'zustand';

export const useToastStore = create((set) => ({
    toasts: [],
    sendNotification: (variant, message) => {
        set((state) => ({ toasts: state.toasts.concat({ variant, message, id: crypto.randomUUID() }) }))
    },
    removeToastByIndex: (index) => {
        set((state) => ({ toasts: state.toasts.toSpliced(index, 1) }))
    }
}));


const ToastProvider: React.FC = ({ children }) => {
    const { toasts } = useToastStore();

    return (
        <Toast.Provider swipeDirection="right">
            {toasts.map((toast, index) => (
                <ToastComponent index={index} key={toast.id} variant={toast.variant} message={toast.message} />
                ))}
            <Toast.Viewport className={styles.viewport} />
        </Toast.Provider>
    );
};

export default ToastProvider;


