import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <div className="px-8 pt-16 pb-5 w-full bg-teal-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="text-6xl text-white border border-black border-solid max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              UNIVERSAL BUZZ
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between mt-1.5 text-2xl text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="self-end mt-6">HOME</div>
              <div className="my-auto">ABOUT</div>
              <div className="justify-center items-start px-3.5 py-4 whitespace-nowrap bg-zinc-300 text-neutral-500 max-md:pr-5">
                Search
              </div>
              <div className="self-end mt-6">Sign Out</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            comment here
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            comment
          </div>
        </div>
      </div>
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col ml-10 max-w-full text-4xl font-bold text-teal-950 w-[586px]">
                <div className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
                  Welcome, NAME!
                </div>
                <div className="flex gap-5 mt-6 whitespace-nowrap bg-zinc-300 max-md:flex-wrap">
                  comment
                  <div className="flex-auto my-auto max-md:max-w-full">
                    PROFILE
                  </div>
                </div>
                <div className="flex gap-2.5 mt-3.5 whitespace-nowrap bg-zinc-300 max-md:flex-wrap">
                  comment
                  <div className="flex-auto my-auto max-md:max-w-full">
                    CHATROOMS
                  </div>
                </div>
                <div className="flex gap-2 mt-5 whitespace-nowrap bg-zinc-300 max-md:flex-wrap">
                  comment
                  <div className="flex-auto my-auto max-md:max-w-full">
                    SETTINGS
                  </div>
                </div>
                <div className="mt-14 text-4xl text-black max-md:mt-10 max-md:max-w-full">
                  Recent News
                </div>
              </div>
              <div className="flex flex-col py-8 pr-20 pl-10 mt-5 w-full bg-teal-950 max-md:px-5 max-md:max-w-full">
                <div className="max-w-full w-[903px] max-md:pr-5">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow pt-5 pb-20 w-full text-2xl text-black rounded-3xl bg-zinc-300 max-md:mt-7">
                        comment
                        <div className="flex flex-col self-start mt-8 ml-3 max-md:ml-2.5">
                          <div className="font-bold">News 1</div>
                          <div className="mt-12 font-medium max-md:mt-10">
                            News content
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-1.5 pt-5 pb-20 w-full text-2xl text-black rounded-3xl bg-zinc-300 max-md:mt-7">
                        comment
                        <div className="mt-8 font-bold">News 2</div>
                        <div className="mt-14 max-md:mt-10">Content</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-3 pt-5 pb-20 w-full text-2xl text-black rounded-3xl bg-zinc-300 max-md:mt-7">
                        comment
                        <div className="mt-8 font-bold">News 3</div>
                        <div className="mt-14 max-md:mt-10">Content</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-center mt-7 ml-36 text-3xl font-semibold text-white">
                  More News
                </div>
              </div>
              <div className="self-start mt-11 ml-8 text-4xl font-bold text-black max-md:mt-10 max-md:ml-2.5">
                Upcoming Events
              </div>
              <div className="flex flex-col pt-10 pr-20 pb-4 pl-6 mt-3 w-full bg-teal-950 max-md:px-5 max-md:max-w-full">
                <div className="max-w-full w-[929px]">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-2 py-11 w-full text-2xl text-black rounded-3xl bg-zinc-300 max-md:mt-7">
                        comment
                        <div className="mt-6 font-bold">Mon, April 1</div>
                        <div className="mt-5 font-medium">
                          Monday Meditation: April (Early Morning)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-3.5 py-11 w-full text-2xl text-black rounded-3xl bg-zinc-300 max-md:mt-7">
                        coomment
                        <div className="mt-8 font-bold">Tues, April 2</div>
                        <div className="mt-5">
                          Adaptive Sports: Wheelchair Rugby
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start py-20 pr-20 pl-3.5 w-full text-2xl text-black whitespace-nowrap rounded-3xl bg-zinc-300 max-md:pr-5 max-md:mt-7">
                        <div className="mt-36 font-bold max-md:mt-10">
                          Date
                        </div>
                        <div className="mt-8">Event</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-center mt-6 ml-40 text-3xl font-semibold text-white">
                  More Events
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-12 pr-10 pb-20 pl-4 w-full text-3xl font-bold text-black bg-stone-400 max-md:pr-5 max-md:max-w-full">
              <div className="text-4xl">Campus Resources</div>
              <div className="justify-center items-start px-3.5 py-8 mt-7 bg-zinc-300 max-md:pr-5">
                International Services
              </div>
              <div className="justify-center items-start px-3.5 py-7 mt-5 whitespace-nowrap bg-zinc-300 max-md:pr-5">
                Scholarships
              </div>
              <div className="justify-center items-start px-3.5 py-8 mt-5 bg-zinc-300 max-md:pr-5">
                Financial Aid
              </div>
              <div className="justify-center items-start px-3.5 py-7 mt-5 bg-zinc-300 max-md:pr-5">
                Housing Information
              </div>
              comment
              <div className="mt-4 text-3xl">Location</div>
              <div className="mt-7 text-2xl">
                International Programs <br /> Library, Room 1001 Mon. – Fri., 8
                a.m. – 5 p.m.
              </div>
              <div className="justify-center px-14 py-5 mt-3.5 text-2xl font-semibold text-white rounded-3xl bg-teal-950 max-md:pr-7 max-md:pl-5">
                Find us on Campus Map
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-14 py-16 w-full bg-teal-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="text-2xl text-white max-md:mt-10">About Us:</div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="text-2xl text-white underline max-md:mt-10">
              Contact Us: <br /> Phone: (916) 278-6686 <br />
              <a
                href="mailto:x@csus.edu"
                className="underline"
                target="" // target to email redirect
              >
                intlinfo@csus.edu
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="text-2xl text-white max-md:mt-10">Follow Us:</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyComponent;