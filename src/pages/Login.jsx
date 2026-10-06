import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Lock, LogIn, ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 px-4 py-10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto flex min-h-[90vh] max-w-md items-center justify-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        >
          <Link
            to="/"
            className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-3xl shadow-lg">
              🥤
            </div>

            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Login to your SqueezJuice account
            </p>
          </div>

          <form className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-bold text-orange-500 hover:text-orange-600"
              >
                Forgot Password?
              </button>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 font-black text-white shadow-lg shadow-orange-500/20"
            >
              <LogIn className="h-5 w-5" />
              Login
            </motion.button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-black text-orange-500 hover:text-orange-600"
            >
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}