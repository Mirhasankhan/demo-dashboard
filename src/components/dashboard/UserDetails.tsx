import { Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const UserDetails = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="border p-3 rounded-md w-full bg-white"
        >
          <div className="flex justify-center gap-4">
            <Image
              className="rounded-lg"
              src="https://media.istockphoto.com/id/2017256409/photo/young-asian-man-on-the-metro.webp?a=1&b=1&s=612x612&w=0&k=20&c=BPUvlXun78PFL49ZqJwdhQsgAa_OhTh9Qpq-jvgdJmg="
              height={60}
              width={60}
              alt="Profile Picture"
            />
            <div>
              <h1 className="text-xl font-semibold">User Name</h1>
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-1 pt-6 text-gray-600">
            <Settings />
            <h1>Settings</h1>
          </div>
          <Button className="w-full mt-3" variant={"outline"}>
            Logout
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserDetails;
