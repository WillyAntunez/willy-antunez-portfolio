
import { useMemo, useState } from 'react';

export const useForm = (config = {}) => {

    const formInitialValue = () => {
        const newFormState = {}
    
        if(!!config && config.length > 0){
            config.forEach(input => {
                if(!input.name) throw new Error('useForm: Each entry in the config has to have a "name" property [String]')
    
                newFormState[input.name] = {};
                newFormState[input.name].value = input.initialValue ? input.initialValue : '';
                newFormState[input.name].notValid = undefined;
            });
        }
    
        return newFormState;
    };

    const initValidators = () => {
        const newValidators = {}

        if(!!config && config.length > 0){
            config.forEach(input => {
                if(input.regexValidators && input.regexValidators.length > 0){
                    newValidators[input.name] = input.regexValidators;
                }else{
                    newValidators[input.name] = [];
                }
            })
        }

        return newValidators;
    };

    const [wasFormSubmited, setWasFormSubmited] = useState(false)
    const [formState, setFormState] = useState(formInitialValue());
    const validators = useMemo(() => initValidators(), []);

    const isFormValid = useMemo(() => {

        if(wasFormSubmited === false){
            return false;
        }

        for(const inputName in formState){
            if(formState[inputName].notValid !== undefined) return false;
        }

        return true;
        
    }, [formState, wasFormSubmited])


    const onInputChange = ({target}) => {

        const notValidArr = validators[target.name].find(validator => !validator[0].test(target.value));

        setFormState({
            ...formState,
            [target.name]: {
                value: target.value,
                notValid: notValidArr ? notValidArr[1] : undefined,
            }
        });
    };

    const validateAll = () => {
        let newFormState = {...formState};

        for(const inputName in formState){
            const notValidArr = validators[inputName].find(validator => !validator[0].test(formState[inputName].value));

            newFormState = {
                ...newFormState,
                [inputName]: {
                    ...newFormState[inputName],
                    notValid: notValidArr ? notValidArr[1] : undefined,
                },
            };
        }

        setFormState( newFormState );
    }

    const resetForm = () => {
        setFormState(formInitialValue());
        setWasFormSubmited(false);
    }

    const setFormSubmitted = () => {
        validateAll();
        setWasFormSubmited(true);
    };


    

    return {
        ...formState,
        formState,
        onInputChange,
        isFormValid,
        resetForm,
        wasFormSubmited,
        setFormSubmitted,
    };
};