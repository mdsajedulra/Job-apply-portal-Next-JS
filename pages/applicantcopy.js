const handleForm = (event) => {
  event.preventDefault();
  const form = event.target;

  const email = form.email.value;
  const phone = form.phone.value;

  fetch(`http://localhost:5000/applicantcopy?email =${email}`, {
    // body: JSON.stringify(emailPhone),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const applicantcopy = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleForm} className="w-96">
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone
          </label>
          <input
            name="phone"
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <input
          name=""
          className="my-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          type="submit"
          value="See Application"
        />
      </form>
    </div>
  );
};

export default applicantcopy;
