import React from 'react'

const Questions = () => {
  return (
      <section class="bg-white">
        <div class="container px-5 py-20 mx-auto bg-indigo-500">
          <div class="text-center">
            <h1 class="sm:text-4xl text-2xl font-medium text-center title-font text-white font-mono mb-4">
              Frequently Asked Question
            </h1>
            <p class="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white font-mono mb-8">
              The most common questions about how our hosting works and what we
              can do for you.
            </p>
          </div>

          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-white">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-green-400 rounded-md py-2 px-4">
                    How long has this company been in hosting business?
                </summary>

                <span className='text-black'>
                  HexaHost has been in this business of hosting more than 5+ years.
                </span>
              </details>

              <details class="mb-4">
                <summary class="font-semibold bg-green-400 rounded-md py-2 px-4">
                  What is hosting?
                </summary>

                <span className='text-black'>
                A web hosting service is a type of Internet hosting service that 
                hosts websites for clients, i.e. it offers the facilities required 
                for them to create and maintain a site and makes it accessible on 
                the World Wide Web.
                </span>
              </details>

              <details class="mb-4">
                <summary class="font-semibold  bg-green-400 rounded-md py-2 px-4">
                  How can I connect on hosting service?
                </summary>

                <span className='text-black'>
                To connect a host or domain to a monitoring service, select Monitoring in the pull-down menu of the control panel.
                </span>
              </details>
            </div>

            <div class="w-full lg:w-1/2 px-4 py-2 text-white">
              <details class="mb-4">
                <summary class="font-semibold  bg-green-400 rounded-md py-2 px-4">
                  Can I change the domain you give me?
                </summary>

                <span class="px-4 py-2 text-black">
                  Yes, you can change it!
                </span>
              </details>

              <details class="mb-4">
                <summary class="font-semibold  bg-green-400 rounded-md py-2 px-4">
                  How many sites I can create at once?
                </summary>

                <span class="px-4 py-2 text-black">
                  Maximum creation of sites is 3.
                </span>
              </details>
              
              <details class="mb-4">
                <summary class="font-semibold  bg-green-400 rounded-md py-2 px-4">
                  How can I communicate with you?
                </summary>

                <span class="px-4 py-2 text-black">
                  We can communicate in different ways, phone, e-mail, discord.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Questions
