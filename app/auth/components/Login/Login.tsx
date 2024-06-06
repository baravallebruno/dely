'use client';

import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '../../../../components/ui/Form';
import Input from '../../../../components/ui/Input';
import Button from '../../../../components/ui/Button';
import { useForm, Control, FieldValues } from 'react-hook-form';
import { HTMLInputTypeAttribute, forwardRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormType, loginSchema } from '../../validation/login';
import { FormFieldContextValue } from '../../../../components/ui/Form/Form';
import { InputProps } from '../../../../components/ui/Input/Input';
import Box from '../../../../components/ui/Box';
import SocialLoginButton from '../SocialLoginButton';
import Icon from '../../../../components/ui/Icon';
import { useAuth } from '../../context';

type LoginFormProps = {
    onSubmit: () => void;
};

type FieldProps<T extends FieldValues> = InputProps & {
    label: string;
    name: FormFieldContextValue<T>['name'];
    placeholder: string;
    control: Control<T>;
    type: HTMLInputTypeAttribute;
};

const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { type, ...rest } = props;
    const propsWithRef = { ...rest, ref };

    const [currentType, setCurrentType] = useState(type);

    const isPasswordInput = currentType === 'password';
    const isValueVisible = !isPasswordInput;
    const iconName = isValueVisible ? 'Eye' : 'EyeOff';

    const handleInputType = () => {
        setCurrentType(() => (isPasswordInput ? 'text' : 'password'));
    };

    return (
        <>
            <Button
                type='button'
                variant='icon'
                size='icon'
                className='absolute right-0 top-0 bottom-0 h-full mr-2'
                onClick={handleInputType}
            >
                <Icon name={iconName} color='dely-gray' />
            </Button>
            <Input type={currentType} {...propsWithRef} />
        </>
    );
});

const Field = ({
    label,
    name,
    control,
    ...restInputProps
}: FieldProps<LoginFormType>) => {
    const isPasswordInput = name === 'password';

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        {isPasswordInput ? (
                            <PasswordInput {...restInputProps} {...field} />
                        ) : (
                            <Input {...restInputProps} {...field} />
                        )}
                    </FormControl>
                    <FormLabel>{label}</FormLabel>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

const LoginHeader = () => (
    <Box className='mb-8'>
        <Heading as='h3' variant='subtitle'>
            Bienvenido otra vez 👋
        </Heading>
        <Text variant='small' className='mt-2'>
            Ingresá a tu cuenta para gestionar tus pedidos.
        </Text>
    </Box>
);

const LoginForm = ({ onSubmit }: LoginFormProps) => {
    const form = useForm<LoginFormType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const { control } = form;

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='flex flex-col'
                autoComplete='off'
            >
                <Box className='space-y-8 mb-14'>
                    <Field
                        label='Email'
                        name='email'
                        placeholder='Email'
                        control={control}
                        type='text'
                        autoComplete='off'
                        aria-autocomplete='none'
                    />

                    <Field
                        label='Contraseña'
                        name='password'
                        placeholder='Contraseña'
                        control={control}
                        type='password'
                        autoComplete='new-password'
                        aria-autocomplete='none'
                    />
                </Box>

                <Button type='submit' fullWidth>
                    Ingresar
                </Button>
            </form>
        </Form>
    );
};

const SocialLogin = () => {
    const {
        actions: { signInWithGoogle },
        state: { isProcessingAuth, user },
    } = useAuth();

    return (
        <Box className='flex flex-col items-center justify-center gap-5 my-5'>
            <Box className='flex items-center justify-center w-full gap-3'>
                <Box className='w-full h-[1px] bg-dely-gray' />
                <Text variant='small' className='text-center min-w-max'>
                    O ingresá con
                </Text>
                <Box className='w-full h-[1px] bg-dely-gray' />
            </Box>
            <SocialLoginButton
                variant='google'
                fullWidth
                className='w-full md:w-auto'
                onClick={signInWithGoogle}
            />
            {isProcessingAuth ? (
                <Text variant='small'>Autenticando...</Text>
            ) : (
                <pre className='w-full text-xs text-black'>
                    {JSON.stringify(user, null, 2)}
                </pre>
            )}
        </Box>
    );
};

const Login = () => {
    return (
        <>
            <LoginHeader />
            <LoginForm onSubmit={() => {}} />
            <SocialLogin />
        </>
    );
};

export default Login;
