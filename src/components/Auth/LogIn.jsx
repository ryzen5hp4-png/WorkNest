import { supabase } from './supabaseClient';

const LogIn = (props) => {

    const {
        provider
    } = props


    const handleLogin = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: provider.toLowerCase(),
                options: {
                    redirectTo: window.location.origin + '/dashboard',
                },
            });

            if (error) throw error;
        } catch (error) {
            console.error(`Ошибка авторизации через : ${provider}`, error.message);
        }
    };


    return (
        <>
            <button onClick={handleLogin}>
                Войти через {provider}
            </button>
        </>
    );
};

export default LogIn