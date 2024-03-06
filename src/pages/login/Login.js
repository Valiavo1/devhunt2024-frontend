import React, { useState } from 'react';
import {Maddle} from "../../components/icon/IconeFile";
import Icon from "../../components/icon/Icon";
import loginPicture from "../../assets/Computerlogin-amico.svg"
import {useAuthStore} from "../../store/AuthStore";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useAuthStore()

  const handleLogin = () => {
    login(username, password)
  }

  return (
      <>
        <div className="flex login-page">
          <div className="w-0 md:w-1/2 h-screen overflow-hidden flex items-center justify-center">
            <img src={loginPicture} alt={"login-amico"} width="600px"/>
          </div>
          <div className="w-full px-12 md:w-1/2">
            <div className="font-sans text-gray-900 antialiased">
              <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div>
                  <h2 className="font-bold text-3xl flex flex-row items-center space-x-3">
                    <Icon icon={Maddle} width="64px"/> <span className="text-white">M A D D L E</span>
                  </h2>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <div className="py-8">
                      <div style={{ textAlign: 'center' }}>
                        <span className="text-2xl font-semibold">Connexion</span>
                      </div>
                    </div>

                    <label className="block font-medium text-sm text-gray-700">
                      <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Username"
                          className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#87B016]"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                      />
                    </label>

                    <div className="mt-4">
                      <label className="block font-medium text-sm text-gray-700" htmlFor="password">
                        <div className="relative">
                          <input
                              id="password"
                              type="password"
                              name="password"
                              placeholder="Mot de passe"
                              required
                              autoComplete="current-password"
                              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#87B016]"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            <button
                                type="button"
                                id="togglePassword"
                                className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600"
                            >
                            </button>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="block mt-4">

                    </div>

                    <div className="flex items-center justify-end mt-4">
                      <button
                          className="ms-4 inline-flex items-center px-4 py-2 bg-[#87B016] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-[#536C0D] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#87B016] focus:ring-offset-2 transition ease-in-out duration-150"
                          onClick={handleLogin}
                      >
                        Se connecter
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Login;
