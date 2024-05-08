
export default async function Home({ params }: { params: { profile: string } }) {

    return (

        <div className="text-red-700">
            default profile
        </div>


        /*       <div className=" mx-auto max-w-[43rem] lg:max-w-[65rem] xl:max-w-[84rem] max-xs:p-3 xs:px-4">
      
                  <div className="bg-red-200  xs:grid-cols-[auto,_1fr] max-xs:gap-y-6 xs:gap-x-4">
      
                     <Navbar className="xs:hidden" /> 
      
                      <Header className="hidden xs:block" />
      
                      {response.data.media ?
      
                          <div className="lg:grid lg:grid-cols-[auto,_1fr] lg:gap-x-4">
      
                              <div className=" lg:min-w-[450px] lg:max-w-[600px]">
      
                                  <Gallery media={response.data.media} />
      
                                  <Footer />
      
      
                              </div>
      
      
                              <Sidebar pricing={response.data.pricing} />
      
                          </div>
      
                          :
      
                          <NotFound />
                      }
                  </div>
      
              </div> */
    )
}