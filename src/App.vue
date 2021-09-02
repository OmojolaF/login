<template>
  <div >
    <div class="min-h-screen bg-purple-800 py-6 ">
      <div class="sm:mx-auto bg-white p-10 my-10 mx-5 rounded sm:py-10 max-w-screen-sm">
        <div class="max-w-md mx-auto">
          <div class="text-3xl font-semibold py-3 my-2 text-center">
            <h1>Welcome Back!</h1>
          </div>
          <div class="placeholder-gray-800::placeholder">
            <form @submit="onSubmit">
            <div class="py-3">
              <input type="email" v-model="text" name="email" placeholder="Enter Your Email Address..." class="w-full p-2 pl-4 border shadow rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-600">
            </div>
            <div class="py-3">
              <input type="text" v-model="text" name="text" placeholder="Password" class="w-full p-2 pl-4 border shadow rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-600">
            </div>
            <div class="py-3">
              <input type="checkbox" v-model="Remember" name="remember"/>
              <label class="mx-2 font-normal">Remember Me</label>
            </div>
            <input type="submit" value="LogIn" class="w-full py-3 px-6 my-2 mb-4 font-normal text-white bg-indigo-700 rounded-full hover:bg-yellow-300 hover:text-black"/>
            <h5 class="border-t-2 border-gray-100 pt-2 text-center text-indigo-700 font-semibold hover:text-green-700"><a href="#">Forgot Password?</a></h5>
            </form>  
          </div>
        </div>
      </div>
  </div>
  </div>

</template>

<style>

</style>
