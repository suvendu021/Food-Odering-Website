const Contact = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl p-2 m-2">CONTACT US</h1>
      <div className="flex  flex-col md:flex-row justify-evenly items-center">
        <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707868800&semt=ais" />
        <div className="flex flex-col">
          <a
            className="md:text-xl font-bold"
            href="mailto:suvendukumarsahoo2002@gamil.com?subject=Mail to Suvendu Kumar Sahoo about website"
          >
            Email : suvendukumarsahoo2002@gmail.com
          </a>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-2 mt-2 shadow-lg"
          />
          <input
            type="text"
            placeholder="Enter Your Message Here"
            className="p-2 mt-2 shadow-lg"
          />
          <button className="p-2 mt-2  bg-black text-white font-bold rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
