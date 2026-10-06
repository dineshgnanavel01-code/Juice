import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User,Mail, Phone, MapPin, Settings,ShoppingBag,ArrowLeft} from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">

      <div className="mx-auto max-w-5xl">

        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900"
        >

         

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-10 sm:px-10">
            <div className="flex flex-col items-center gap-5 sm:flex-row">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/20 text-3xl font-black text-white ring-4 ring-white/30">
                GD
              </div>

              <div className="text-center text-white sm:text-left">
                <h1 className="text-3xl font-black">
                  Dinesh G
                </h1>

                <p className="mt-1 text-white/80">
                  SqueezJuice Customer
                </p>
              </div>

            </div>
          </div>

        

          <div className="grid gap-6 p-6 sm:p-10 md:grid-cols-2">

            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <div className="mb-4 flex items-center gap-3">
                <User className="text-orange-500" />
                <h2 className="font-black text-slate-900 dark:text-white">
                  Personal Information
                </h2>
              </div>

              <div className="space-y-4">

                <div className="flex gap-3">
                  <User className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Full Name
                    </p>
                    <p className="font-bold dark:text-white">
                      Dinesh G
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Email
                    </p>
                    <p className="font-bold dark:text-white">
                      dinesh@example.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Phone
                    </p>
                    <p className="font-bold dark:text-white">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-400">
                      Address
                    </p>
                    <p className="font-bold dark:text-white">
                      Add your address
                    </p>
                  </div>
                </div>

              </div>
            </div>

            

            <div className="space-y-4">

              <Link
                to="/profile/settings"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-orange-400 hover:bg-orange-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <div className="rounded-xl bg-orange-100 p-3 text-orange-600 dark:bg-orange-950">
                  <Settings />
                </div>

                <div>
                  <h3 className="font-black dark:text-white">
                    Profile Settings
                  </h3>

                  <p className="text-sm text-slate-500">
                    Update your account information
                  </p>
                </div>
              </Link>

              <Link
                to="/orders"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-green-400 hover:bg-green-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <div className="rounded-xl bg-green-100 p-3 text-green-600 dark:bg-green-950">
                  <ShoppingBag />
                </div>

                <div>
                  <h3 className="font-black dark:text-white">
                    My Orders
                  </h3>

                  <p className="text-sm text-slate-500">
                    View your juice orders
                  </p>
                </div>
              </Link>

            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}