import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import confetti from 'canvas-confetti'
import { ChevronDown, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    teamSize: '-',
    location: 'Australia',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState(null)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage(null)

    emailjs
      .send(
        'service_khlgwhh', // Service ID
        'template_9xnnz1u', // Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          contactNumber: formData.contactNumber,
          emailid: formData.email,
          age: formData.teamSize, // corresponds to age group
          location: formData.location,
          Message: formData.message,
        },
        'HzY2gy6e4jQWysvRr' // User ID
      )
      .then(
        () => {
          setIsSubmitting(false)
          confetti({
            particleCount: 75,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#000000', '#f97316', '#3b82f6', '#10b981'],
          })
          alert('Your message has been sent successfully!')
          setStatusMessage({ type: 'success', text: 'Your message has been sent successfully!' })
          setFormData({
            firstName: '',
            lastName: '',
            contactNumber: '',
            email: '',
            teamSize: '-',
            location: 'Australia',
            message: '',
          })
        },
        (error) => {
          setIsSubmitting(false)
          alert('Failed to send message, please try again.')
          console.error('EmailJS Error:', error)
          setStatusMessage({ type: 'error', text: 'Failed to send message, please try again.' })
        }
      )
  }

  // Diverse team avatars mathematically aligned directly ON the orbital curves
  const avatars = [
    // Outer Ring (r=320)
    { id: 1, src: '/avatars/avatar1.jpg', alt: 'Team member', top: '19.4%', left: '28.8%', size: 'w-10 h-10' },
    { id: 8, src: '/avatars/avatar8.jpg', alt: 'Team member', top: '78.1%', left: '24.3%', size: 'w-10 h-10' },

    // Middle Ring 2 (r=250)
    { id: 2, src: '/avatars/avatar2.jpg', alt: 'Team member', top: '21.9%', left: '55.0%', size: 'w-10 h-10' },
    { id: 3, src: '/avatars/avatar3.jpg', alt: 'Team member', top: '50.0%', left: '25.0%', size: 'w-11 h-11' },
    { id: 7, src: '/avatars/avatar7.jpg', alt: 'Team member', top: '76.5%', left: '50.8%', size: 'w-10 h-10' },

    // Inner-Middle Ring 1 (r=175)
    { id: 4, src: '/avatars/avatar4.jpg', alt: 'Team member', top: '32.3%', left: '64.5%', size: 'w-10 h-10' },
    { id: 5, src: '/avatars/avatar5.jpg', alt: 'Team member', top: '52.2%', left: '48.6%', size: 'w-11 h-11' },
    { id: 9, src: '/avatars/avatar9.jpg', alt: 'Team member', top: '69.2%', left: '68.0%', size: 'w-9 h-9' },

    // Innermost Dashed Ring (r=100)
    { id: 6, src: '/avatars/avatar6.jpg', alt: 'Team member', top: '44.0%', left: '74.8%', size: 'w-9 h-9' },
  ]

  const orangeDots = [
    { top: '34.9%', left: '32.3%' }, // on Ring 3 (r=250)
    { top: '63.4%', left: '30.7%' }, // on Ring 3 (r=250)
    { top: '42.3%', left: '51.1%' }, // on Ring 2 (r=175)
    { top: '50.0%', left: '71.9%' }, // on Ring 1 (r=100)
  ]

  return (
    <section
      id="contact"
      data-scroll
      data-scroll-section
      data-scroll-speed="1.2"
      className="w-full bg-[#ECEBE7] dark:bg-black pt-20 pb-12 sm:pt-24 sm:pb-16 md:py-24 flex items-center justify-between relative z-10 overflow-hidden transition-colors duration-300"
    >
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-3 lg:gap-4 xl:gap-5 relative px-4 sm:px-6 lg:px-0">
        
        {/* Left Card: Touches Left Screen Edge (Desktop), Pure White/Black */}
        <div className="hidden lg:flex lg:w-[28%] xl:w-[26%] 2xl:w-[24%] shrink-0 bg-white dark:bg-black rounded-r-3xl rounded-l-none p-4 overflow-hidden relative shadow-xl flex-col items-center justify-center min-h-[640px] select-none border-y border-r border-zinc-200/90 dark:border-zinc-800 transition-colors duration-300">
          {/* Concentric orbital rings radiating from right edge */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 320 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Concentric circles centered at (330, 350) */}
            <circle cx="330" cy="350" r="100" className="stroke-zinc-300 dark:stroke-zinc-800" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.9" />
            <circle cx="330" cy="350" r="175" className="stroke-zinc-200 dark:stroke-zinc-800/80" strokeWidth="1.2" opacity="0.9" />
            <circle cx="330" cy="350" r="250" className="stroke-zinc-200 dark:stroke-zinc-800/80" strokeWidth="1.2" opacity="0.9" />
            <circle cx="330" cy="350" r="320" className="stroke-zinc-200 dark:stroke-zinc-800/80" strokeWidth="1.2" opacity="0.9" />
            <circle cx="330" cy="350" r="400" className="stroke-zinc-100 dark:stroke-zinc-900" strokeWidth="1.2" opacity="0.8" />
          </svg>

          {/* Golden / Orange accent dots along orbit curves */}
          {orangeDots.map((dot, idx) => (
            <div
              key={`dot-${idx}`}
              style={{ top: dot.top, left: dot.left }}
              className="absolute w-2 h-2 rounded-full bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.8)] transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-150"
            />
          ))}

          {/* Avatars along the orbital paths */}
          {avatars.map((av) => (
            <div
              key={av.id}
              style={{ top: av.top, left: av.left }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${av.size} rounded-full border-2 border-white dark:border-zinc-800 shadow-md overflow-hidden bg-zinc-100 dark:bg-zinc-800 transition-all duration-300 hover:scale-110 hover:border-rose-500 hover:shadow-xl hover:z-20`}
            >
              <img
                src={av.src}
                alt={av.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Right Card: Touches Right Screen Edge (Desktop), Pure White/Black */}
        <div className="w-full flex-1 bg-white dark:bg-black rounded-2xl lg:rounded-none lg:rounded-l-3xl p-5 sm:p-10 md:p-12 lg:p-14 shadow-xl flex flex-col justify-center border border-zinc-200/90 dark:border-zinc-800 lg:border-y lg:border-l lg:border-r-0 lg:mx-0 transition-colors duration-300">
          <div className="w-full max-w-2xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
                We’d love to help
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm sm:text-base font-normal">
                Reach out and we’ll get in touch within 24 hours.
              </p>
            </div>

            {/* Notification alert if submitted or error */}
            {statusMessage && (
              <div
                className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                    : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                )}
                <p>{statusMessage.text}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              
              {/* Row 1: First name & Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="w-full px-3.5 py-2.5 bg-zinc-50/80 dark:bg-zinc-900/70 hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 border border-zinc-300 dark:border-zinc-800 rounded-lg text-base sm:text-sm shadow-2xs focus:outline-none focus:border-zinc-900 dark:focus:border-rose-500 focus:ring-1 focus:ring-zinc-900 dark:focus:ring-rose-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="w-full px-3.5 py-2.5 bg-zinc-50/80 dark:bg-zinc-900/70 hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 border border-zinc-300 dark:border-zinc-800 rounded-lg text-base sm:text-sm shadow-2xs focus:outline-none focus:border-zinc-900 dark:focus:border-rose-500 focus:ring-1 focus:ring-zinc-900 dark:focus:ring-rose-500 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Contact Number */}
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="+1 234 567 890"
                  className="w-full px-3.5 py-2.5 bg-zinc-50/80 dark:bg-zinc-900/70 hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 border border-zinc-300 dark:border-zinc-800 rounded-lg text-base sm:text-sm shadow-2xs focus:outline-none focus:border-zinc-900 dark:focus:border-rose-500 focus:ring-1 focus:ring-zinc-900 dark:focus:ring-rose-500 transition-all"
                />
              </div>

              {/* Row 3: Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full px-3.5 py-2.5 bg-zinc-50/80 dark:bg-zinc-900/70 hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 border border-zinc-300 dark:border-zinc-800 rounded-lg text-base sm:text-sm shadow-2xs focus:outline-none focus:border-zinc-900 dark:focus:border-rose-500 focus:ring-1 focus:ring-zinc-900 dark:focus:ring-rose-500 transition-all"
                />
              </div>

              {/* Row 4: Age Group & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Age Group
                  </label>
                  <div className="relative">
                    <select
                      id="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-zinc-50/80 dark:bg-zinc-900/70 hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-800 rounded-lg text-base sm:text-sm shadow-2xs appearance-none focus:outline-none focus:border-zinc-900 dark:focus:border-rose-500 focus:ring-1 focus:ring-zinc-900 dark:focus:ring-rose-500 transition-all cursor-pointer pr-10"
                    >
                      <option value="-" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">-</option>
                      <option value="-18" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">-18</option>
                      <option value="18-32" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">18-32</option>
                      <option value="32-56" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">32-56</option>
                      <option value="57+" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">57+</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Location
                  </label>
                  <div className="relative">
                    <select
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-zinc-50/80 dark:bg-zinc-900/70 hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-800 rounded-lg text-base sm:text-sm shadow-2xs appearance-none focus:outline-none focus:border-zinc-900 dark:focus:border-rose-500 focus:ring-1 focus:ring-zinc-900 dark:focus:ring-rose-500 transition-all cursor-pointer pr-10"
                    >
                      <option value="Australia" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Australia</option>
                      <option value="Brazil" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Brazil</option>
                      <option value="Canada" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Canada</option>
                      <option value="China" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">China</option>
                      <option value="France" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">France</option>
                      <option value="Germany" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Germany</option>
                      <option value="India" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">India</option>
                      <option value="Italy" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Italy</option>
                      <option value="Japan" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Japan</option>
                      <option value="Mexico" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Mexico</option>
                      <option value="Netherlands" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Netherlands</option>
                      <option value="Russia" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Russia</option>
                      <option value="South Korea" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">South Korea</option>
                      <option value="Spain" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Spain</option>
                      <option value="Sweden" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Sweden</option>
                      <option value="Switzerland" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Switzerland</option>
                      <option value="United Kingdom" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">United Kingdom</option>
                      <option value="United States" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">United States</option>
                      <option value="Argentina" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Argentina</option>
                      <option value="Belgium" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Belgium</option>
                      <option value="Egypt" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Egypt</option>
                      <option value="Greece" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Greece</option>
                      <option value="Indonesia" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Indonesia</option>
                      <option value="Saudi Arabia" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Saudi Arabia</option>
                      <option value="Turkey" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Turkey</option>
                      <option value="Other" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">Other</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 5: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave us a message..."
                  rows={4}
                  className="w-full px-3.5 py-2.5 bg-zinc-50/80 dark:bg-zinc-900/70 hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 border border-zinc-300 dark:border-zinc-800 rounded-lg text-base sm:text-sm shadow-2xs focus:outline-none focus:border-zinc-900 dark:focus:border-rose-500 focus:ring-1 focus:ring-zinc-900 dark:focus:ring-rose-500 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-3/5 py-3 px-8 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white active:scale-[0.99] text-white dark:text-black font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white dark:text-black" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact

