<div class="max-w-2xl mx-auto my-5 p-5">
  <h3 class="text-2xl md:text-3xl text-gray-900 mb-5 lg:text-4xl font-bold">
    Log in
  </h3>

  <!-- Form -->
  <form action="#" method="POST">
    <div class="mb-6">
      <input
        type="email"
        name="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter your Email Address"
        required
      />
    </div>
    <div class="mb-6">
      <input
        type="password"
        name="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter your password"
        required
      />
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="text-[#801f82] border-2 w-full border-[#801f82] px-4 py-2 md:px-5 md:py-2 font-semibold text-sm md:text-base rounded-md hover:bg-[#801f82] hover:text-white"
    >
      Sign in
    </button>
  </form>

  <!-- Social + Signup -->
  <div class="mt-5 flex flex-wrap md:flex-nowrap justify-between items-center">
    <div class="flex gap-2 justify-end items-center">
      <p class="text-lg font-semibold">Sign in with -</p>
      <img src="/path/to/google.svg" alt="Google login" class="w-6 cursor-pointer" />
    </div>
    <div>
      <a
        href="/signup"
        class="border-b-2 text-lg font-semibold border-transparent hover:border-[#801f82]"
      >
        Or create a account ?
      </a>
    </div>
  </div>
</div>