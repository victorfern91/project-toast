import React, {useState} from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import * as Toast from '@radix-ui/react-toast';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import {useToastStore} from "./Context";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function ToastComponent({ index, message, variant }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const [open, setOpen] = useState(true);
  const removeToastByIndex  = useToastStore((state) => state.removeToastByIndex);

  return (
    <Toast.Root open={open} className={`${styles.toast} ${styles[variant]}`} onSwipeEnd={() =>  removeToastByIndex(index)}>
        <div className={styles.iconContainer}>
          <Icon size={24} />
        </div>
        <p className={styles.content}>
          {message}{index}
        </p>
        <button className={styles.closeButton} onClick={() => {
          setOpen(false);
        }}>
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
    </Toast.Root>
  );
}

export default ToastComponent;
