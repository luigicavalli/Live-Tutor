import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { useHandleLogin } from './useHandleLogin';
import { Textbox } from './Textbox';

export function Login() {
  const {
    handleSubmit,
    handleChange,
    toggleShowPassword,
    showPassword,
    formData,
  } = useHandleLogin();

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-slate-300">
      <h3 className="relative top-[-60px] font-bold text-3xl">Accedi</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Textbox
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <Textbox
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <div className="flex justify-center gap-2">
          <Checkbox checked={showPassword} onChange={toggleShowPassword} />
          <span>Mostra password</span>
        </div>
        <Button type="submit" text="Login" />
        <div className="flex gap-1 justify-center items-center">
          <span>Non sei registrato?</span>
          <Link
            className="underline hover:text-sky-900 active:text-gray-900"
            to={'/register'}
          >
            Registrati
          </Link>
        </div>
      </form>
    </div>
  );
}
