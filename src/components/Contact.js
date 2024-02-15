import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex  flex-col md:flex-row justify-evenly items-center">
      <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707868800&semt=ais" />
      <a
        className="md:text-xl font-bold"
        href="mailto:suvendukumarsahoo2002@gamil.com"
      >
        Email : suvendukumarsahoo2002@gmail.com
      </a>
    </div>
  );
};
export default Contact;
