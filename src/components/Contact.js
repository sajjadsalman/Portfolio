import React from 'react'
import { Button } from "@material-tailwind/react";

const Contact = () => {
  return (
    <section className="bg-primary px-5 py-16" id="contact">
  <div className="text-center md:w-[60%] mx-auto text-white">
    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
      Contact Me
    </h2>
    <p class="mb-3">
      I am currently open for a fulltime Full-stack Developer role. You can reach me at:
    </p>

    <a href="mailto:sajjadsalman01@gmail.com">
        <Button variant="gradient">Email</Button>
    </a>
  </div>
</section>

  )
}

export default Contact
