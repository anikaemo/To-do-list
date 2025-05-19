<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create Account</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100">
    <div class="max-w-2xl mx-auto my-10 p-5 bg-white shadow-md rounded-md">
      <h3 class="text-3xl font-bold mb-6 text-gray-900">Create an account</h3>
      <form>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <input
            type="text"
            name="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter your email address"
            required
          />
          <input
            type="text"
            name="photo"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter your photo URL"
            required
          />
          <input
            type="password"
            name="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Sign Up
        </button>
      </form>

      <div class="mt-6 flex justify-between items-center flex-wrap md:flex-nowrap">
        <div class="flex items-center gap-2">
          <p class="text-lg font-semibold">Sign up with -</p>
          <img
            src="/src/assets/google 1.svg"
            alt="Google Icon"
            class="w-6 cursor-pointer"
          />
        </div>
        <a
          href="/signin"
          class="text-blue-600 hover:underline text-lg font-semibold mt-3 md:mt-0"
        >
          Have an account?
        </a>
      </div>
    </div>
  </body>
</html>