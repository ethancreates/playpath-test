"use client";

import ModalButton from "./ui/button";
import { useState } from "react";
import Modal from "./ui/modal";
import { FaGithub } from "react-icons/fa";
import { supabaseClient } from "../utils/supabase/client";
import { VscLoading } from "react-icons/vsc";

const LoginSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGithubLogin = (provider: "github") => {
    setIsLoading(true);
    const supabase = supabaseClient();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/callback?next=/dashboard",
      },
    });
    setIsLoading(false);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ModalButton setShowModal={setShowModal}>Login</ModalButton>
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <div className="w-[400px] flex flex-col">
          <form>
            <h2 className="text-lg font-bold">Login</h2>
            <div className="w-[400px] h-[0.5px] rounded bg-black/20 my-2" />
            <div className="mt-5">
              <label htmlFor="username" className="text-sm ml-1">
                User Name:
              </label>
              <input
                type="text"
                id="username"
                className="px-3 mt-1 w-full py-2 border-black/20 focus:border-black/50 border rounded-2xl"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="text-sm ml-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="px-3 mt-1 w-full py-2 border-black/20 focus:border-black/50 border rounded-2xl"
              />
            </div>
            <div className="w-[400px] h-[0.5px] rounded bg-black/20 my-5" />
            <div className="">
              <button
                onClick={() => handleGithubLogin("github")}
                className="flex items-center space-x-2 border border-black/50 w-full rounded-2xl px-1 py-2 justify-center hover:scale-105 active:scale-90 transition"
              >
                <FaGithub />
                <p>Continue with GitHub</p>
              </button>
            </div>
            <div className="flex items-center justify center mt-5">
              <button
                type="submit"
                className="px-1 py-2 bg-black text-white hover:scale-105 active:scale-90 transition border-black/20 w-full border rounded-2xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
export default LoginSection;
