const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        action=""
        className="bg-gray-800 p-12 rounded-md w-[500px] h-[500px] flex flex-col justify-center gap-8"
      >
        <h1 className="text-center font-bold text-xl"> Login</h1>
        <input type="text" placeholder="username" className="p-8 bg-gray-700" />
        <input type="text" placeholder="password" className="p-8 bg-gray-700" />
        <button className="p-8 bg-teal-700 cursor-pointer rounded-xl">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
