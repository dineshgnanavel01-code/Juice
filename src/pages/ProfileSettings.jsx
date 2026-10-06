
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, Phone,MapPin,Save, ArrowLeft,} from "lucide-react";

export default function ProfileSettings() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">

      <div className="mx-auto max-w-3xl">

        <Link
          to="/profile"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Profile
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-10"
        >

          <div className="mb-8">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              Profile Settings
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage your SqueezJuice account information.
            </p>
          </div>

       

          <div className="mb-8 flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-2xl font-black text-white shadow-lg">
              GD
            </div>

            <div>
              <h2 className="font-black text-slate-900 dark:text-white">
                Dinesh G
              </h2>

              <button
                type="button"
                className="mt-1 text-sm font-bold text-orange-500 hover:text-orange-600"
              >
                Change Profile Photo
              </button>
            </div>
          </div>

          <form className="space-y-5">

          

            <div>
              <label className="mb-2 block text-sm font-bold dark:text-white">
                Full Name
              </label>

              <div className="relative">
                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  defaultValue="Dinesh G"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>

          

            <div>
              <label className="mb-2 block text-sm font-bold dark:text-white">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  defaultValue="dinesh@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>


            <div>
              <label className="mb-2 block text-sm font-bold dark:text-white">
                Phone Number
              </label>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>

           

            <div>
              <label className="mb-2 block text-sm font-bold dark:text-white">
                Address
              </label>

              <div className="relative">
                <MapPin className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

                <textarea
                  rows="4"
                  placeholder="Enter your delivery address"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>


            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 font-black text-white shadow-lg shadow-orange-500/20"
            >
              <Save className="h-5 w-5" />
              Save Changes
            </motion.button>

          </form>
        </motion.div>
      </div>
    </div>
  );
}