import { InputHTMLAttributes } from 'react';

export interface FieldProps {
    /** Значение поля */
    value: string;
    
    /** Текст метки поля */
    label: string;
    
    /** Атрибут name для input */
    name: string;
    
    /** Тип поля ввода */
    type?: InputHTMLAttributes<HTMLInputElement>['type'];
    
    /** Текст подсказки */
    placeholder?: string;
    
    /** Обработчик изменения значения */
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    
    /** Дополнительные CSS классы */
    className?: string;
    
    /** Отключение редактирования поля */
    disabled?: boolean;
    
    /** Маркер обязательного поля */
    required?: boolean;
    
    /** Текст ошибки */
    error?: string;
    
    /** Вспомогательный текст под полем */
    helperText?: string;
}
