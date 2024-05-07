import { useState } from "react";
import Footer from "./Footer";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    // Simulating loading with setTimeout
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully");
      setName("");
      setMessage("");
    }, 3000);
  };

  return (
    <>
      <div className="min-h-[450px]">
        <h1 className="text-center font-bold text-3xl p-2 m-2">CONTACT US</h1>
        <div className="flex  flex-col md:flex-row justify-evenly items-center">
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707868800&semt=ais"
            alt="Customer support"
          />
          <div className="flex flex-col">
            <a
              className="md:text-xl font-bold"
              href="mailto:suvendukumarsahoo2002@gmail.com?subject=Mail to Suvendu Kumar Sahoo about website"
            >
              Email : suvendukumarsahoo2002@gmail.com
            </a>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 mt-2 shadow-lg"
            />
            <input
              type="text"
              placeholder="Enter Your Message Here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 mt-2 shadow-lg"
            />
            <button
              className="p-2 my-8 bg-black text-white font-bold rounded-lg"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Contact;
