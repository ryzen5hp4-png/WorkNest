const LogOut = () => {
    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;

            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Ошибка при выходе:', error.message);
        }
    }


    return (
        <button onClick={handleLogout}>Log Out</button>
    )
}

export default LogOut