import { useAuth } from '../contexts/AuthContext';

export default function () {
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <button>Login</button>
      </form>
    </>
  );
}
