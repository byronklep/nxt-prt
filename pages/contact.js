import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    }

    try {
      const response = await axios(config)

      if (response.status == 200) {
        // reset()
        // router.push('/')
        console.log(`Success: ${response}`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="flex flex-col text-center w-full mb-8 mt-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Get In Touch
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Have something in mind? Drop me a line.
        </p>
      </div>
      <div className="py-16  px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
          <form className="mx-auto" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  {...register('name', { required: true })}
                  className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                  focus:ring-2 ${errors.name ? 'ring-2 ring-red-500' : null}`}
                />
                {errors.name && (
                  <span role="alert" className="text-red-400 text-sm py-2">
                    Name is required
                  </span>
                )}
              </div>
            </div>
            <div className="p-2 ">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email',
                    },
                  })}
                  className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                  focus:ring-2 ${errors.email ? 'ring-2 ring-red-500' : null}`}
                />
                {errors.email && (
                  <span role="alert" className="text-red-400 text-sm py-2">
                    Email is required
                  </span>
                )}
              </div>
            </div>
            <div className="p-2 ">
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  {...register('phone', { required: true })}
                  className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                  focus:ring-2 ${errors.phone ? 'ring-2 ring-red-500' : null}`}
                />
                {errors.phone && (
                  <span role="alert" className="text-red-400 text-sm py-2">
                    Phone is required
                  </span>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    {...register('message', {
                      required: true,
                      maxLength: 1000,
                    })}
                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                      errors.message ? 'ring-2 ring-red-500' : null
                    }`}
                    placeholder="Message"></textarea>
                  <span className="text-red-400 text-sm py-2">
                    {errors.message && (
                      <span role="alert" className="text-red-400 text-sm py-2">
                        Message is required
                      </span>
                    )}
                    {errors.message && errors.message.type === 'maxLength' && (
                      <span role="alert" className="text-red-400 text-sm py-2">
                        Max length exceeded
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
          </form>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-indigo-500">sam@samklepper.com</a>
            <p className="leading-normal my-5">
              23 Main St
              <br />
              Houston, TX
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
