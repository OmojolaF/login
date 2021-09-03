<template>
  <div >
    <div class="min-h-screen bg-purple-light py-6">
      <div class="sm:mx-auto bg-white p-3 my-10 mx-5 rounded sm:py-5 max-w-screen-sm font-sans">
        <div class="max-w-md mx-auto">
          <div class="text-3xl font-extralight py-3 my-2 text-center">
            <h1>Welcome Back!</h1>
          </div>
          <div class="placeholder-gray-800::placeholder">
            <form @submit="onSubmit">
            <div class="py-2">
              <input type="email" v-model="text" name="email" placeholder="Enter Your Email Address..." class="w-full font-thin p-3 pl-4 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-purple-100">
            </div>
            <div class="py-2">
              <input type="text" v-model="text" name="text" placeholder="Password" class="w-full font-thin p-3 pl-4 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-purple-100">
            </div>
            <div class="py-2">
              <input type="checkbox" v-model="Remember" name="remember"/>
              <label class="mx-2 font-thin text-purple">Remember Me</label>
            </div>
            </form> 
            <button class="w-full my-2 py-2 px-5 font-extralight text-white bg-purple-dark rounded-full hover:bg-purple-light transition duration-500 ease-in-out transform hover:translate-y-1">Login</button>
            <hr class="mt-2 mb-2 border-gray-200">
            <h5 class="text-center text-sm text-purple-dark font-normal hover:text-green-700"><a href="#">Forgot Password?</a></h5> 
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<style>

</style>
